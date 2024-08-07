import type { BaseSlackAPIClient } from "./base-client.ts";
import type { BaseResponse, SlackAPIClient, SlackAPIMethodArgs } from "./types.ts";

const DO_NOT_PROXY = ["then"];

type APICallback = {
  (method: string, payload?: SlackAPIMethodArgs): Promise<BaseResponse>;
};

export const ProxifyAndTypeClient = (baseClient: BaseSlackAPIClient) => {
  // This callback handles making the correct apiCall() that the Proxy() object defers to
  const apiCallHandler = (method: string, payload?: SlackAPIMethodArgs) => {
    return baseClient.apiCall(method, payload);
  };

  // Create a subset of the client that we want to wrap our Proxy() around
  const clientToProxy = {
    setSlackApiUrl: baseClient.setSlackApiUrl.bind(baseClient),
    apiCall: baseClient.apiCall.bind(baseClient),
    response: baseClient.response.bind(baseClient),
  };

  // Create our proxy, and type it w/ our api method types
  const client = APIProxy(
    clientToProxy,
    apiCallHandler,
  );
  return client;
};

export const APIProxy = (
  // deno-lint-ignore no-explicit-any
  rootClient: any | null,
  apiCallback: APICallback,
  ...path: (string | undefined)[]
): SlackAPIClient => {
  const method = path.filter(Boolean).join(".");

  // We either proxy the object passed in, which we do for the top level client,
  // or a function that wraps the api callback. This allows each node of the
  // proxied object to be called, which will attempt an api call using the path as the method
  const objectToProxy = rootClient !== null
    ? rootClient
    : (payload?: SlackAPIMethodArgs) => {
      return apiCallback(method, payload);
    };

  const proxy = new Proxy(objectToProxy, {
    get(obj, prop) {
      // We're attempting to access a property that doesn't exist, so create a new nested proxy
      if (
        typeof prop === "string" && !DO_NOT_PROXY.includes(prop) &&
        !(prop in obj)
      ) {
        return APIProxy(null, apiCallback, ...path, prop);
      }

      // Fallback to trying to access it directly
      // deno-lint-ignore no-explicit-any
      return Reflect.get.apply(obj, arguments as any);
    },
  });

  return proxy;
};

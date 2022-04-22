import { BaseResponse, SlackAPIMethodArgs } from "./types.ts";

type APICallback = {
  (method: string, payload?: SlackAPIMethodArgs): Promise<BaseResponse>;
};

export const APIProxy = (
  // deno-lint-ignore no-explicit-any
  rootClient: any | null,
  apiCallback: APICallback,
  ...path: (string | undefined)[]
  // deno-lint-ignore no-explicit-any
): any => {
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
      if (typeof prop === "string" && !(prop in obj)) {
        return APIProxy(null, apiCallback, ...path, prop);
      }

      // Fallback to trying to access it directly
      // deno-lint-ignore no-explicit-any
      return Reflect.get.apply(obj, arguments as any);
    },
  });

  return proxy;
};

import { BaseSlackAPIClient } from "./base-client.ts";
import { SlackAPIMethodArgs, SlackAPIOptions } from "./types.ts";
import { APIProxy } from "./api-proxy.ts";
import { SlackAPIMethodsType } from "./generated/method-types/mod.ts";

export const SlackAPI = (token: string, options: SlackAPIOptions = {}) => {
  // Create our base client instance
  const baseClient = new BaseSlackAPIClient(token, options);

  // Create a subest of the client that we want to wrap our Proxy() around
  const clientToProxy = {
    apiCall: baseClient.apiCall.bind(baseClient),
    response: baseClient.response.bind(baseClient),
  };

  // This callback handles making the correct apiCall() that the Proxy() object defers to
  const apiCallHandler = (method: string, payload?: SlackAPIMethodArgs) => {
    return baseClient.apiCall(method, payload);
  };

  // Create our proxy, and type it w/ our generated api method types
  const client = APIProxy(clientToProxy, apiCallHandler) as
    & typeof clientToProxy
    & SlackAPIMethodsType;

  return client;
};

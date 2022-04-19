import { BaseSlackAPIClient } from "./base-client.ts";
import { SlackAPIMethodArgs, SlackAPIOptions } from "./types.ts";
import { APIProxy } from "./api-proxy.ts";
import { SlackAPIMethodsType } from "./generated-method-types/mod.ts";

export const SlackAPI = (token: string, options: SlackAPIOptions = {}) => {
  const baseClient = new BaseSlackAPIClient(token, options);

  const clientToProxy = {
    apiCall: baseClient.apiCall.bind(baseClient),
    response: baseClient.response.bind(baseClient),
  };

  const apiCallHandler = (method: string, payload?: SlackAPIMethodArgs) => {
    return baseClient.apiCall(method, payload);
  };

  const client = APIProxy(clientToProxy, apiCallHandler) as
    & typeof clientToProxy
    & SlackAPIMethodsType;

  return client;
};

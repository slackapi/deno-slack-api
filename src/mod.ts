import { BaseSlackAPIClient } from "./base-client.ts";
import { SlackAPIOptions } from "./types.ts";
import { ProxifyAndTypeClient } from "./api-proxy.ts";

export const SlackAPI = (token: string, options: SlackAPIOptions = {}) => {
  // Create our base client instance
  const baseClient = new BaseSlackAPIClient(token, options);

  // Enrich client w/ a proxy and types to allow all api method calls
  const client = ProxifyAndTypeClient(baseClient);

  return client;
};

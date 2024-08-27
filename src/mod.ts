import { BaseSlackAPIClient } from "./base-client.ts";
import type { SlackAPIClient, SlackAPIOptions } from "./types.ts";
import { ProxifyAndTypeClient } from "./api-proxy.ts";

export {
  TriggerContextData,
  TriggerTypes,
} from "./typed-method-types/workflows/triggers/mod.ts";
export { TriggerEventTypes } from "./typed-method-types/workflows/triggers/trigger-event-types.ts";

export const SlackAPI = (
  token: string,
  options: SlackAPIOptions = {},
): SlackAPIClient => {
  // Create our base client instance
  const baseClient = new BaseSlackAPIClient(token, options);

  // Enrich client w/ a proxy and types to allow all api method calls
  const client = ProxifyAndTypeClient(baseClient);

  return client;
};

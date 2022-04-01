// Placeholder file until we drop in generated source
import { BaseSlackAPIClient } from "../base-client.ts";
import { SlackAPIOptions } from "../types.ts";

export const SlackAPI = (token: string, options: SlackAPIOptions) => {
  return new BaseSlackAPIClient(token, options);
};

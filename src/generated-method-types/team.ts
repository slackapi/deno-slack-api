import { SlackAPIMethod } from "../types.ts";

export type TeamAPIType = {
  accessLogs: SlackAPIMethod;
  billableInfo: SlackAPIMethod;
  info: SlackAPIMethod;
  integrationLogs: SlackAPIMethod;
  profile: {
    get: SlackAPIMethod;
  };
};

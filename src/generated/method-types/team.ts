import { SlackAPIMethod } from "../../types.ts";

export type TeamAPIType = {
  accessLogs: SlackAPIMethod;
  billableInfo: SlackAPIMethod;
  billing: {
    info: SlackAPIMethod;
  };
  info: SlackAPIMethod;
  integrationLogs: SlackAPIMethod;
  preferences: {
    list: SlackAPIMethod;
  };
  profile: {
    get: SlackAPIMethod;
  };
};

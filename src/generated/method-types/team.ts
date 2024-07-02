import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type TeamAPIType = {
  accessLogs: SlackAPIMethod;
  billableInfo: SlackAPIMethod;
  billing: {
    info: SlackAPIMethod;
  };
  externalTeams: {
    disconnect: SlackAPIMethod;
    list: SlackAPICursorPaginatedMethod;
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

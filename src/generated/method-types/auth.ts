import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type AuthAPIType = {
  revoke: SlackAPIMethod;
  teams: {
    list: SlackAPICursorPaginatedMethod;
  };
  test: SlackAPIMethod;
};

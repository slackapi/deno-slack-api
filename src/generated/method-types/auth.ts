import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type AuthAPIType = {
  revoke: SlackAPIMethod;
  teams: {
    list: SlackAPIMethodCursorPaginated;
  };
  test: SlackAPIMethod;
};

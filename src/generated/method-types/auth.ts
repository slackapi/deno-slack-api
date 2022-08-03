import { SlackAPIMethod } from "../../types.ts";

export type AuthAPIType = {
  revoke: SlackAPIMethod;
  teams: {
    list: SlackAPIMethod;
  };
  test: SlackAPIMethod;
};

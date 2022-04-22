import { SlackAPIMethod } from "../../types.ts";

export type ReactionsAPIType = {
  add: SlackAPIMethod;
  get: SlackAPIMethod;
  list: SlackAPIMethod;
  remove: SlackAPIMethod;
};

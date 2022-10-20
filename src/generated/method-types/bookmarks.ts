import type { SlackAPIMethod } from "../../types.ts";

export type BookmarksAPIType = {
  add: SlackAPIMethod;
  edit: SlackAPIMethod;
  list: SlackAPIMethod;
  remove: SlackAPIMethod;
};

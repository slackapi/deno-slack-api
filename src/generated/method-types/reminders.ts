import { SlackAPIMethod } from "../../types.ts";

export type RemindersAPIType = {
  add: SlackAPIMethod;
  complete: SlackAPIMethod;
  delete: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPIMethod;
};

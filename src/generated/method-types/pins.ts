import type { SlackAPIMethod } from "../../types.ts";

export type PinsAPIType = {
  add: SlackAPIMethod;
  list: SlackAPIMethod;
  remove: SlackAPIMethod;
};

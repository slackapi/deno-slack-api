import { SlackAPIMethod } from "../../types.ts";

export type GroupsAPIType = {
  create: SlackAPIMethod;
  info: SlackAPIMethod;
  invite: SlackAPIMethod;
  mark: SlackAPIMethod;
  open: SlackAPIMethod;
};

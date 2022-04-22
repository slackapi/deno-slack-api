import { SlackAPIMethod } from "../../types.ts";

export type ChannelsAPIType = {
  create: SlackAPIMethod;
  info: SlackAPIMethod;
  invite: SlackAPIMethod;
  mark: SlackAPIMethod;
};

import { SlackAPIMethod } from "../types.ts";

export type ConversationsAPIType = {
  archive: SlackAPIMethod;
  close: SlackAPIMethod;
  create: SlackAPIMethod;
  history: SlackAPIMethod;
  info: SlackAPIMethod;
  invite: SlackAPIMethod;
  join: SlackAPIMethod;
  kick: SlackAPIMethod;
  leave: SlackAPIMethod;
  list: SlackAPIMethod;
  mark: SlackAPIMethod;
  members: SlackAPIMethod;
  open: SlackAPIMethod;
  rename: SlackAPIMethod;
  replies: SlackAPIMethod;
  setPurpose: SlackAPIMethod;
  setTopic: SlackAPIMethod;
  unarchive: SlackAPIMethod;
};

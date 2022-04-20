import { SlackAPIMethod } from "../../types.ts";

export type ConversationsAPIType = {
  acceptSharedInvite: SlackAPIMethod;
  approveSharedInvite: SlackAPIMethod;
  archive: SlackAPIMethod;
  close: SlackAPIMethod;
  create: SlackAPIMethod;
  declineSharedInvite: SlackAPIMethod;
  history: SlackAPIMethod;
  info: SlackAPIMethod;
  invite: SlackAPIMethod;
  inviteShared: SlackAPIMethod;
  join: SlackAPIMethod;
  kick: SlackAPIMethod;
  leave: SlackAPIMethod;
  list: SlackAPIMethod;
  listConnectInvites: SlackAPIMethod;
  mark: SlackAPIMethod;
  members: SlackAPIMethod;
  open: SlackAPIMethod;
  rename: SlackAPIMethod;
  replies: SlackAPIMethod;
  setPurpose: SlackAPIMethod;
  setTopic: SlackAPIMethod;
  unarchive: SlackAPIMethod;
};

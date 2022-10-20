import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type ConversationsAPIType = {
  acceptSharedInvite: SlackAPIMethod;
  approveSharedInvite: SlackAPIMethod;
  archive: SlackAPIMethod;
  close: SlackAPIMethod;
  create: SlackAPIMethod;
  declineSharedInvite: SlackAPIMethod;
  history: SlackAPIMethodCursorPaginated;
  info: SlackAPIMethod;
  invite: SlackAPIMethod;
  inviteShared: SlackAPIMethod;
  join: SlackAPIMethod;
  kick: SlackAPIMethod;
  leave: SlackAPIMethod;
  list: SlackAPIMethodCursorPaginated;
  listConnectInvites: SlackAPIMethodCursorPaginated;
  mark: SlackAPIMethod;
  members: SlackAPIMethodCursorPaginated;
  open: SlackAPIMethod;
  rename: SlackAPIMethod;
  replies: SlackAPIMethodCursorPaginated;
  setPurpose: SlackAPIMethod;
  setTopic: SlackAPIMethod;
  unarchive: SlackAPIMethod;
};

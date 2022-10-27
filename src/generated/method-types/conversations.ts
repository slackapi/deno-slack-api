import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type ConversationsAPIType = {
  acceptSharedInvite: SlackAPIMethod;
  approveSharedInvite: SlackAPIMethod;
  archive: SlackAPIMethod;
  close: SlackAPIMethod;
  create: SlackAPIMethod;
  declineSharedInvite: SlackAPIMethod;
  history: SlackAPICursorPaginatedMethod;
  info: SlackAPIMethod;
  invite: SlackAPIMethod;
  inviteShared: SlackAPIMethod;
  join: SlackAPIMethod;
  kick: SlackAPIMethod;
  leave: SlackAPIMethod;
  list: SlackAPICursorPaginatedMethod;
  listConnectInvites: SlackAPICursorPaginatedMethod;
  mark: SlackAPIMethod;
  members: SlackAPICursorPaginatedMethod;
  open: SlackAPIMethod;
  rename: SlackAPIMethod;
  replies: SlackAPICursorPaginatedMethod;
  setPurpose: SlackAPIMethod;
  setTopic: SlackAPIMethod;
  unarchive: SlackAPIMethod;
};

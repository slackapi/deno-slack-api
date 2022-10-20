import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type ChatAPIType = {
  delete: SlackAPIMethod;
  deleteScheduledMessage: SlackAPIMethod;
  getPermalink: SlackAPIMethod;
  meMessage: SlackAPIMethod;
  postEphemeral: SlackAPIMethod;
  scheduledMessages: {
    list: SlackAPIMethodCursorPaginated;
  };
  scheduleMessage: SlackAPIMethod;
  unfurl: SlackAPIMethod;
  update: SlackAPIMethod;
};

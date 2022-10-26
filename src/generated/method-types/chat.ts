import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type ChatAPIType = {
  delete: SlackAPIMethod;
  deleteScheduledMessage: SlackAPIMethod;
  getPermalink: SlackAPIMethod;
  meMessage: SlackAPIMethod;
  postEphemeral: SlackAPIMethod;
  scheduledMessages: {
    list: SlackAPICursorPaginatedMethod;
  };
  scheduleMessage: SlackAPIMethod;
  unfurl: SlackAPIMethod;
  update: SlackAPIMethod;
};

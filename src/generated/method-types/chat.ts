import { SlackAPIMethod } from "../../types.ts";

export type ChatAPIType = {
  delete: SlackAPIMethod;
  deleteScheduledMessage: SlackAPIMethod;
  getPermalink: SlackAPIMethod;
  meMessage: SlackAPIMethod;
  postEphemeral: SlackAPIMethod;
  postMessage: SlackAPIMethod;
  scheduledMessages: {
    list: SlackAPIMethod;
  };
  scheduleMessage: SlackAPIMethod;
  unfurl: SlackAPIMethod;
  update: SlackAPIMethod;
};

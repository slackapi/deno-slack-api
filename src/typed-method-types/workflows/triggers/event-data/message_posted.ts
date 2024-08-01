import base_trigger_data from "./common-objects/all_triggers.ts";

export const MessagePosted = {
  ...base_trigger_data,
  /**
   * A unique identifier for the app that posted the message. Only available when message is posted by an app.
   */
  app_id: "{{data.app_id}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} where message was posted.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel type where the message was posted. Can be one of "public", "private", "mpdm" or "im".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/message_posted".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the message was sent. In the case this is a threaded message, this property becomes the `message_ts` of the parent message.
   */
  message_ts: "{{data.message_ts}}",
  /**
   * The text in the message.
   */
  text: "{{data.text}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the threaded message was sent. At runtime this value may not exist if the message in question is not a threaded message!
   */
  thread_ts: "{{data.thread_ts}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who posted the message.
   */
  user_id: "{{data.user_id}}",
} as const;

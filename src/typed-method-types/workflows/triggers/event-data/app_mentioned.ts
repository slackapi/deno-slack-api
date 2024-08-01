import base_trigger_data from "./common-objects/all_triggers.ts";

export const AppMentioned = {
  ...base_trigger_data,
  /**
   * A unique identifier for the app being mentioned.
   */
  app_id: "{{data.app_id}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} where the app was mentioned.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel name where the app was mentioned.
   */
  channel_name: "{{data.channel_name}}",
  /**
   * The channel type where the app was mentioned. Can be one of "public", "private", "mpdm" or "im".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/app_mentioned".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the message mentioning the app was sent.
   */
  message_ts: "{{data.message_ts}}",
  /**
   * The text in the message containing the app mention.
   */
  text: "{{data.text}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who mentioned the app.
   */
  user_id: "{{data.user_id}}",
} as const;

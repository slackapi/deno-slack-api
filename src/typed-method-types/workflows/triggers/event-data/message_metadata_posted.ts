import base_trigger_data from "./common-objects/all_triggers.ts";

export const MessageMetadataPosted = {
  ...base_trigger_data,
  /**
   * A unique identifier for the app that posted metadata.
   */
  app_id: "{{data.app_id}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} where the metadata was posted.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/message_metadata_posted".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the message containing metadata was sent.
   */
  message_ts: "{{data.message_ts}}",
  /**
   * Metadata attached to the message. See {@link https://api.slack.com/metadata Message Metadata documentation} for more details.
   */
  metadata: "{{data.metadata}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who posted the metadata-containing message.
   */
  user_id: "{{data.user_id}}",
} as const;

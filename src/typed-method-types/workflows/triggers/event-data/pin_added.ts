export const PinAdded = {
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} where the message was pinned.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel name for the channel where the message was pinned.
   */
  channel_name: "{{data.channel_name}}",
  /**
   * The channel type for the channel where the message was pinned. Can be one of "public", "private", "mpdm" or "im".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/pin_added".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the message being pinned was sent.
   */
  message_ts: "{{data.message_ts}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who pinned the message.
   */
  user_id: "{{data.user_id}}",
} as const;

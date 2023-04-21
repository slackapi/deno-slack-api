export const UserLeftChannel = {
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} that was left.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel type for the channel that was left. Can be one of "public", "private", "mpdm" or "im".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/user_left_channel".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who left the channel.
   */
  user_id: "{{data.user_id}}",
} as const;

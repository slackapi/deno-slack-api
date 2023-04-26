export const ChannelRenamed = {
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} that was renamed.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The new channel name for the channel that was renamed.
   */
  channel_name: "{{data.channel_name}}",
  /**
   * The channel type for the channel that was renamed. Can be one of "public" or "private".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/channel_renamed".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who renamed the channel.
   */
  user_id: "{{data.user_id}}",
} as const;

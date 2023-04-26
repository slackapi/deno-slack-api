export const ChannelArchived = {
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} that was archived.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel name for the channel that was archived.
   */
  channel_name: "{{data.channel_name}}",
  /**
   * The channel type for the channel that was archived. Can be one of "public" or "private".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/channel_archived".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who archived the channel.
   */
  user_id: "{{data.user_id}}",
} as const;

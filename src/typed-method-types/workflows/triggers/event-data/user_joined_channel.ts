import base_trigger_data from "./common-objects/all_triggers.ts";

export const UserJoinedChannel = {
  ...base_trigger_data,
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} that was joined.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel type for the channel that was joined. Can be one of "public", "private", "mpdm" or "im".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/user_joined_channel".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who joined the channel.
   */
  user_id: "{{data.user_id}}",
} as const;

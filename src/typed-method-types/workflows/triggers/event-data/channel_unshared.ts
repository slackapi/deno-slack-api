import base_trigger_data from "./common-objects/all_triggers.ts";

export const ChannelUnshared = {
  ...base_trigger_data,
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} that was unshared.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel name for the channel that was unshared.
   */
  channel_name: "{{data.channel_name}}",
  /**
   * The channel type for the channel that was unshared. Can be one of "public" or "private".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * A unique identifier for the team or workspace that the channel was unshared with.
   */
  disconnected_team_id: "{{data.disconnected_team_id}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/channel_unshared".
   */
  event_type: "{{data.event_type}}",
  /**
   * Whether the channel was externally shared or not.
   */
  is_ext_shared: "{{data.is_ext_shared}}",
} as const;

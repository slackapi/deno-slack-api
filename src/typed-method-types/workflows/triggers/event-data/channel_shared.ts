import base_trigger_data from "./common-objects/all_triggers.ts";

export const ChannelShared = {
  ...base_trigger_data,
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} that was shared.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel name for the channel that was shared.
   */
  channel_name: "{{data.channel_name}}",
  /**
   * The channel type for the channel that was shared. Can be one of "public" or "private".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * A unique identifier for the team or workspace that the channel was shared with.
   */
  connected_team_id: "{{data.connected_team_id}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/channel_shared".
   */
  event_type: "{{data.event_type}}",
} as const;

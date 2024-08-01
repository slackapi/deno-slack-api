import base_trigger_data from "./common-objects/all_triggers.ts";

export const ChannelCreated = {
  ...base_trigger_data,
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} that was created.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel name for the channel that was created.
   */
  channel_name: "{{data.channel_name}}",
  /**
   * The channel type for the channel that was created. Can be one of "public" or "private".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the channel was created.
   */
  created: "{{data.created}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who created the channel.
   */
  creator_id: "{{data.creator_id}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/channel_created".
   */
  event_type: "{{data.event_type}}",
} as const;

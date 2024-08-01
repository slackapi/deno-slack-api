import { Invite } from "./common-objects/shared_channel_invite.ts";
import base_trigger_data from "./common-objects/all_triggers.ts";

export const SharedChannelInviteReceived = {
  ...base_trigger_data,
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} being shared.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The channel name for the channel being shared.
   */
  channel_name: "{{data.channel_name}}",
  /**
   * The channel type for the channel being shared. Can be one of "public", "private", "mpdm" or "im".
   */
  channel_type: "{{data.channel_type}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/shared_channel_invite_received".
   */
  event_type: "{{data.event_type}}",
  /**
   * Details for the invite itself.
   */
  invite: Invite,
} as const;

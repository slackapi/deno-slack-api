import { Invite } from "./common-objects/shared_channel_invite.ts";
import base_trigger_data from "./common-objects/all_triggers.ts";

const AcceptingUser = {
  /**
   * The display name of the invited user.
   */
  display_name: "{{data.accepting_user.display_name}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} being invited.
   */
  id: "{{data.accepting_user.id}}",
  /**
   * Whether or not the user being invited is a bot.
   */
  is_bot: "{{data.accepting_user.is_bot}}",
  /**
   * The name of the invited user.
   */
  name: "{{data.accepting_user.name}}",
  /**
   * The real name of the invited user.
   */
  real_name: "{{data.accepting_user.real_name}}",
  /**
   * A unique identifier for the team or workspace the invited user originally belongs to.
   */
  team_id: "{{data.accepting_user.team_id}}",
  /**
   * The timezone of the user who being invited, in TZ identifier format.
   * @example "America/Toronto"
   */
  timezone: "{{data.accepting_user.timezone}}",
} as const;

Object.defineProperty(AcceptingUser, "toJSON", {
  value: () => "{{data.accepting_user}}",
});

export const SharedChannelInviteAccepted = {
  ...base_trigger_data,
  /**
   * Object containing details for the invitee.
   */
  accepting_user: AcceptingUser,
  /**
   * Whether the invite required administrator approval or not.
   */
  approval_required: "{{data.approval_required}}",
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
   * The event type being invoked. At runtime will always be "slack#/events/shared_channel_invite_accepted".
   */
  event_type: "{{data.event_type}}",
  /**
   * Details for the invite itself.
   */
  invite: Invite,
  /**
   * An array of objects containing details for all of the teams or workspaces present in the channel being shared.
   */
  teams_in_channel: "{{data.teams_in_channel}}",
} as const;

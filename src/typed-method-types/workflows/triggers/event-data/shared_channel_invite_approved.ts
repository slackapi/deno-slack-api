import { Invite } from "./common-objects/shared_channel_invite.ts";

const ApprovingUser = {
  /**
   * The display name of the approving user.
   */
  display_name: "{{data.approving_user.display_name}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} approving the invite.
   */
  id: "{{data.approving_user.id}}",
  /**
   * Whether or not the approving user is a bot.
   */
  is_bot: "{{data.approving_user.is_bot}}",
  /**
   * The name of the approving user.
   */
  name: "{{data.approving_user.name}}",
  /**
   * The real name of the approving user.
   */
  real_name: "{{data.approving_user.real_name}}",
  /**
   * A unique identifier for the team or workspace the approving user originally belongs to.
   */
  team_id: "{{data.approving_user.team_id}}",
  /**
   * The timezone of the approving user, in TZ identifier format.
   * @example "America/Toronto"
   */
  timezone: "{{data.approving_user.timezone}}",
} as const;

Object.defineProperty(ApprovingUser, "toJSON", {
  value: () => "{{data.approving_user}}",
});

export const SharedChannelInviteApproved = {
  /**
   * A unique identifier for the team or workspace issuing the approval.
   */
  approving_team_id: "{{data.approving_team_id}}",
  /**
   * Object containing details for the administrator approving the invite.
   */
  approving_user: ApprovingUser,
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
   * The event type being invoked. At runtime will always be "slack#/events/shared_channel_invite_approved".
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

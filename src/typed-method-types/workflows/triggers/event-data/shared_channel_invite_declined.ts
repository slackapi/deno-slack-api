import { Invite } from "./common-objects/shared_channel_invite.ts";

const DecliningUser = {
  /**
   * The display name of the declining user.
   */
  display_name: "{{data.declining_user.display_name}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} declining the invite.
   */
  id: "{{data.declining_user.id}}",
  /**
   * Whether or not the declining user is a bot.
   */
  is_bot: "{{data.declining_user.is_bot}}",
  /**
   * The name of the declining user.
   */
  name: "{{data.declining_user.name}}",
  /**
   * The real name of the declining user.
   */
  real_name: "{{data.declining_user.real_name}}",
  /**
   * A unique identifier for the team or workspace the declining user originally belongs to.
   */
  team_id: "{{data.declining_user.team_id}}",
  /**
   * The timezone of the declining user, in TZ identifier format.
   * @example "America/Toronto"
   */
  timezone: "{{data.declining_user.timezone}}",
} as const;

Object.defineProperty(DecliningUser, "toJSON", {
  value: () => "{{data.declining_user}}",
});

export const SharedChannelInviteDeclined = {
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
   * A unique identifier for the team or workspace issuing the declination.
   */
  declining_team_id: "{{data.declining_team_id}}",
  /**
   * Object containing details for the administrator declining the invite.
   */
  declining_user: DecliningUser,
  /**
   * The event type being invoked. At runtime will always be "slack#/events/shared_channel_invite_declined".
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
};

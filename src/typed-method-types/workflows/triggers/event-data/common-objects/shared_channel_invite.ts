const Icon = {} as const;

Object.defineProperty(Icon, "toJSON", {
  value: () => "{{data.invite.inviting_team.icon}}",
});

const InvitingTeam = {
  /**
   * A UNIX timestamp in seconds indicating when the inviting team or workspace was created.
   */
  date_created: "{{data.invite.inviting_team.date_created}}",
  /**
   * The domain of the inviting team or workspace.
   */
  domain: "{{data.invite.inviting_team.domain}}",
  /**
   * An object containing CDN-backed slack.com URLs for the inviting team's icon.
   */
  icon: Icon,
  /**
   * A unique identifier for the team or workspace being invited to.
   */
  id: "{{data.invite.inviting_team.id}}",
  /**
   * Whether or not the inviting team or workspace is verified or not.
   */
  is_verified: "{{data.invite.inviting_team.is_verified}}",
  /**
   * The name of the inviting team of workspace.
   */
  name: "{{data.invite.inviting_team.name}}",
} as const;

Object.defineProperty(InvitingTeam, "toJSON", {
  value: () => "{{data.invite.inviting_team}}",
});

const InvitingUser = {
  /**
   * The display name of the inviting user.
   */
  display_name: "{{data.invite.inviting_user.display_name}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} that sent the invite.
   */
  id: "{{data.invite.inviting_user.id}}",
  /**
   * Whether or not a bot invited the user.
   */
  is_bot: "{{data.invite.inviting_user.is_bot}}",
  /**
   * The name of the inviting user.
   */
  name: "{{data.invite.inviting_user.name}}",
  /**
   * The real name of the inviting user.
   */
  real_name: "{{data.invite.inviting_user.real_name}}",
  /**
   * A unique identifier for the team or workspace being invited to.
   */
  team_id: "{{data.invite.inviting_user.team_id}}",
  /**
   * The timezone of the user who sent the invite, in TZ identifier format.
   * @example "America/Toronto"
   */
  timezone: "{{data.invite.inviting_user.timezone}}",
} as const;

Object.defineProperty(InvitingUser, "toJSON", {
  value: () => "{{data.invite.inviting_user}}",
});

export const Invite = {
  /**
   * A UNIX timestamp in seconds indicating when the invite was issued.
   */
  date_created: "{{data.invite.date_created}}",
  /**
   * A UNIX timestamp in seconds indicating when the invite will expire.
   */
  date_invalid: "{{data.invite.date_invalid}}",
  /**
   * A unique identifier for the invite.
   */
  id: "{{data.invite.id}}",
  /**
   * Object containing details about the team or workspace being invited to.
   */
  inviting_team: InvitingTeam,
  /**
   * Object containing details for the user that sent the invite.
   */
  inviting_user: InvitingUser,
  /**
   * The invitee's email address.
   */
  recipient_email: "{{data.invite.recipient_email}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} that was invited.
   */
  recipient_user_id: "{{data.invite.recipient_user_id}}",
} as const;

Object.defineProperty(Invite, "toJSON", { value: () => "{{data.invite}}" });

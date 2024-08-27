import base_trigger_data from "./common-objects/all_triggers.ts";

const User = {
  /**
   * The display name of the user who joined, as they chose upon registering to the workspace.
   */
  display_name: "{{data.user.display_name}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who joined the workspace or team.
   */
  id: "{{data.user.id}}",
  /**
   * Whether the user that joined is a bot or not.
   */
  is_bot: "{{data.user.is_bot}}",
  /**
   * The name of the user who joined (usually based on the user's e-mail)
   */
  name: "{{data.user.name}}",
  /**
   * The real name of the user who joined. May not be available; in such situations will match the display_name.
   */
  real_name: "{{data.user.real_name}}",
  /**
   * A unique identifier for the Slack workspace or team that was joined.
   */
  team_id: "{{data.user.team_id}}",
  /**
   * The timezone of the user who joined, in TZ identifier format.
   * @example "America/Toronto"
   */
  timezone: "{{data.user.timezone}}",
} as const;

Object.defineProperty(User, "toJSON", { value: () => "{{data.user}}" });

export const UserJoinedTeam = {
  ...base_trigger_data,
  /**
   * The event type being invoked. At runtime will always be "slack#/events/user_joined_channel".
   */
  event_type: "{{data.event_type}}",
  /**
   * An object containing the user's details.
   */
  user: User,
} as const;

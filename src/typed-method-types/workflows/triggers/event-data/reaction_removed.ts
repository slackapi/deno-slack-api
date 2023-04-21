export const ReactionRemoved = {
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} where the emoji reaction was removed from.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/reaction_removed".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the message whose reaction is being removed from was sent.
   */
  message_ts: "{{data.message_ts}}",
  /**
   * A string representing the emoji name.
   */
  reaction: "{{data.reaction}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who removed the emoji reaction.
   */
  user_id: "{{data.user_id}}",
} as const;

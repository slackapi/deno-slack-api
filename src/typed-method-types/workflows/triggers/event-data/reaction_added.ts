export const ReactionAdded = {
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} where the emoji reaction was added to.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/reaction_added".
   */
  event_type: "{{data.event_type}}",
  /**
   * A {@link https://api.slack.com/automation/types#message-context Message Context} object representing the message being reacted to.
   */
  message_context: "{{data.message_context}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the message being reacted to was sent.
   */
  message_ts: "{{data.message_ts}}",
  /**
   * A string representing the emoji name.
   */
  reaction: "{{data.reaction}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who reacted with the emoji.
   */
  user_id: "{{data.user_id}}",
} as const;

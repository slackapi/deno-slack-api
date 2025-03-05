import base_trigger_data from "./common-objects/all_triggers.ts";

export const ReactionAdded = {
  ...base_trigger_data,
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} where the emoji reaction was added to.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * The event type being invoked. At runtime will always be "slack#/events/reaction_added".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who sent the message that was reacted to.
   */
  item_user: "{{data.item_user}}",
  /**
   * A {@link https://api.slack.com/automation/types#message-context Message Context} object representing the message being reacted to.
   */
  message_context: "{{data.message_context}}",
  /**
   * Link to the message that was reacted to.
   */
  message_link: "{{data.message_link}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the message being reacted to was sent.
   */
  message_ts: "{{data.message_ts}}",
  /**
   * Link to the parent of the message that was reacted to. Only available if reaction was added to a threaded reply.
   */
  parent_message_link: "{{data.parent_message_link}}",
  /**
   * A string representing the emoji name.
   */
  reaction: "{{data.reaction}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who reacted with the emoji.
   */
  user_id: "{{data.user_id}}",
} as const;

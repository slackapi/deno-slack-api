/**
 * Link-trigger-specific input values that contain information about the link trigger.
 */
export const ShortcutTriggerContextData = {
  /**
   * Only available when trigger is invoked from a {@link https://api.slack.com/future/triggers/link#workflow_buttons Workflow button}! A unique identifier for the action that invoked the trigger.
   */
  action_id: "{{data.action_id}}",
  /**
   * Only available when trigger is invoked from a {@link https://api.slack.com/future/triggers/link#workflow_buttons Workflow button}! A unique identifier for the block where the trigger was invoked.
   */
  block_id: "{{data.block_id}}",
  /**
   * Only available when trigger is invoked from a channel's bookmarks bar! A unique identifier for the bookmark where the trigger was invoked.
   */
  bookmark_id: "{{data.bookmark_id}}",
  /**
   * Only available when trigger is invoked from a channel, DM or MPDM! A unique identifier for the conversation where the trigger was invoked.
   */
  channel_id: "{{data.channel_id}}",
  /**
   * For consumption in functions that involve {@link https://api.slack.com/future/block-events Block Kit} or {@link https://api.slack.com/future/view-events Modal View} interactivity.
   */
  interactivity: "{{data.interactivity}}",
  /**
   * Where the trigger was invoked. At runtime, the value will be one of the following strings, depending on the invocation source: `message` when invoked from a message, `bookmark` when invoked from a bookmark, or `button` when invoked from a {@link https://api.slack.com/future/triggers/link#workflow_buttons Workflow Button}.
   */
  location: "{{data.location}}",
  /**
   * Only available when trigger is invoked from a channel, DM or MPDM! A unique UNIX timestamp in seconds indicating when the trigger-invoking message was sent.
   */
  message_ts: "{{data.message_ts}}",
  /**
   * A unique identifier for the Slack user who invoked the trigger.
   */
  user_id: "{{data.user_id}}",
} as const;

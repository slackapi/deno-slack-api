/**
 * Link-trigger-specific input values that contain information about the link trigger.
 */
export const ShortcutTriggerContextData = {
  /**
   * A unique identifier for the action that invoked the trigger. Only available when trigger is invoked from a {@link https://api.slack.com/automation/triggers/link#workflow_buttons Workflow button}!
   */
  action_id: "{{data.action_id}}",
  /**
   * A unique identifier for the block where the trigger was invoked. Only available when trigger is invoked from a {@link https://api.slack.com/automation/triggers/link#workflow_buttons Workflow button}!
   */
  block_id: "{{data.block_id}}",
  /**
   * A unique identifier for the bookmark where the trigger was invoked. Only available when trigger is invoked from a channel's bookmarks bar!
   */
  bookmark_id: "{{data.bookmark_id}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#channelid Slack channel} where the trigger was invoked. Only available when trigger is invoked from a channel, DM or MPDM!
   */
  channel_id: "{{data.channel_id}}",
  /**
   * For consumption in functions that involve {@link https://api.slack.com/automation/block-events Block Kit} or {@link https://api.slack.com/automation/view-events Modal View} interactivity.
   */
  interactivity: "{{data.interactivity}}",
  /**
   * Where the trigger was invoked. At runtime, the value will be one of the following strings, depending on the invocation source: `message` when invoked from a message, `bookmark` when invoked from a bookmark, or `button` when invoked from a {@link https://api.slack.com/automation/triggers/link#workflow_buttons Workflow Button}.
   */
  location: "{{data.location}}",
  /**
   * A unique {@link https://api.slack.com/automation/types#message-ts Slack message timestamp string} indicating when the trigger-invoking message was sent. Only available when trigger is invoked from a channel, DM or MPDM!
   */
  message_ts: "{{data.message_ts}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who invoked the trigger.
   */
  user_id: "{{data.user_id}}",
} as const;

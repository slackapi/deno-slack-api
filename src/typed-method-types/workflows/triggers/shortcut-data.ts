/**
 * Some notes on testing shortcut triggers in various contexts:
 * - when a shortcut trigger is tripped from a bookmark, available fields are: "channel_id":"C1234","location":"bookmark","bookmark_id":"Bk1234"
 * - when tripped from a message trigger URL unfurl, available fields are: "channel_id":"C014MMA0WCA","message_ts":"1681326425.481799","location":"message"
 *   - if it is tripped from a message within a DM, the channel_id will be "U12345ABC" instead of "C12345ABC"
 * - when tripped from a workflow button, available fields are: "channel_id":"C014MMA0WCA","message_ts":"1681333583.837279","location":"button","action_id":"yVN","block_id":"U07ci"
 */

/**
 * Link-trigger-specific input values that contain information about the link trigger.
 */
export const ShortcutTriggerData = {
  /**
   * Only available when trigger is invoked from a {@link https://api.slack.com/future/triggers/link#workflow_buttons Workflow button}! A unique identifier for the action that invoked the trigger.
   */
  ActionID: "{{data.action_id}}",
  /**
   * Only available when trigger is invoked from a {@link https://api.slack.com/future/triggers/link#workflow_buttons Workflow button}! A unique identifier for the block where the trigger was invoked.
   */
  BlockID: "{{data.block_id}}",
  /**
   * Only available when trigger is invoked from a channel's bookmarks bar! A unique identifier for the bookmark where the trigger was invoked.
   */
  BookmarkID: "{{data.bookmark_id}}",
  /**
   * Only available when trigger is invoked from a channel, DM or MPDM! A unique identifier for the conversation where the trigger was invoked.
   */
  ChannelID: "{{data.channel_id}}",
  /**
   * For consumption in functions that involve {@link https://api.slack.com/future/block-events Block Kit} or {@link https://api.slack.com/future/view-events Modal View} interactivity.
   */
  Interactivity: "{{data.interactivity}}",
  /**
   * Where the trigger was invoked. At runtime, the value will be one of the following strings, depending on the invocation source: `message` when invoked from a message, `bookmark` when invoked from a bookmark, or `button` when invoked from a {@link https://api.slack.com/future/triggers/link#workflow_buttons Workflow Button}.
   */
  Location: "{{data.location}}",
  /**
   * Only available when trigger is invoked from a channel, DM or MPDM! A unique UNIX timestamp in seconds indicating when the trigger-invoking message was sent.
   */
  MessageTS: "{{data.message_ts}}",
  /**
   * A unique identifier for the Slack user who invoked the trigger.
   */
  UserID: "{{data.user_id}}",
} as const;

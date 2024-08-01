import base_trigger_data from "./common-objects/all_triggers.ts";

export const EmojiChanged = {
  ...base_trigger_data,
  /**
   * The event type being invoked. At runtime will always be "slack#/events/emoji_changed".
   */
  event_type: "{{data.event_type}}",
  /**
   * The name of the newly-added emoji. Only applies when an emoji was added to the workspace!
   */
  name: "{{data.name}}",
  /**
   * The names of the removed emojis. At runtime this value will always be an array. Only applies when one or more emojis were removed from the workspace!
   */
  names: "{{data.names}}",
  /**
   * The new name of the renamed emoji. Only applies when an emoji was renamed in the workspace!
   */
  new_name: "{{data.new_name}}",
  /**
   * The old name of the renamed emoji. Only applies when an emoji was renamed in the workspace!
   */
  old_name: "{{data.old_name}}",
  /**
   * The emoji change type. At runtime this value will be one of 'add', 'remove', or 'rename'.
   */
  subtype: "{{data.subtype}}",
  /**
   * The URL of the emoji picture. Only applies when an emoji was added to or renamed in the workspace!
   */
  value: "{{data.value}}",
} as const;

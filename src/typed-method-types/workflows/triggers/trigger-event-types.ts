/**
 * @enum {string} Enumerates valid event trigger types.
 */
export const TriggerEventTypes = {
  /**
   * A message event that mentions your app.
   */
  app_mentioned: "slack#/events/app_mentioned",
  /**
   * A channel was archived.
   */
  channel_archived: "slack#/events/channel_archived",
  /**
   * A channel was created.
   */
  channel_created: "slack#/events/channel_created",
  /**
   * A channel was deleted.
   */
  channel_deleted: "slack#/events/channel_deleted",
  /**
   * A channel was renamed.
   */
  channel_renamed: "slack#/events/channel_renamed",
  /**
   * A channel was shared with an external workspace.
   */
  channel_shared: "slack#/events/channel_shared",
  /**
   * A channel was unarchived.
   */
  channel_unarchived: "slack#/events/channel_unarchived",
  /**
   * A channel was unshared with an external workspace.
   */
  channel_unshared: "slack#/events/channel_unshared",
  /**
   * Do not Disturb settings changed for a member.
   */
  dnd_updated: "slack#/events/dnd_updated",
  /**
   * A custom emoji has been added or changed.
   */
  emoji_changed: "slack#/events/emoji_changed",
  // MessageMetadataAdded: "slack#/events/message_metadata_added",
  // MessageMetadataDeleted: "slack#/events/message_metadata_deleted",
  /**
   * Message metadata was posted.
   */
  message_metadata_posted: "slack#/events/message_metadata_posted",
  /**
   * A message was sent to a conversation.
   */
  message_posted: "slack#/events/message_posted",
  /**
   * A pin was added to a channel.
   */
  pin_added: "slack#/events/pin_added",
  /**
   * A pin was removed from a channel.
   */
  pin_removed: "slack#/events/pin_removed",
  /**
   * A member has added an emoji reaction to an item.
   */
  reaction_added: "slack#/events/reaction_added",
  /**
   * A member has removed an emoji reaction from an item.
   */
  reaction_removed: "slack#/events/reaction_removed",
  /**
   * A shared channel invite was accepted.
   */
  shared_channel_invite_accepted:
    "slack#/events/shared_channel_invite_accepted",
  /**
   * A shared channel invite was approved.
   */
  shared_channel_invite_approved:
    "slack#/events/shared_channel_invite_approved",
  /**
   * A shared channel invite was declined.
   */
  shared_channel_invite_declined:
    "slack#/events/shared_channel_invite_declined",
  /**
   * A shared channel invite was sent to a Slack user.
   */
  shared_channel_invite_received:
    "slack#/events/shared_channel_invite_received",
  /**
   * A user joined a public channel, private channel, or MPDM.
   */
  user_joined_channel: "slack#/events/user_joined_channel",
  /**
   * A user joined a team or workspace.
   */
  user_joined_team: "slack#/events/user_joined_team",
  /**
   * A user left a public or private channel.
   */
  user_left_channel: "slack#/events/user_left_channel",
} as const;

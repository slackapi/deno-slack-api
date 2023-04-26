/**
 * @enum {string} Enumerates valid event trigger types.
 */
export const TriggerEventTypes = {
  /**
   * A message event that mentions your app.
   */
  AppMentioned: "slack#/events/app_mentioned",
  /**
   * A channel was archived.
   */
  ChannelArchived: "slack#/events/channel_archived",
  /**
   * A channel was created.
   */
  ChannelCreated: "slack#/events/channel_created",
  /**
   * A channel was deleted.
   */
  ChannelDeleted: "slack#/events/channel_deleted",
  /**
   * A channel was renamed.
   */
  ChannelRenamed: "slack#/events/channel_renamed",
  /**
   * A channel was shared with an external workspace.
   */
  ChannelShared: "slack#/events/channel_shared",
  /**
   * A channel was unarchived.
   */
  ChannelUnarchived: "slack#/events/channel_unarchived",
  /**
   * A channel was unshared with an external workspace.
   */
  ChannelUnshared: "slack#/events/channel_unshared",
  /**
   * Do not Disturb settings changed for a member.
   */
  DndUpdated: "slack#/events/dnd_updated",
  /**
   * A custom emoji has been added or changed.
   */
  EmojiChanged: "slack#/events/emoji_changed",
  // MessageMetadataAdded: "slack#/events/message_metadata_added",
  // MessageMetadataDeleted: "slack#/events/message_metadata_deleted",
  /**
   * Message metadata was posted.
   */
  MessageMetadataPosted: "slack#/events/message_metadata_posted",
  /**
   * A message was sent to a conversation.
   */
  MessagePosted: "slack#/events/message_posted",
  /**
   * A pin was added to a channel.
   */
  PinAdded: "slack#/events/pin_added",
  /**
   * A pin was removed from a channel.
   */
  PinRemoved: "slack#/events/pin_removed",
  /**
   * A member has added an emoji reaction to an item.
   */
  ReactionAdded: "slack#/events/reaction_added",
  /**
   * A member has removed an emoji reaction from an item.
   */
  ReactionRemoved: "slack#/events/reaction_removed",
  /**
   * A shared channel invite was accepted.
   */
  SharedChannelInviteAccepted: "slack#/events/shared_channel_invite_accepted",
  /**
   * A shared channel invite was approved.
   */
  SharedChannelInviteApproved: "slack#/events/shared_channel_invite_approved",
  /**
   * A shared channel invite was declined.
   */
  SharedChannelInviteDeclined: "slack#/events/shared_channel_invite_declined",
  /**
   * A shared channel invite was sent to a Slack user.
   */
  SharedChannelInviteReceived: "slack#/events/shared_channel_invite_received",
  /**
   * A user joined a public channel, private channel, or MPDM.
   */
  UserJoinedChannel: "slack#/events/user_joined_channel",
  /**
   * A user joined a team or workspace.
   */
  UserJoinedTeam: "slack#/events/user_joined_team",
  /**
   * A user left a public or private channel.
   */
  UserLeftChannel: "slack#/events/user_left_channel",
} as const;

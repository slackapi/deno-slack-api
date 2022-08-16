export const TriggerEventTypes = {
  AppMention: "slack#/events/app_mention",
  ChannelArchive: "slack#/events/channel_archive",
  ChannelCreated: "slack#/events/channel_created",
  ChannelDeleted: "slack#/events/channel_deleted",
  ChannelRename: "slack#/events/channel_rename",
  ChannelShared: "slack#/events/channel_shared",
  ChannelUnarchive: "slack#/events/channel_unarchive",
  ChannelUnshared: "slack#/events/channel_unshared",
  DndUpdated: "slack#/events/dnd_updated",
  EmojiChanged: "slack#/events/emoji_changed",
  // MessageMetadataAdded: "slack#/events/message_metadata_added",
  // MessageMetadataDeleted: "slack#/events/message_metadata_deleted",
  MessageMetadataPosted: "slack#/events/message_metadata_posted",
  MessagePosted: "slack#/events/message_posted",
  MemberLeftChannel: "slack#/events/member_left_channel",
  PinAdded: "slack#/events/pin_added",
  PinRemoved: "slack#/events/pin_removed",
  ReactionAdded: "slack#/events/reaction_added",
  ReactionRemoved: "slack#/events/reaction_removed",
  SharedChannelInviteAccepted: "slack#/events/shared_channel_invite_accepted",
  SharedChannelInviteApproved: "slack#/events/shared_channel_invite_approved",
  SharedChannelInviteDeclined: "slack#/events/shared_channel_invite_declined",
  SharedChannelInviteReceived: "slack#/events/shared_channel_invite_received",
  UserJoinedChannel: "slack#/events/user_joined_channel",
  UserJoinedTeam: "slack#/events/user_joined_team",
} as const;

import { AppMentioned } from "./app_mentioned.ts";
import { ChannelArchived } from "./channel_archived.ts";
import { ChannelCreated } from "./channel_created.ts";
import { ChannelDeleted } from "./channel_deleted.ts";
import { ChannelRenamed } from "./channel_renamed.ts";
import { ChannelShared } from "./channel_shared.ts";
import { ChannelUnarchived } from "./channel_unarchived.ts";
import { ChannelUnshared } from "./channel_unshared.ts";
import { DNDUpdated } from "./dnd_updated.ts";
import { EmojiChanged } from "./emoji_changed.ts";
import { MessageMetadataPosted } from "./message_metadata_posted.ts";
import { MessagePosted } from "./message_posted.ts";
import { PinAdded } from "./pin_added.ts";
import { PinRemoved } from "./pin_removed.ts";
import { ReactionAdded } from "./reaction_added.ts";
import { ReactionRemoved } from "./reaction_removed.ts";
import { SharedChannelInviteAccepted } from "./shared_channel_invite_accepted.ts";
import { SharedChannelInviteApproved } from "./shared_channel_invite_approved.ts";
import { SharedChannelInviteDeclined } from "./shared_channel_invite_declined.ts";
import { SharedChannelInviteReceived } from "./shared_channel_invite_received.ts";
import { UserJoinedChannel } from "./user_joined_channel.ts";
import { UserJoinedTeam } from "./user_joined_team.ts";
import { UserLeftChannel } from "./user_left_channel.ts";

/**
 * Event-trigger-specific input values that contain information about the event trigger.
 * Different events will contain different data.
 */
export const EventTriggerContextData = {
  /**
   * A message event that mentions the app.
   */
  AppMentioned,
  /**
   * A channel was archived in the workspace.
   */
  ChannelArchived,
  /**
   * A channel was created in the workspace.
   */
  ChannelCreated,
  /**
   * A channel was deleted in the workspace.
   */
  ChannelDeleted,
  /**
   * A channel was renamed in the workspace.
   */
  ChannelRenamed,
  /**
   * A channel was shared with another workspace or team.
   */
  ChannelShared,
  /**
   * A channel was unarchived in the workspace.
   */
  ChannelUnarchived,
  /**
   * A channel was unshared with another workspace or team.
   */
  ChannelUnshared,
  /**
   * Do Not Disturb settings updated for a member.
   */
  DNDUpdated,
  /**
   * An emoji was added, removed or renamed in the workspace.
   */
  EmojiChanged,
  /**
   * A message event that contains {@link https://api.slack.com/metadata Message Metadata}.
   */
  MessageMetadataPosted,
  /**
   * A message was sent to a channel. NOTE: a {@link https://api.slack.com/automation/triggers/event#filters trigger filter} is required to listen for this event.
   */
  MessagePosted,
  /**
   * A message was pinned to a channel.
   */
  PinAdded,
  /**
   * A message was unpinned from a channel.
   */
  PinRemoved,
  /**
   * An emoji reaction was added to a message.
   */
  ReactionAdded,
  /**
   * An emoji reaction was removed from a message.
   */
  ReactionRemoved,
  /**
   * A user accepted a {@link https://slack.com/connect Slack Connect} invite to a shared channel.
   */
  SharedChannelInviteAccepted,
  /**
   * An admin approved a {@link https://slack.com/connect Slack Connect} invite to a shared channel.
   */
  SharedChannelInviteApproved,
  /**
   * An admin declined a {@link https://slack.com/connect Slack Connect} invite to a shared channel.
   */
  SharedChannelInviteDeclined,
  /**
   * A user received a {@link https://slack.com/connect Slack Connect} invite to a shared channel.
   * NOTE: this event will only trip when the {@link https://api.slack.com/methods/conversations.inviteShared inviteShared API} is used programmatically!
   */
  SharedChannelInviteReceived,
  /**
   * A user joined a workspace channel.
   */
  UserJoinedChannel,
  /**
   * A user joined a workspace or team.
   */
  UserJoinedTeam,
  /**
   * A user left a workspace channel.
   */
  UserLeftChannel,
} as const;

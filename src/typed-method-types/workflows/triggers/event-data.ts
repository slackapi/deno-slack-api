/**
 * Event-trigger-specific input values that contain information about the event trigger.
 * Different events will contain different data.
 */
export const EventTriggerData = {
  /**
   * A message event that mentions the app.
   */
  app_mentioned: {
    /**
     * A unique identifier for the app being mentioned.
     */
    app_id: "{{data.app_id}}",
    /**
     * A unique identifier for the channel where the app was mentioned.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name where the app was mentioned.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type where the app was mentioned. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * The event type being invoked. At runtime will always be "slack#/events/app_mentioned".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique UNIX timestamp in seconds indicating when the message mentioning the app was sent.
     */
    message_ts: "{{data.message_ts}}",
    /**
     * The text in the message containing the app mention.
     */
    text: "{{data.text}}",
    /**
     * A unique identifier for the Slack user who mentioned the app.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A channel was archived in the workspace.
   */
  channel_archived: {
    /**
     * A unique identifier for the channel that was archived.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel that was archived.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel that was archived. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * The event type being invoked. At runtime will always be "slack#/events/channel_archived".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique identifier for the Slack user who archived the channel.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A channel was created in the workspace.
   */
  channel_created: {
    /**
     * A unique identifier for the channel that was created.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel that was created.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel that was created. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * A unique UNIX timestamp in seconds indicating when the channel was created.
     */
    created: "{{data.created}}",
    /**
     * A unique identifier for the Slack user who created the channel.
     */
    creator_id: "{{data.creator_id}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/channel_created".
     */
    event_type: "{{data.event_type}}",
  },
  /**
   * A channel was deleted in the workspace.
   */
  channel_deleted: {
    /**
     * A unique identifier for the channel that was deleted.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel that was deleted.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel that was deleted. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * The event type being invoked. At runtime will always be "slack#/events/channel_deleted".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique identifier for the Slack user who deleted the channel.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A channel was renamed in the workspace.
   */
  channel_renamed: {
    /**
     * A unique identifier for the channel that was renamed.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The new channel name for the channel that was renamed.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel that was renamed. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * The event type being invoked. At runtime will always be "slack#/events/channel_renamed".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique identifier for the Slack user who renamed the channel.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A channel was shared with another workspace or team.
   */
  channel_shared: {
    /**
     * A unique identifier for the channel that was shared.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel that was shared.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel that was shared. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * A unique identifier for the team or workspace that the channel was shared with.
     */
    connected_team_id: "{{data.connected_team_id}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/channel_shared".
     */
    event_type: "{{data.event_type}}",
  },
  /**
   * A channel was unarchived in the workspace.
   */
  channel_unarchived: {
    /**
     * A unique identifier for the channel that was unarchived.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel that was unarchived.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel that was unarchived. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * The event type being invoked. At runtime will always be "slack#/events/channel_unarchived".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique identifier for the Slack user who unarchived the channel.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A channel was unshared with another workspace or team.
   */
  channel_unshared: {
    /**
     * A unique identifier for the channel that was unshared.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel that was unshared.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel that was unshared. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * A unique identifier for the team or workspace that the channel was unshared with.
     */
    disconnected_team_id: "{{data.disconnected_team_id}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/channel_unshared".
     */
    event_type: "{{data.event_type}}",
    /**
     * Whether the channel was externally shared or not.
     */
    is_ext_shared: "{{data.is_ext_shared}}",
  },
  /**
   * Do Not Disturb settings updated for a member.
   */
  dnd_updated: {
    /**
     * Do Not Disturb object containing all DND-related data.
     */
    dnd_status: {
      /**
       * @ignore
       */
      toJSON: () => "{{data.dnd_status}}",
      /**
       * Whether Do Not Disturb is enabled or not.
       */
      dnd_enabled: "{{data.dnd_status.dnd_enabled}}",
    },
    /**
     * A unique identifier for the Slack user whose DND status was updated.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * An emoji was added, removed or renamed in the workspace.
   */
  emoji_changed: {
    /**
     * The event type being invoked. At runtime will always be "slack#/events/emoji_changed".
     */
    event_type: "{{data.event_type}}",
    /**
     * Only applies when an emoji was added to the workspace! The name of the newly-added emoji.
     */
    name: "{{data.name}}",
    /**
     * Only applies when one or more emojis were removed from the workspace! The names of the removed emojis. At runtime this value will always be an array.
     */
    names: "{{data.names}}",
    /**
     * Only applies when an emoji was renamed in the workspace! The new name of the renamed emoji.
     */
    new_name: "{{data.new_name}}",
    /**
     * Only applies when an emoji was renamed in the workspace! The old name of the renamed emoji.
     */
    old_name: "{{data.old_name}}",
    /**
     * The emoji change type. At runtime this value will be one of 'add', 'remove', or 'rename'.
     */
    subtype: "{{data.subtype}}",
    /**
     * Only applies when an emoji was added to or renamed in the workspace! The URL of the emoji picture.
     */
    value: "{{data.value}}",
  },
  /**
   * A message event that contains {@link https://api.slack.com/metadata Message Metadata}.
   */
  message_metadata_posted: {
    /**
     * A unique identifier for the app that posted metadata.
     */
    app_id: "{{data.app_id}}",
    /**
     * A unique identifier for the channel where the metadata was posted.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/message_metadata_posted".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique UNIX timestamp in seconds indicating when the message containing metadata was sent.
     */
    message_ts: "{{data.message_ts}}",
    /**
     * Metadata attached to the message. See {@link https://api.slack.com/metadata Message Metadata documentation} for more details.
     */
    metadata: "{{data.metadata}}",
    /**
     * A unique identifier for the Slack user who posted the metadata-containing message.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A message was sent to a channel. NOTE: a {@link https://api.slack.com/future/triggers/event#filters trigger filter} is required to listen for this event.
   */
  message_posted: {
    // TODO: not sure about this one. backend code this should exist, but I wasn't able to get it to show up.
    // Maybe this gets set if an APP posts a message? Needs further testing.
    /**
     * A unique identifier for the app? huh
     */
    //app_id: "{{data.app_id}}",
    /**
     * A unique identifier for the channel where message was posted.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel type where the message was posted. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * The event type being invoked. At runtime will always be "slack#/events/message_posted".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique UNIX timestamp in seconds indicating when the message was sent. In the case this is a threaded message, this property becomes the `message_ts` of the parent message.
     */
    message_ts: "{{data.message_ts}}",
    /**
     * The text in the message.
     */
    text: "{{data.text}}",
    /**
     * A unique UNIX timestamp in seconds indicating when the threaded message was sent. At runtime this value may not exist if the message in question is not a threaded message!
     */
    thread_ts: "{{data.thread_ts}}",
    /**
     * A unique identifier for the Slack user who posted the message.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A message was pinned to a channel.
   */
  pin_added: {
    /**
     * A unique identifier for the channel where the message was pinned.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel where the message was pinned.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel where the message was pinned. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * The event type being invoked. At runtime will always be "slack#/events/pin_added".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique UNIX timestamp in seconds indicating when the message being pinned was sent.
     */
    message_ts: "{{data.message_ts}}",
    /**
     * A unique identifier for the Slack user who pinned the message.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A message was unpinned from a channel.
   */
  pin_removed: {
    /**
     * A unique identifier for the channel where the message was unpinned.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel where the message was unpinned.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel where the message was unpinned. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}", // TODO: validate the various values for this property
    /**
     * The event type being invoked. At runtime will always be "slack#/events/pin_removed".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique UNIX timestamp in seconds indicating when the message being unpinned was sent.
     */
    message_ts: "{{data.message_ts}}",
    /**
     * A unique identifier for the Slack user who unpinned the message.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * An emoji reaction was added to a message.
   */
  reaction_added: {
    /**
     * A unique identifier for the channel where the emoji reaction was added to.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/reaction_added".
     */
    event_type: "{{data.event_type}}",
    /**
     * A {@link https://api.slack.com/future/types#message-context Message Context} object representing the message being reacted to.
     */
    message_context: "{{data.message_context}}",
    /**
     * A unique UNIX timestamp in seconds indicating when the message being reacted to was sent.
     */
    message_ts: "{{data.message_ts}}",
    /**
     * A string representing the emoji name.
     */
    reaction: "{{data.reaction}}",
    /**
     * A unique identifier for the Slack user who reacted with the emoji.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * An emoji reaction was removed from a message.
   */
  reaction_removed: {
    /**
     * A unique identifier for the channel where the emoji reaction was removed from.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/reaction_removed".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique UNIX timestamp in seconds indicating when the message whose reaction is being removed from was sent.
     */
    message_ts: "{{data.message_ts}}",
    /**
     * A string representing the emoji name.
     */
    reaction: "{{data.reaction}}",
    /**
     * A unique identifier for the Slack user who removed the emoji reaction.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A user accepted a {@link https://slack.com/connect Slack Connect} invite to a shared channel.
   */
  shared_channel_invite_accepted: {
    /**
     * Object containing details for the invitee.
     */
    accepting_user: {
      /**
       * The display name of the invited user.
       */
      display_name: "{{data.accepting_user.display_name}}",
      /**
       * A unique identifier for the user being invited.
       */
      id: "{{data.accepting_user.id}}",
      /**
       * Whether or not the user being invited is a bot.
       */
      is_bot: "{{data.accepting_user.is_bot}}",
      /**
       * The name of the invited user.
       */
      name: "{{data.accepting_user.name}}",
      /**
       * The real name of the invited user.
       */
      real_name: "{{data.accepting_user.real_name}}",
      /**
       * A unique identifier for the team or workspace the invited user originally belongs to.
       */
      team_id: "{{data.accepting_user.team_id}}",
      /**
       * The timezone of the user who being invited, in TZ identifier format.
       * @example "America/Toronto"
       */
      timezone: "{{data.accepting_user.timezone}}",
      /**
       * @ignore
       */
      toJSON: "{{data.accepting_user}}",
    },
    /**
     * Whether the invite required administrator approval or not.
     */
    approval_required: "{{data.approval_required}}",
    /**
     * A unique identifier for the channel being shared.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel name for the channel being shared.
     */
    channel_name: "{{data.channel_name}}",
    /**
     * The channel type for the channel being shared. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/shared_channel_invite_accepted".
     */
    event_type: "{{data.event_type}}",
    /**
     * Details for the invite itself.
     */
    invite: {
      /**
       * A UNIX timestamp in seconds indicating when the invite was issued.
       */
      date_created: "{{data.invite.date_created}}",
      /**
       * A UNIX timestamp in seconds indicating when the invite will expire.
       */
      date_invalid: "{{data.invite.date_invalid}}",
      /**
       * A unique identifier for the invite.
       */
      id: "{{data.invite.id}}",
      /**
       * Object containing details about the team or workspace being invited to.
       */
      inviting_team: {
        /**
         * A UNIX timestamp in seconds indicating when the inviting team or workspace was created.
         */
        date_created: "{{data.invite.inviting_team.date_created}}",
        /**
         * The domain of the inviting team or workspace.
         */
        domain: "{{data.invite.inviting_team.domain}}",
        /**
         * An object containing CDN-backed slack.com URLs for the inviting team's icon.
         */
        icon: {
          /**
           * CDN-backed slack.com URL for the inviting team's icon at a 34 pixel size.
           */
          image_34: "{{data.invite.inviting_team.icon.image_34}}",
          /**
           * CDN-backed slack.com URL for the inviting team's icon at a 44 pixel size.
           */
          image_44: "{{data.invite.inviting_team.icon.image_44}}",
          /**
           * CDN-backed slack.com URL for the inviting team's icon at a 68 pixel size.
           */
          image_68: "{{data.invite.inviting_team.icon.image_68}}",
          /**
           * CDN-backed slack.com URL for the inviting team's icon at a 88 pixel size.
           */
          image_88: "{{data.invite.inviting_team.icon.image_88}}",
          /**
           * CDN-backed slack.com URL for the inviting team's icon at a 102 pixel size.
           */
          image_102: "{{data.invite.inviting_team.icon.image_102}}",
          /**
           * CDN-backed slack.com URL for the inviting team's icon at a 132 pixel size.
           */
          image_132: "{{data.invite.inviting_team.icon.image_132}}",
          /**
           * CDN-backed slack.com URL for the inviting team's icon at a 230 pixel size.
           */
          image_230: "{{data.invite.inviting_team.icon.image_230}}",
          /**
           * @ignore
           */
          toJSON: () => "{{data.invite.inviting_team.icon}}",
        },
        /**
         * A unique identifier for the team or workspace being invited to.
         */
        id: "{{data.invite.inviting_team.id}}",
        /**
         * Whether or not the inviting team or workspace is verified or not.
         */
        is_verified: "{{data.invite.inviting_team.is_verified}}",
        /**
         * The name of the inviting team of workspace.
         */
        name: "{{data.invite.inviting_team.name}}",
        toJSON: () => "{{data.invite.inviting_team}}",
      },
      /**
       * Object containing details for the user that sent the invite.
       */
      inviting_user: {
        /**
         * The display name of the inviting user.
         */
        display_name: "{{data.invite.inviting_user.display_name}}",
        /**
         * A unique identifier for the user that sent the invite.
         */
        id: "{{data.invite.inviting_user.id}}",
        /**
         * Whether or not a bot invited the user.
         */
        is_bot: "{{data.invite.inviting_user.is_bot}}",
        /**
         * The name of the inviting user.
         */
        name: "{{data.invite.inviting_user.name}}",
        /**
         * The real name of the inviting user.
         */
        real_name: "{{data.invite.inviting_user.real_name}}",
        /**
         * A unique identifier for the team or workspace being invited to.
         */
        team_id: "{{data.invite.inviting_user.team_id}}",
        /**
         * The timezone of the user who sent the invite, in TZ identifier format.
         * @example "America/Toronto"
         */
        timezone: "{{data.invite.inviting_user.timezone}}",
        /**
         * @ignore
         */
        toJSON: "{{data.invite.inviting_user}}",
      },
      /**
       * The invitee's email address.
       */
      recipient_email: "{{data.invite.recipient_email}}",
      /**
       * A unique identifier for the user that was invited.
       */
      recipient_user_id: "{{data.invite.recipient_email}}",
      /**
       * @ignore
       */
      toJSON: () => "{{data.invite}}",
    },
    /**
     * An array of objects containing details for all of the teams or workspaces present in the channel being shared.
     */
    teams_in_channel: "{{data.teams_in_channel}}",
  },
  /**
   * A user joined a workspace channel.
   */
  user_joined_channel: {
    /**
     * A unique identifier for the channel that was joined.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel type for the channel that was joined. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/user_joined_channel".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique identifier for the Slack user who invited the member to the channel.
     */
    inviter_id: "{{data.inviter_id}}",
    /**
     * A unique identifier for the Slack user who joined the channel.
     */
    user_id: "{{data.user_id}}",
  },
  /**
   * A user joined a workspace or team.
   */
  user_joined_team: {
    /**
     * The event type being invoked. At runtime will always be "slack#/events/user_joined_channel".
     */
    event_type: "{{data.event_type}}",
    /**
     * An object containing the user's details.
     */
    user: {
      /**
       * @ignore
       */
      toJSON: () => "{{data.user}}",
      /**
       * A unique identifier for the Slack user who joined the workspace or team.
       */
      id: "{{data.user.id}}",
      /**
       * A unique identifier for the Slack workspace or team that was joined.
       */
      team_id: "{{data.user.team_id}}",
      /**
       * The name of the user who joined (usually based on the user's e-mail)
       */
      name: "{{data.user.name}}",
      /**
       * The display name of the user who joined, as they chose upon registering to the workspace.
       */
      display_name: "{{data.user.display_name}}",
      /**
       * The real name of the user who joined. May not be available; in such situations will match the display_name.
       */
      real_name: "{{data.user.real_name}}",
      /**
       * The timezone of the user who joined, in TZ identifier format.
       * @example "America/Toronto"
       */
      timezone: "{{data.user.timezone}}",
      /**
       * Whether the user that joined is a bot or not.
       */
      is_bot: "{{data.user.is_bot}}",
    },
  },
  /**
   * A user left a workspace channel.
   */
  user_left_channel: {
    /**
     * A unique identifier for the channel that was left.
     */
    channel_id: "{{data.channel_id}}",
    /**
     * The channel type for the channel that was left. Can be one of "public", "private", "mpdm" or "im".
     */
    channel_type: "{{data.channel_type}}",
    /**
     * The event type being invoked. At runtime will always be "slack#/events/user_left_channel".
     */
    event_type: "{{data.event_type}}",
    /**
     * A unique identifier for the Slack user who left the channel.
     */
    user_id: "{{data.user_id}}",
  },
} as const;

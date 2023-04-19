## Event triggers

An event trigger is a trigger that activates when a specific event occurs within the Slack client. Event triggers can activate on either workspace,
or channel level events, and each specific event type has its own required object parameters that need to be filled. An event trigger at the highest
level includes the common trigger parameters along with a required input parameter and an event parameter:
An event trigger is a trigger that activates when a specific event occurs within the Slack client. Event triggers can activate on either workspace,
or channel level events, and each specific event type has its own required object parameters that need to be filled. An event trigger at the highest
level includes the common trigger parameters along with a required input parameter and an event parameter:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `event`           | Yes            | An event object with information about the activation event          |

### Event types

An `event_type` is a string which corresponds to an event in the Slack client. These `event_type`s can be set on a trigger to activate a workflow.
Currently, events are separated into two categories, Workspace level events, and Channel level events. Workspace level events are events that affect the entire workspace, regardless of channel or specific chat id. Channel level events listen in on specific channels and only activate when the event happens inside of that channel. Each of these require a separate payload which can be found defined in the section [below](#the-event-object).
The following is a list of event types along with their category:

| Event Name                       | Event String                | Category      | Notes       | Link    |  Payload     |
| ---------------------------------|:----------------------------|:-------------:| ------------| --------| -------------|
| App Mentioned                    |`slack#/events/app_mentioned`| Channel       |             |[API Doc](https://api.slack.com/events/app_mention)|[Payload](#app_mentioned)|
| Channel Archived                 |`slack#/events/channel_archived`| Workspace     |             |[API Doc](https://api.slack.com/events/channel_archive)|[Payload](#channel_archived)|
| Channel Created                  |`slack#/events/channel_created`| Workspace     |             |[API Doc](https://api.slack.com/events/channel_created)|[Payload](#channel_created)|
| Channel Deleted                  |`slack#/events/channel_deleted`| Workspace     |             |[API Doc](https://api.slack.com/events/channel_deleted)|[Payload](#channel_deleted)|
| Channel Renamed                  |`slack#/events/channel_renamed`| Workspace     |             |[API Doc](https://api.slack.com/events/channel_rename)|[Payload](#channel_renamed)|
| Channel Shared                   |`slack#/events/channel_shared`| Channel       |             |[API Doc](https://api.slack.com/events/channel_shared)|[Payload](#channel_shared)|
| Channel Unarchived               |`slack#/events/channel_unarchived`| Workspace     |             |[API Doc](https://api.slack.com/events/channel_unarchive)|[Payload](#channel_unarchived)|
| Channel Unshared                 |`slack#/events/channel_unshared`| Channel       |             |[API Doc](https://api.slack.com/events/channel_unshared)|[Payload](#channel_unshared)|
| DND Updated                      |`slack#/events/dnd_updated`| Workspace     |             |[API Doc](https://api.slack.com/events/dnd_updated)|[Payload](#dnd_status_updated)|
| Emoji Changed                    |`slack#/events/emoji_changed`| Workspace     |             |[API Doc](https://api.slack.com/events/emoji_changed)|[Payload](#emoji_changed)|
| Message Metadata Posted          |`slack#/events/message_metadata_posted`| Channel       | Requires the "metadata_event_type" parameter |[API Doc](https://api.slack.com/events/message_metadata_posted)|[Payload](#message-metadata-trigger)|
| Message Posted                   |`slack#/events/message_posted`| Channel       | Requires a "filter" parameter in event object|[API Doc](https://api.slack.com/events/message)|[Payload](#messageposted-trigger)|
| Pin Added                        |`slack#/events/pin_added`| Channel       |             |[API Doc](https://api.slack.com/events/pin_added)|[Payload](#pin_added)|
| Pin Removed                      |`slack#/events/pin_removed`| Channel       |             |[API Doc](https://api.slack.com/events/pin_removed)|[Payload](#pin_removed)|
| Reaction Added                   |`slack#/events/reaction_added`| Channel       |             |[API Doc](https://api.slack.com/events/reaction_added)|[Payload](#reaction_added)|
| Reaction Removed                 |`slack#/events/reaction_removed`| channel       |             |[API Doc](https://api.slack.com/events/reaction_removed)|[Payload](#reaction_removed)|
| Shared Channel Invite Accepted   |`slack#/events/shared_channel_invite_accepted`| Channel       |  |[API Doc](https://api.slack.com/events/shared_channel_invite_accepted)|[Payload](#shared_channel_invite_accepted)|
| Shared Channel Invite Approved   |`slack#/events/shared_channel_invite_approved`| Channel       ||[API Doc](https://api.slack.com/events/shared_channel_invite_approved)|[Payload](#shared_channel_invite_approved)|
| Shared Channel Invite Declined   |`slack#/events/shared_channel_invite_declined`| Channel       | |[API Doc](https://api.slack.com/events/shared_channel_invite_declined)|[Payload](#shared_channel_invite_declined)|
| Shared Channel Invite Received   |`slack#/events/shared_channel_invite_received`| Channel       | |[API Doc](https://api.slack.com/events/shared_channel_invite_received)|[Payload](#shared_channel_invite_received)|
| Member Joined Channel              |`slack#/events/user_joined_channel`| Channel       |             |[API Doc](https://api.slack.com/events/member_joined_channel)|[Payload](#user_joined_channel)|
| Member Joined Team                 |`slack#/events/user_joined_team`| Workspace     |             ||[Payload](#user_joined_team)|
| Member Left Channel                |`slack#/events/user_left_channel`| Channel       |             |[API Doc](https://api.slack.com/events/member_left_channel)|[Payload](#user_left_channel)|

### Event Configuration

Event trigger must contain an event configuration object, which specifies the details of the event that will activate the trigger. The event configuration object has the following attributes:

| Parameter name    | Required?     | Description                                                             |
| ------------------|:-------------:| ------------------------------------------------------------------------|
| `event_type`        | Yes           | The name of the event, matches an `event_string` from the [table above](#event-types) |
| [`filter`](trigger-filters.md) | Sometimes     | A [Filter object](./trigger-filters.md) (Required for the message_posted event)    |
| `team_ids`         | No            | An array of `team_id` strings that specifies which teams to listen for events (Optional for workspace events)        |
| `channel_ids`       | Sometimes     | An array of `channel_id` strings that specifies which channels to listen for events (required for channel level events)  |
| `metadata_event_type`       | Sometimes     | Required for metadata events, string corresponding to the event type |

### Context data availability

The `inputs` parameter has access to context information from when the trigger is activated. Each event_type has access to its own specific data parameters. For details, see [the trigger docs](https://api.slack.com/future/triggers/event#response-object) or have a look at trigger data available on the `TriggerData` export in `src/typed-method-types/workflows/triggers/mod.ts`.

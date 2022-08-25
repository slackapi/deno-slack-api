## Event Triggers

An event trigger is a trigger that activates when a specific event occurs within the Slack client. Event triggers can activate on either workspace,
or channel level events, and each specific event type has its own required object parameters that need to be filled. An event trigger at the highest
level includes the following required attributes: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| type            | Yes           | The type of trigger (shortcut)                                       |
| name            | Yes           | The name of the trigger                                              |
| description     | No            | A description of the purpose of the trigger                          |
| workflow        | Yes           | Which workflow the trigger connects to                               |
| inputs          | No            | What inputs (defined in the manifest) are passed to the trigger      |
| event           | No            | An event object with information about the activation event          |

### Event Types

An event_type is a string which corresponds to an event in the Slack Client which can activate a workflow trigger.
Currently, events are separated into two categories, Workspace level events, and Channel level events. Workspace level events are events that affect the entire workspace, regardless of channel or specific chat id. Channel level events listen in on specific channels and only activate when the event happens inside of that channel. 
The following is a list of event types along with their category

| Event Name                       | Event String                | Category      | Notes       |
| ---------------------------------|:----------------------------|:-------------:| ------------|
| App Mentioned                    |`slack#/events/app_mentioned`| Channel       |             |
| Channel Archived                 |`slack#/events/channel_archived`| Workspace     |             |
| Channel Created                  |`slack#/events/channel_created`| Workspace     |             |
| Channel Deleted                  |`slack#/events/channel_deleted`| Workspace     |             |
| Channel Renamed                  |`slack#/events/channel_renamed`| Workspace     |             |
| Channel Shared                   |`slack#/events/channel_shared`| Channel       |             |
| Channel Unarchived               |`slack#/events/channel_unarchived`| Workspace     |             |
| Channel Unshared                 |`slack#/events/channel_unshared`| Channel       |             |
| DND Updated                      |`slack#/events/dnd_updated`| Workspace     |             |
| Emoji Changed                    |`slack#/events/emoji_changed`| Workspace     |             |
| Message Metadata Posted          |`slack#/events/message_metadata_posted`| Channel       | Requires the "metadata_event_type" parameter |
| Message Posted                   |`slack#/events/message_posted`| Channel       | Requires a "filter" parameter in event object|
| Pin Added                        |`slack#/events/pin_added`| Channel       |             |
| Pin Removed                      |`slack#/events/pin_removed`| Channel       |             |
| Reaction Added                   |`slack#/events/reaction_added`| Channel       |             |
| Reaction Removed                 |`slack#/events/reaction_removed`| channel       |             |
| Shared Channel Invite Accepted   |`slack#/events/shared_channel_invite_accepted`| Channel       |             |
| Shared Channel Invite Approved   |`slack#/events/shared_channel_invite_approved`| Channel       |             |
| Shared Channel Invite Declined   |`slack#/events/shared_channel_invite_declined`| Channel       |             |
| Shared Channel Invite Received   |`slack#/events/shared_channel_invite_received`| Channel       |             |
| User Joined Channel              |`slack#/events/user_joined_channel`| Channel       |             |
| User Joined Team                 |`slack#/events/user_joined_team`| Workspace     |             |
| User Left Channel                |`slack#/events/user_left_channel`| Channel       |             |

### The Event Object

Event trigger must contain an event object, which specifies the details of the event that will activate the trigger. The event object has the following attributes: 

| Parameter name    | Required?     | Description                                                             |
| ------------------|:-------------:| ------------------------------------------------------------------------|
| event_type        | Yes           | The name of the event                                                   |
| filter            | Sometimes     | A Filter object (Required for message_posted event)                     |
| team_ids          | No            | Which teams to listen for events (Optional for workspace events)        |
| channel_ids       | Sometimes     | which channel to listen for events (required for channel level events)  |

### Example Shortcut Trigger

```ts
const trigger: Trigger = {
  type: "shortcut",
  name: "Request Time off",
  description: "Starts the workflow to request time off",
  workflow: "#/workflows/reverse_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
};
```
## Event Triggers

An Event Trigger is a Trigger that activates when a specific event occurs within the Slack client. Event Triggers can activate on either workspace,
or channel level events, and each specific event type has its own required object parameters that need to be filled. An event Trigger at the highest
level includes the common Trigger parameters along with a required input parameter and an event parameter: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `event`           | Yes            | An event object with information about the activation event          |

### Event Types

An `event_type` is a string which corresponds to an event in the Slack Client. These `event_type`s can be set on a Trigger to activate a Workflow.
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

Event Trigger must contain an Event configuration object, which specifies the details of the Event that will activate the Trigger. The Event configuration object has the following attributes: 

| Parameter name    | Required?     | Description                                                             |
| ------------------|:-------------:| ------------------------------------------------------------------------|
| `event_type`        | Yes           | The name of the event, matches an `event_string` from the [table above](#event-types) |
| [`filter`](trigger-filters.md) | Sometimes     | A [Filter object](./trigger-filters.md) (Required for the message_posted event)    |
| `team_ids`         | No            | An array of `team_id` strings that specifies which teams to listen for events (Optional for workspace events)        |
| `channel_ids`       | Sometimes     | An array of `channel_id` strings that specifies which channels to listen for events (required for channel level events)  |
| `metadata_event_type`       | Sometimes     | Required for metadata events, string corresponding to the event type |


### Context Data Availability

The `inputs` parameter has access to context information from when the Trigger is activated. Each event_type has access to its own specific data parameters which can be found below:

#### reaction_added
```json
"data": {             
  "event_type": "slack#/events/reaction_added",             
  "user_id": "U0GEV077Y",             
  "message_ts": "1535430114.000100",             
  "channel_id": "C0GEV71UG",             
  "reaction": "joy"         
}
```

#### message_metadata_posted
```json
"data": {             
  "event_type": "slack#/events/message_metadata_posted",              
  "app_id": "A0A0000SZ",              
  "user_id": "URQE9F26L",              
  "channel_id": "C0A0000D7",              
  "message_ts": "1630708981.000001",              
  "metadata": {                  
    "event_type": "incident_created",                  
    "event_payload": { //Parameters inside event_payload are user-defined and may differ from the example listed here.                
      "incident": {                          
        "id": 123,                          
        "summary": "Someone tripped over",                          
        "sev": 1                      
      }                  
    }            
  }         
}
```

#### user_joined_channel
```json
"data": {             
  "event_type": "slack#/events/user_joined_channel",            
  "user_id": "U0GEV077Y",             
  "channel_id": "C0GEV71UG",             
  "inviter_id": "U0GEV0BBB",             
  "channel_type" : "public/private/im/mpim" //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"         
}
```

#### dnd_status_updated
```json
"data": {             
  "event_type": "slack#/events/user_updated_dnd",             
  "user_id": "U0GEV077Y",             
  "dnd_status": {                  
    "dnd_enabled": true,                  
    "next_dnd_start_ts": 1450387800,                  
    "next_dnd_end_ts": 1450423800             
  }         
}
```

#### channel_created
```json
"data": {             
  "event_type": "slack#/events/channel_created",             
  "channel_id": "C024BE91L",             
  "channel_name": "fun",             
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"           
  "creator_id": "U024BE7LH",              
  "created": 1360782804,         
}
```

#### user_joined_team
```json
"data": {             
  "event_type": "slack#/events/user_joined_team",              
  "user": {
    "id": "U123",
    "team_id" : "T123",    
    "name" : "John Doe",    
    "display_name" : "John Doe",    
    "real_name" : "John Doe",    
    "timezone" : "America/Los_Angeles",    
    "is_bot" : false, 
  }            
}
```
#### emoji_changed
```json
"data": {             
  "event_type": "slack#/events/emoji_changed",             
  "subtype": "remove",  // remove, rename, add             
  "names": ["picard_facepalm"],            
  "message_ts" : "1361482916.000004"         
}
```

#### user_left_channel
```json
"data": {             
  "event_type": "slack#/events/user_left_channel",             
  "user_id": "W06GH7XHN",             
  "channel_id": "C0GEV71UG",             
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"        
}
```
#### reaction_removed
```json
"data": {             
  "event_type": "slack#/events/reaction_removed",             
  "user_id": "U0GEV077Y",             
  "message_ts": "1535430114.000100",             
  "channel_id": "C0GEV71UG",             
  "reaction": "thumbsup"         
}
```

#### channel_deleted
```json
"data": {             
  "event_type": "slack#/events/channel_deleted",              
  "channel_id": "C013PL9S6D8",              
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"             
  "channel_name": "project_planning",              
  "user_id": "U013PJ8915Y",         
}
```

#### channel_renamed
```json
"data": {             
  "event_type": "slack#/events/channel_renamed",             
  "user_id": "U325JGH5",             
  "channel_id": "C013PL9S6D8",              
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"               
  "channel_name": "project_planning",         
}
```

#### pin_added
```json
"data": {             
  "event_type": "slack#/events/pin_added",              
  "channel_id": "C013PL9S6D8",              
  "user_id": "U024BE7LH",              
  "channel_type": "public/private/im/mpim",              
  "channel_name": "project_planning",             
  "message_ts": 1360782804.083113         
}
```

#### pin_removed
```json
"data": {              
  "event_type": "slack#/events/pin_removed",              
  "user_id": "U024BE7LH",              
  "channel_id": "C013PL9S6D8",              
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"             
  "channel_name": "project_planning",             
  "message_ts": "1360782804.083113"                     
}
```

#### channel_archived
```json
"data": {             
  "event_type": "slack#/events/channel_archived",             
  "user_id": "U024BE7LH",             
  "channel_id": "C024BE91L",             
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"      
}
```

#### channel_unarchived
```json
"data": {              
  "event_type": "slack#/events/channel_unarchived",             
  "user_id": "U024BE7LH",             
  "channel_id": "C024BE91L",             
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"            
  "channel_name": "cool-channel"         
}
```

#### channel_shared
```json
"data": {              
  "event_type": "slack#/events/channel_shared",              
  "connected_team_id": "E163Q94DX",            
  "channel_id": "C024BE91L",             
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"              
  "channel_name": "cool-channel"         
}
```

#### channel_unshared
```json
"data": {              
  "event_type": "slack#/events/channel_unshared",              
  "disconnected_team_id": "E163Q94DX",              
  "is_ext_shared": false,              
  "channel_id": "C024BE91L",             
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"               
  "channel_name": "cool-channel"         
}
```

#### app_mentioned
```json
"data": {              
  "event_type": "slack#/events/app_mentioned",              
  "user_id:": "U061F7AUR",              
  "text": "<@U0LAN0Z89> is it everything a river should be?",              
  "channel_id": "C024BE91L",             
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"       
  "channel_name": "cool-channel"         
}
```

#### shared_channel_invite_accepted
```json
"data": {
  "event_type": "slack#/events/shared_channel_invite_accepted",
  "approval_required": false,  
  "invite": {    
    "id": "I028YDERZSQ",    
    "date_created": 1626876000,    
    "date_invalid": 1628085600,    
    "inviting_team": {      
      "id": "T12345678",      
      "name": "Corgis",      
      "icon": {...},      
      "is_verified": false,      
      "domain": "corgis",      
      "date_created": 1480946400    
    },    
    "inviting_user": {
      "id" : "U123",    
      "team_id" : "T123",    
      "name" : "John Doe",    
      "display_name" : "John Doe",    
      "real_name" : "John Doe",    
      "timezone" : "America/Los_Angeles",    
      "is_bot" : false,     
    }    
  },  
  "recipient_email": "golden@doodle.com",  
  "recipient_user_id": "U87654321",  
  "channel_id": "C12345678",  
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"    
  "channel_name": "test-slack-connect",  
  "teams_in_channel": [    
    {      
      "id": "T12345678",      
      "name": "Corgis",      
      "icon": {...},      
      "is_verified": false,      
      "domain": "corgis",      
      "date_created": 1626789600    
    }  
  ],  
  "accepting_user": {    // Standard user object    
    "id": "U123",    
    "team_id": "T123",    
    "name": "John Doe",    
    "display_name": "John Doe",    
    "real_name": "John Doe",    
    "timezone": "America/Los_Angeles",    
    "is_bot": false,  
  }
}
```

#### shared_channel_invite_approved
```json
"data": {    
  "event_type": "slack#/events/shared_channel_invite_approved",    
  "invite": {    
    "id": "I01354X80CA",    
    "date_created": 1626876000,    
    "date_invalid": 1628085600,    
    "inviting_team": {      
      "id": "T12345678",      
      "name": "Corgis",      
      "icon": {...},      
      "is_verified": false,      
      "domain": "corgis",      
      "date_created": 1480946400    
    },    
    "inviting_user": {   
      "id": "U123",   
      "team_id": "T123",    
      "name": "John Doe",    
      "display_name": "John Doe",    
      "real_name": "John Doe",    
      "timezone": "America/Los_Angeles",    
      "is_bot": false,    
    },    
    "recipient_email": "golden@doodle.com",    
    "recipient_user_id": "U87654321"
  },
  "channel_id": "C12345678",  
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"    
  "channel_name": "test-slack-connect",  
  "approving_team_id": "T87654321",  
  "teams_in_channel": [    
    {      
      "id": "T12345678",      
      "name": "Corgis",      
      "icon": {...},      
      "is_verified": false,      
      "domain": "corgis",      
      "date_created": 1626789600    
    }  
  ],  
  "approving_user": {   
    "id": "U123",    
    "team_id": "T123",    
    "name": "John Doe",    
    "display_name": "John Doe",    
    "real_name": "John Doe",    
    "timezone": "America/Los_Angeles",    
    "is_bot": false,  
  }, 
}
```

#### shared_channel_invite_declined
```json
"data": {    
  "event_type": "slack#/events/shared_channel_invite_approved",    
  "invite": {    
    "id": "I01354X80CA",    
    "date_created": 1626876000,    
    "date_invalid": 1628085600,    
    "inviting_team": {      
      "id": "T12345678",      
      "name": "Corgis",      
      "icon": {...},      
      "is_verified": false,      
      "domain": "corgis",      
      "date_created": 1480946400    
    },    
    "inviting_user": {   
      "id" : "U123"    
      "team_id" : "T123",    
      "name" : "John Doe",    
      "display_name" : "John Doe",    
      "real_name" : "John Doe",    
      "timezone" : "America/Los_Angeles",    
      "is_bot" : false,    
    },    
    "recipient_email": "golden@doodle.com",    
    "recipient_user_id": "U87654321"
  },
  "channel_id": "C12345678",  
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"    
  "channel_name": "test-slack-connect",  
  "declining_team_id": "T87654321",  
  "teams_in_channel": [    
    {      
      "id": "T12345678",      
      "name": "Corgis",      
      "icon": {...},      
      "is_verified": false,      
      "domain": "corgis",      
      "date_created": 1626789600    
    }  
  ],  
  "declining_user": {    
    "id" : "U123",    
    "team_id" : "T123",    
    "name" : "John Doe",    
    "display_name" : "John Doe",    
    "real_name" : "John Doe",    
    "timezone" : "America/Los_Angeles",    
    "is_bot" : false,  
  }, 
}
```

#### shared_channel_invite_received
```json
"data": {  
  "event_type": "slack#/events/shared_channel_invite_received",  
  "invite": {      
    "id": "I028YDERZSQ",      
    "date_created": 1626876000,      
    "date_invalid": 1628085600,      
    "inviting_team": {        
      "id": "T12345678",        
      "name": "Corgis",        
      "icon": {...},        
      "is_verified": false,        
      "domain": "corgis",        
      "date_created": 1480946400      
    },      
    "inviting_user": { 
      "id": "U123",    
      "team_id": "T123",    
      "name": "John Doe",    
      "display_name": "John Doe",    
      "real_name": "John Doe",    
      "timezone": "America/Los_Angeles",    
      "is_bot": false,      
    },      
    "recipient_user_id": "U87654321"    
  },    
  "channel_id": "C12345678",  
  "channel_type" : "public/private/im/mpim", //channel type can be one of these 4 values, either "public", "private", "im", or "mpim"    
  "channel_name": "test-slack-connect",  
}
```

## Usage
The examples below are sample Trigger objects which can be used to create Triggers in the [CLI](./trigger-basics.md/#creating-triggers-using-the-slack-cli).
### Channel Level Trigger
```ts
const trigger: Trigger = {
  type: "event",
  event: {
    event_type: "slack#/events/app_mentioned",
    channel_ids: ["C0X314124"]
  },  
  name: "Sample Event Trigger",
  description: "A sample event trigger",
  workflow: "#/workflows/sample_workflow",
  inputs: {
    a_channel: {
      value: ["121CX31S"],
    },
  },
};
```

### Workspace Level Trigger
```ts
const trigger: Trigger = {
  type: "event",
  event: {
    event_type: "slack#/events/channel_created",
  },
  name: "Request Time off",
  description: "Starts the workflow to request time off",
  workflow: "#/workflows/reverse_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
}
```

### MessagePosted Trigger
```ts
const trigger: Trigger = {
  type: "event",
  event: {
    event_type: "slack#/events/message_posted",
    channel_ids: ["C0X314124"],
    filter: {
      version: 1,
      root: {
        statement: "1 === 1",
      },
    }
  },
  name: "Request Time off",
  description: "Starts the workflow to request time off",
  workflow: "#/workflows/reverse_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
}
```

### Message Metadata Trigger
```ts
const trigger: Trigger = {
  type: "event",
  event: {
    event_type: "slack#/events/message_metadata_posted",
    channel_ids: ["C0X314124"],
    metadata_event_type: "click",
  },
  name: "Request Time off",
  description: "Starts the workflow to request time off",
  workflow: "#/workflows/reverse_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
}
```
### Example Response
```ts
{
  ok: true,
  trigger: {
    id: "Ft01426DHUAF",
    type: "event",
    workflow: {
      id: "Fn0141SXKUHZ",
      workflow_id: "Wf0141SXKULB",
      callback_id: "reverse_workflow",
      title: "Reverse Workflow",
      description: "A sample workflow",
      type: "workflow",
      input_parameters: [],
      output_parameters: [],
      app_id: "A01412HH666",
      app: {
        id: "A01412HH666",
        name: "my-app (dev)",
        icons: [],
        is_workflow_app: false
      },
      date_updated: 1658339916
    },
    inputs: { a_string: { value: "string", locked: false, hidden: false } },
    outputs: {},
    date_created: 1658340679,
    date_updated: 1658340679,
    event_type: "reaction_added"
  }
}
```

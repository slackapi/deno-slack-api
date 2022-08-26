## Event Triggers

An event trigger is a trigger that activates when a specific event occurs within the Slack client. Event triggers can activate on either workspace,
or channel level events, and each specific event type has its own required object parameters that need to be filled. An event trigger at the highest
level includes the common trigger parameters along with a required input parameter and an event parameter: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| inputs          | Yes            | What inputs (defined in the manifest) are passed to the trigger      |
| event           | Yes            | An event object with information about the activation event          |

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
| [filter](trigger-filters.md) | Sometimes     | A Filter object (Required for message_posted event)                     |
| team_ids          | No            | Which teams to listen for events (Optional for workspace events)        |
| channel_ids       | Sometimes     | which channel to listen for events (required for channel level events)  |
| metadata_event_type       | Sometimes     | Required for metadata events, string corresponding to the event type |


### Context Data Availability

The inputs paramater has access to context information from when the trigger is activated. Each event_type has access to its own specific data parameters which can be found below:

#### reaction_added
```json
"data": {             
  "event_type": “slack#/events/reaction_added",             
  “user_id”: "U0GEV077Y",             
  "message_ts”: "1535430114.000100”,             
  "channel_id”: "C0GEV71UG",             
  "reaction": "joy"         
}
```

#### message_metadata_posted
```json
"data": {             
  "event_type": “slack#/events/message_metadata_posted",              
  "app_id": "A0A0000SZ",              
  "user_id": "URQE9F26L",              
  "channel_id": "C0A0000D7",              
  "message_ts": "1630708981.000001”              
  "metadata": {                  
    "event_type": "incident_created",                  
    "event_payload": {                     
      “incident”: {                          
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
  "channel_type" : "public/private/im/mpim"         
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
  “channel_id": “C024BE91L”,             
  “channel_name": “fun”,             
  “channel_type": “public”,             
  "creator_id": "U024BE7LH”              
  “created": 1360782804,         
}
```

#### user_joined_team
```json
"data": {             
  "event_type": "slack#/events/user_joined_team",              
  "user": {
    'id' => ‘U123’    
    'team_id' => ‘T123’,    
    'name' => ‘John Doe’,    
    'display_name' => ‘John Doe’,    
    'real_name' => ‘John Doe’,    
    'timezone' => 'America/Los_Angeles',    
    'is_bot' => false, 
  }            
}
```
#### emoji_changed
```json
"data": {             
  "event_type": "slack#/events/emoji_changed",             
  “subtype”: “remove”,  // remove, rename, add             
  “names”: [“picard_facepalm”],            
  "message_ts" : "1361482916.000004"         
}
```

#### member_left_channel
```json
"data": {             
  "event_type": "slack#/events/user_left_channel",             
  "user_id": "W06GH7XHN",             
  "channel_id": "C0GEV71UG",             
  "channel_type" : "public/private/im/mpim"         
}
```
#### reaction_removed
```json
“data”: {             
  "event_type": “slack#/events/reaction_removed",             
  “user_id”: "U0GEV077Y",             
  "message_ts”: "1535430114.000100”,             
  "channel_id”: "C0GEV71UG",             
  "reaction": "thumbsup"         
}
```

#### channel_deleted
```json
“data”: {             
  "event_type": “slack#/events/channel_deleted",              
  "channel_id": "C013PL9S6D8",              
  "channel_type": "public/private/im/mpim",              
  "channel_name": "project_planning",              
  "user_id": "U013PJ8915Y",         
}
```

#### channel_renamed
```json
“data”: {             
  "event_type": “slack#/events/channel_renamed",             
  "user_id": "U325JGH5",             
  "channel_id": "C013PL9S6D8",              
  "channel_type": "public/private/im/mpim",              
  "channel_name": "project_planning",         
}
```

#### pin_added
```json
“data”: {             
  "event_type": “slack#/events/pin_added",              
  "channel_id": "C013PL9S6D8",              
  “user_id” "U024BE7LH”,              
  "channel_type": "public/private/im/mpim",              
  "channel_name": "project_planning",             
  “message_ts”: 1360782804.083113         
}
```

#### pin_removed
```json
“data”: {              
  "event_type": “slack#/events/pin_removed",              
  "user_id": "U024BE7LH",              
  "channel_id": "C013PL9S6D8",              
  "channel_type": "public/private/im/mpim",              
  "channel_name": "project_planning",             
  “message_ts”: “1360782804.083113”                     
}
```

#### channel_archived
```json
"data": {             
  "event_type": "slack#/events/channel_archived",             
  “user_id”: "U024BE7LH",             
  “channel_id”: "C024BE91L”,             
  "channel_type": "public/private/im/mpim",         
}
```

#### channel_unarchived
```json
“data”: {              
  "event_type": “slack#/events/channel_unarchived",             
  “user_id”: "U024BE7LH",             
  “channel_id”: "C024BE91L”,             
  "channel_type": "public/private/im/mpim",              
  “channel_name”: “cool-channel”         
}
```

#### channel_shared
```json
“data”: {              
  "event_type": “slack#/events/channel_shared",              
  “connected_team_id”: “E163Q94DX”              
  “channel_id”: "C024BE91L”,             
  "channel_type": "public/private/im/mpim",              
  “channel_name”: “cool-channel”         
}
```

#### channel_unshared
```json
“data”: {              
  "event_type": “slack#/events/channel_unshared",              
  “disconnected_team_id”: “E163Q94DX”,              
  “is_ext_shared”: false,              
  “channel_id”: "C024BE91L”,             
  "channel_type": "public/private/im/mpim",              
  “channel_name”: “cool-channel”         
}
```

#### app_mentioned
```json
“data”: {              
  "event_type": “slack#/events/app_mentioned",              
  “user_id:”: “U061F7AUR”,              
  “text”: "<@U0LAN0Z89> is it everything a river should be?",              
  “channel_id”: "C024BE91L”,             
  "channel_type": "public/private/im/mpim",              
  “channel_name”: “cool-channel”         
}
```

#### shared_channel_invite_accepted
```json
“data”: {
  "event_type": “slack#/events/shared_channel_invite_accepted",
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
    "inviting_user": {     // Standard hermes user object    
      'id' => ‘U123’    
      'team_id' => ‘T123’,    
      'name' => ‘John Doe’,    
      'display_name' => ‘John Doe’,    
      'real_name' => ‘John Doe’,    
      'timezone' => 'America/Los_Angeles',    
      'is_bot' => false,     
    }    
  },  
  "recipient_email": "golden@doodle.com",  
  "recipient_user_id": "U87654321"  
  “channel_id”: "C12345678,  
  "channel_type": "public/private/im/mpim",  
  “channel_name”: test-slack-connect  
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
  "accepting_user": {    // Standard hermes user object    
    'id' => ‘U123’    
    'team_id' => ‘T123’,    
    'name' => ‘John Doe’,    
    'display_name' => ‘John Doe’,    
    'real_name' => ‘John Doe’,    
    'timezone' => 'America/Los_Angeles',    
    'is_bot' => false,  
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
    "inviting_user": {    // Standard hermes user object    
      'id' => ‘U123’    
      'team_id' => ‘T123’,    
      'name' => ‘John Doe’,    
      'display_name' => ‘John Doe’,    
      'real_name' => ‘John Doe’,    
      'timezone' => 'America/Los_Angeles',    
      'is_bot' => false,    
    },    
    "recipient_email": "golden@doodle.com",    
    "recipient_user_id": "U87654321"
  },
  “channel_id”: "C12345678,  
  "channel_type": "public/private/im/mpim",  
  “channel_name”: test-slack-connect,  
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
  "approving_user": {  // Standard hermes user object    
    'id' => ‘U123’    
    'team_id' => ‘T123’,    
    'name' => ‘John Doe’,    
    'display_name' => ‘John Doe’,    
    'real_name' => ‘John Doe’,    
    'timezone' => 'America/Los_Angeles',    
    'is_bot' => false,  
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
    "inviting_user": {    // Standard hermes user object    
      'id' => ‘U123’    
      'team_id' => ‘T123’,    
      'name' => ‘John Doe’,    
      'display_name' => ‘John Doe’,    
      'real_name' => ‘John Doe’,    
      'timezone' => 'America/Los_Angeles',    
      'is_bot' => false,    
    },    
    "recipient_email": "golden@doodle.com",    
    "recipient_user_id": "U87654321"
  },
  “channel_id”: "C12345678,  
  "channel_type": "public/private/im/mpim",  
  “channel_name”: test-slack-connect,  
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
  "declining_user": {  // Standard hermes user object    
    'id' => ‘U123’    
    'team_id' => ‘T123’,    
    'name' => ‘John Doe’,    
    'display_name' => ‘John Doe’,    
    'real_name' => ‘John Doe’,    
    'timezone' => 'America/Los_Angeles',    
    'is_bot' => false,  
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
    "inviting_user": {       // Standard hermes user object    
      'id' => ‘U123’    
      'team_id' => ‘T123’,    
      'name' => ‘John Doe’,    
      'display_name' => ‘John Doe’,    
      'real_name' => ‘John Doe’,    
      'timezone' => 'America/Los_Angeles',    
      'is_bot' => false,      
    },      
    "recipient_user_id": "U87654321"    
  },    
  “channel_id”: "C12345678,  
  "channel_type": "public/private/im/mpim",  
  “channel_name”: test-slack-connect,47639900  
}
```

## Usage

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
    function: {
      id: "Fn0141SXKUHZ",
      workflow_id: "Wf0141SXKULB",
      callback_id: "reverse_workflow",
      title: "Reverse Workflow",
      description: "A sample workflow",
      type: "workflow",
      input_parameters: [ [Object], [Object], [Object] ],
      output_parameters: [],
      app_id: "A01412HH666",
      app: {
        id: "A01412HH666",
        name: "my-app (dev)",
        icons: [Object],
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

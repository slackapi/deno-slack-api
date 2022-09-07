## Link Triggers

A Link Trigger is an interactive Trigger that activates when a Shortcut is clicked in the Slack client. When a Shortcut Trigger is created, its API response returns a `shortcut_url` which can be used in Slack to show a button. Clicking on this button will activate the associated Workflow. A Link Trigger
includes the common [Trigger attributes](./trigger-basics.md#trigger-types) along with an optional shortcut parameter: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `shortcut`        | No            | Contains information about the [button text](#shortcut-object) of the shortcut          |

### Shortcut Configuration

A Link Trigger can contain an optional `shortcut` configuration object which specifies additional details about the Shortcut. Currently, the `shortcut` object is used to specify the button text of the Shortcut associated with the Trigger and has the following shape:

```ts
  shortcut?: {
    button_text: string;
  };
```

### Link Data Context Object
The `data` context parameters available to a Shortcut Trigger are as follows:

| Parameter name  | type     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `data.user_id`        | string            | A unique identifier for the Slack user who invoked the Trigger         |
| `data.channel_id`        | string            | A unique identifier for the channel where the Trigger was invoked         |
| `data.interactivity`        | object            | See [Block Kit interactivity](https://api.dev.slack.com/future/triggers/future/block-events)|
| `data.location`        | string            | Where the Trigger was invoked. Can be `message` or `bookmark`|
| `data.message_ts`        | string            | A unique UNIX timestamp in seconds indicating when the Trigger-invoking message was sent|
| `data.user`        | object            | An object containing a `user_id` and a `secret` that can be used to identify and validate the specific user who invoked the Trigger|
| `data.action_id`        | string            | A unique identifier for the action that invoked the Trigger. See [Block Kit interactivity](https://api.dev.slack.com/future/triggers/future/block-events) |
| `data.block_id`        | string            | A unique identifier for the block where the Trigger was invoked. See [Block Kit interactivity](https://api.dev.slack.com/future/triggers/future/block-events)|
| `data.bookmark_id`        | string            | A unique identifier for the bookmark where the Trigger was invoked|

The data context can be used in the input parameter as follows:

```ts
{ 
 inputs: {
  a_input_value: {
    value: "{{data.user_id}}"
  }
 }
}
```
## Usage
Below are some usage examples of `ShortcutTrigger` objects which can be used in a .ts file to create a `shortcut` trigger through the [Hermes CLI](./trigger-basics.md/#creating-triggers-using-the-hermes-cli), alternatively this object could be passed into a 
`client.workflows.triggers.create` method to achieve the same effect at [runtime](./trigger-basics.md/#creating-triggers-in-the-runtime-environment).

### Example Configured Shortcut Trigger

```ts
const trigger: ShortcutTrigger = {
  type: "shortcut",
  name: "Request Time off",
  description: "Starts the workflow to request time off",
  workflow: "#/workflows/reverse_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
  shortcut: {
    button_text: "Click Me"
  }
};
```

### Example Shortcut Trigger Without Shortcut Object

```ts
const trigger: ShortcutTrigger = {
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

### Example Response Payload from Create API

```ts
{
  ok: true, //true on success, false on failure
  trigger: { //information related to the trigger 
    id: "Ft01426C5LG3", //The trigger id
    type: "shortcut", //The trigger type
    workflow: { // Information related to the workflow function
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
    inputs: {},
    outputs: {},
    date_created: 1658339927,
    date_updated: 1658339927,
    name: "TEST", //The name given to the trigger
    description: "", //Trigger description
    shortcut_url: "https://app.slack.com/app/A01412HH666/shortcut/Ft01426C5LG3" //The shortcut URL, paste into client to create unfurled link
  }
}
```

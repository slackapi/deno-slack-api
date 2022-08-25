## Shortcut Triggers

A shortcut trigger is a trigger that activates when a shortcut is clicked in the Slack client. A shortcut trigger
includes the common trigger attributes along with an optional shortcut parameter: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| shortcut        | No            | Contains information about the button text of the shortcut           |

### Shortcut Object

A Shortcut trigger can contain an optional shortcut object which specifies additional details about the shortcut. Currently, the shortcut object is used to specify the button text of the shortcut associated with the trigger and has the following shape:

```ts
  shortcut?: {
    button_text: string;
  };
```
### Shortcut Unfurling 
A shortcut trigger can be used to create a shortcut which, when clicked or activated, will run through a workflow. When a shortcut trigger is created through the API, it's return object will include a shortcut_url parameter which can be pasted into the client and unfurled to reveal a shortcut link. Clicking on this link will run through the associated workflow.
## Usage
### Example Shortcut Trigger With Shortcut Object

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
  shortcut: {
    button_text: "Click Me"
  }
};
```

### Example Shortcut Trigger Without Shortcut Object

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

### Example Response

```ts
{
  ok: true, //true on success, false on failure
  trigger: { //information related to the trigger 
    id: "Ft01426C5LG3", //The trigger id
    type: "shortcut", //The trigger type
    function: { // Information related to the workflow function
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

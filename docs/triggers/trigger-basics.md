## Creating Triggers

Triggers can be created in one of two ways, either in the runtime environment, or through the Hermes CLI.

### Creating Triggers using the Hermes CLI

To create a trigger using the Hermes CLI, create a file that contains your trigger, either in TS or JSON format.
```ts
import { Trigger } from "deno-slack-api/types.ts";

const trigger: Trigger = {
  type: "shortcut", // the type of trigger
  name: "Request Time off", // the name of the trigger
  description: "Starts the workflow to request time off", //trigger description
  workflow: "#/workflows/reverse_workflow", //the workflow your trigger activates
  inputs: { //trigger inputs
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
};

export default trigger;
```

```json
{
  "type": "shortcut", // the type of trigger
  "name": "Request Time off", // the name of the trigger
  "description": "Starts the workflow to request time off", //trigger description
  "workflow": "#/workflows/reverse_workflow", //the workflow your trigger activates
  "inputs": { //trigger inputs
    "interactivity": {
      "value": "{{data.interactivity}}",
    },
  },
}
```

The required parameters for each trigger type varies and can be found in the docs for specific trigger types.

### Creating Triggers in the runtime environment

Creating triggers in the runtime environment utilizes the `SlackAPI` client to make an API call to the slack API.
Creation uses the `client.workflows.triggers.create` method which takes in a trigger object as input. 

```ts
  const client = SlackAPI(token, {
    slackApiUrl: env["SLACK_API_URL"],
  });

  const shortcutResponse = await client.workflows.triggers.create({
    type: "shortcut",
    name: "Request Time off",
    description: "Starts the workflow to request time off",
    workflow: "#/workflows/reverse_workflow",
    inputs: {
      interactivity: {
        value: "{{data.interactivity}}",
      },
    },
  });
```

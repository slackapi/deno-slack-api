## What is a Trigger?

A trigger is an entry point for the execution of a workflow. Triggers define the circumstances under which a workflow will be initiated and contain contextual information that can be
passed along from the trigger to a workflow. Triggers come in different shapes and sizes, and there are four primary trigger types which can be used to activate a workflow.
These four types are [Event](./event-triggers.md), [Shortcut](./shortcut-triggers.md), [Scheduled](./scheduled-trigger.md), and [Webhook](./webhook-triggers.md). Because Triggers are the trigger of a workflow, a workflow needs to be defined before a Trigger can be written for it. API information regarding triggers can be found at [here](https://api.slack.com/future/triggers)

### Trigger Types
There are currently 4 supported trigger types, [Shortcut](shortcut-trigger.md), [Webhook](webhook-trigger.md), 
[Event](event-trigger.md), and [Scheduled](scheduled-trigger.md). Creation of each trigger type has a specific creation
object type, however all triggers have parameters that are common to all trigger types, these common parameters are as follows:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `type`            | Yes           | The type of trigger (one of `shortcut`, `event`, `scheduled`, or `webhook`)|
| `name`            | Yes           | The name of the trigger                                              |
| `description`     | No            | A description of the purpose of the trigger                          |
| `workflow`        | Yes           | Which workflow the trigger connects to                               |
| `inputs`          | No            | What inputs (defined in the manifest) are passed to the trigger      |

In addition to these common parameters, specific trigger types will have their own unique parameters which can be viewed in 
their respective documents.

### Trigger Context Data
Each trigger type has access to a data context object which includes information related to the context of the trigger activation. This data object can be used to fill the input fields of the trigger being activated. Each of the four trigger types has access to separate information which is contextual based on the trigger type, which will be provided in the specific article for the trigger type.

## Creating Triggers

Triggers can be created in one of two ways, either dynamically in your application at runtime, or through the Hermes CLI.
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

Creating triggers at runtime from within your application utilizes the `SlackAPI` client to make an API call to the Slack API.
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

## What is a Trigger?

A Trigger is an entry point for the execution of a [Workflow](https://api.slack.com/future/workflows). Triggers define the circumstances under which a workflow will be initiated and contain contextual information that can be
passed along from the Trigger to a Workflow. Triggers come in different shapes and sizes, and there are four primary Trigger types which can be used to activate a workflow.
These four types are [Event](./event-triggers.md), [Shortcut](./shortcut-triggers.md), [Scheduled](./scheduled-trigger.md), and [Webhook](./webhook-triggers.md). Because Triggers are the entry point of a workflow, a Workflow needs to be defined before a Trigger can be written for it. API information regarding Triggers can be found at [here](https://api.slack.com/future/triggers)

### Trigger Types
There are currently 4 supported Trigger types, [Shortcut](shortcut-trigger.md), [Webhook](webhook-trigger.md), 
[Event](event-trigger.md), and [Scheduled](scheduled-trigger.md). Each Trigger type has it's own configuration object, however all Triggers have parameters that are common to all Trigger types, these common parameters are as follows:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `type`            | Yes           | The type of Trigger (one of `shortcut`, `event`, `scheduled`, or `webhook`)|
| `name`            | Yes           | The name of the Trigger                                              |
| `description`     | No            | A description of the purpose of the Trigger                          |
| `workflow`        | Yes           | Which workflow the Trigger connects to                               |
| `inputs`          | No            | What inputs (defined in the manifest) are passed to the Trigger      |

The unique configuration objects for each Trigger type can be found in their respective documents.

### Trigger Context Data
Each Trigger type has access to a `data` context object which includes information related to the context of the Trigger activation. This `data` object can be used to define values for `inputs` and `filters` of the Trigger being activated. Each of the four Trigger types has access to separate information which is contextual based on the Trigger type. These details will be provided in the specific article for that Trigger type.

## Creating Triggers

Triggers can be created in one of two ways, either dynamically in your application at runtime, or through the Hermes CLI.
### Creating Triggers using the Hermes CLI

To create a Trigger using the Hermes CLI, create a file that contains your Trigger, either in TS or JSON format.
```ts
import { Trigger } from "deno-slack-api/types.ts";

const trigger: Trigger = {
  type: "shortcut", // the type of Trigger
  name: "Request Time off", // the name of the Trigger
  description: "Starts the workflow to request time off", //Trigger description
  workflow: "#/workflows/reverse_workflow", //the workflow your Trigger activates
  inputs: { //Trigger inputs
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
};

export default trigger;
```

```json
{
  "type": "shortcut", // the type of Trigger
  "name": "Request Time off", // the name of the Trigger
  "description": "Starts the workflow to request time off", //Trigger description
  "workflow": "#/workflows/reverse_workflow", //the workflow your Trigger activates
  "inputs": { //Trigger inputs
    "interactivity": {
      "value": "{{data.interactivity}}",
    },
  },
}
```

### Creating Triggers at runtime from your application

Creating Triggers at runtime from within your application utilizes the `SlackAPI` client to make an API call to the Slack API.
Creation uses the `client.workflows.triggers.create` method which takes in a Trigger object as input. 

```ts
  const client = SlackAPI(token);

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

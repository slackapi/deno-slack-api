# Trigger Creation Workflow Definition Inputs

When creating a trigger at runtime, a workflow definition can be passed into the `client.workflows.triggers.create` method which will allow for typeahead/autocomplete of the input parameters based on the definition's inputs. 

## Defining A Workflow Recap

Recall in the `manifest.ts` file of an app, a `workflow` can be defined using the `DefineWorkflow` method as follows:

```ts
export const TriggersWorkflow = DefineWorkflow({
  callback_id: "triggers_workflow",
  title: "Triggers Workflow",
  description: "sample runthrough of a trigger creation",
  input_parameters: {
    properties: {
      a_string: {
        type: Schema.types.string,
      },
      b_string: {
        type: Schema.types.string,
      },
      a_channel: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: [],
  },
});
```

When a workflow is created in this manner, if contains a `workflow.definition` object. By passing this definition into the `create` method, the trigger will have access to information related to the workflow's definition.

### Using Workflow definition input at runtime Example 

```ts
import type { SlackFunctionHandler } from "../../deno-slack-sdk/src/types.ts";
import { TriggersFunction, TriggersWorkflow } from "../manifest.ts";
import { SlackAPI } from "../../deno-slack-api/src/mod.ts";

const triggers: SlackFunctionHandler<typeof TriggersFunction.definition> = 
  async (
    { token, env },
  ) => {
    const client = SlackAPI(token, {
      slackApiUrl: env["SLACK_API_URL"],
    });
    const workflowDef = TriggersWorkflow.definition;
    const triggerResponse = await client.workflows.triggers.create<
      typeof workflowDef //Definition passed in as a generic
    >({
      type: "webhook",
      name: "Request Time off",
      description: "Starts the workflow to request time off",
      workflow: "#/workflows/reverse_workflow",
    });
  }
```

## Workflow Definition Input with CLI Triggers

A `workflow` definition input can also be passed to the `trigger` file that is used to create a Trigger through the CLI. When passing the definition input in this manner, the `Workflow` definition is passed as a generic to the `Trigger` object instead of the `create` method.

### Using Workflow definition input with CLI Example

```ts
import { Trigger } from "../deno-slack-api/src/types.ts";
import { TriggersWorkflow } from "./manifest.ts";

const trigger: Trigger<typeof TriggersWorkflow.definition> = { //Workflow definition is passed to the trigger object
  type: "shortcut",
  name: "Get Triggers List",
  description: "Starts the workflow to request time off",
  workflow: "#/workflows/list_trigger_workflow",
  inputs: {    //The inputs parameter will now have typeahead based on the Workflow definition being passed in.
    
  }
};

export default trigger;
```

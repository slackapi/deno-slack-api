# Trigger Generics

When creating or updating a trigger at runtime, a Workflow definition can be passed into the `client.workflows.triggers.create` and `client.workflows.triggers.update` methods as a generic which will allow for typeahead/autocomplete of the input parameters based on the definition's inputs. 

## Defining A Workflow

Recall that in the [SDK](https://github.com/slackapi/deno-slack-sdk/blob/main/docs/workflows.md#workflows), a `workflow` can be defined using the `DefineWorkflow` method.
When a workflow is created in this manner, if contains a `workflow.definition` object. By passing this definition into the `create` method, the trigger will have access to information related to the workflow's definition.

### Using Trigger Generics at runtime Example 

```ts
import type { SlackFunction } from "/deno-slack-sdk/src/types.ts";
import { TriggersFunction, TriggersWorkflow } from "../manifest.ts";
import { SlackAPI } from "../../deno-slack-api/src/mod.ts";

const triggers: SlackFunction<typeof TriggersFunction.definition> = 
  async (
    { token, env },
  ) => {
    const client = SlackAPI(token, {
      slackApiUrl: env["SLACK_API_URL"],
    });
    const triggerResponse = await client.workflows.triggers.create< 
      typeof TriggersWorkflow.definition //The same generic can be passed into the update method
    >({
      type: "webhook",
      name: "Request Time off",
      description: "Starts the workflow to request time off",
      workflow: "#/workflows/reverse_workflow",
    });
  }
```

## Workflow Definition Input with CLI Triggers

A `workflow` definition input can also be passed to the `trigger` file that is used to create or update a Trigger through the CLI. When passing the definition input in this manner, the `Workflow` definition is passed as a generic to the `Trigger` object instead of the `create` or `update` method.

### Using Trigger Generics with CLI Example

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

### Trigger Creation Workflow Definition Inputs

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

## Usage Example 

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

### Workflow Definition Benefits

## Inputless Workflows

Passing a workflow definition as a generic allows for typescript to autocomplete the input fields of the trigger based on the workflow, recall that in a standard `create` call without a workflow definition passed in, the `inputs` field is a required parameter and a typical code editor will display an error if the field is omitted:

```ts
  /* This code block will be marked as invalid because it does not have an "inputs" parameter */
  const eventResponse = await client.workflows.triggers.create({
    type: "webhook",
    name: "Request Time off",
    description: "Starts the workflow to request time off",
    workflow: "#/workflows/reverse_workflow",
  });
```

If a workflow is defined in the manifest without inputs, and this workflow definition is then passed into the `create` call as a generic, the `create` call will no longer require the inputs fields to be included in the API call.

# Our workflow defined in the manifest
```ts
export const TriggersWorkflow = DefineWorkflow({
  callback_id: "triggers_workflow",
  title: "Triggers Workflow",
  description: "Workflow runthrough of create/update/delete triggers",
});
```

# Our create call

```ts
  /* This is now considered a valid call to the create API, no inputs required */
  const triggerResponse = await client.workflows.triggers.create<typeof TriggersWorkflow.definition>({
    type: "webhook",
    name: "Request Time off",
    description: "Starts the workflow to request time off",
    workflow: "#/workflows/reverse_workflow",
  });
```

## Optional Inputs

Even if an input is defined in a workflow as a parameter, recall that it also requires an array of `required` inputs to be defined as well, which can be seen in a [previous section](#defining-a-workflow-recap).
Without passing in a workflow definition, even if no inputs are specified as `required` in the array, an empty `inputs` object would still be required to make a valid API call. With a workflow definition passed in, this is no longer a requirement.

# Without Generic
```ts
  /* Even with an empty required array, an empty input object is still required  */
  const triggerResponse = await client.workflows.triggers.create({
    type: "webhook",
    name: "This Trigger Requires An empty input",
    description: "No workflow definition passed",
    workflow: "#/workflows/reverse_workflow",
    inputs: {},
  });
```

# With Generic
```ts
  /* input object no longer required */
  const eventResponse = await client.workflows.triggers.create<typeof TriggerWorkflow.definition>({
    type: "webhook",
    name: "This Trigger Does Not Require an Input",
    description: "Workflow definition passed",
    workflow: "#/workflows/reverse_workflow",
  });
```

# Trigger generics

When creating or updating a trigger, a workflow definition can be passed into
the `client.workflows.triggers.create` and `client.workflows.triggers.update`
methods as a generic which will allow for typeahead/autocomplete of the input
parameters based on the definition's inputs.

## Defining a workflow

Recall that in the
[SDK](https://github.com/slackapi/deno-slack-sdk/blob/main/docs/workflows.md#workflows),
a `workflow` can be defined using the `DefineWorkflow` method. When a workflow
is created in this manner, it contains a `workflow.definition` object. By
passing this definition into the `create` or `update` method, the trigger will
have access to information related to the workflow's definition.

## Workflow definition input with runtime triggers

When dealing with triggers at runtime, a workflow definition input can
optionally be passed to the trigger's `create` or `update` API call as a
generic. When a generic is passed, the object argument being defined will have
access to typeahead on the `inputs` and `workflow` properties.

### Using trigger generics at runtime Example

```ts
import { TriggersWorkflow } from "../manifest.ts";
import { SlackAPI } from "deno-slack-api/mod.ts";

...

{
  //Inside the function execution logic
  const client = SlackAPI(token);
  
  const triggerReturn = await client.workflows.triggers.create< //Also works for update
    typeof TriggersWorkflow.definition
  >({
    type: "webhook",
    name: "Request Time off",
    description: "Starts the workflow to request time off",
    workflow: "#/workflows/reverse_workflow",
    inputs: { //inputs can now be autofilled from the workflow definition
      a_string: {
        value: "TEST",
      },
      a_channel: {
        value: "TEST",
      },
      b_string: {
        value: "TEST",
      },
    },
}
```

## Workflow definition input with CLI triggers

A `workflow` definition input can also be passed to the `trigger` file that is
used to create or update a trigger through the CLI. When passing the definition
input in this manner, the `workflow` definition is passed as a generic to the
`trigger` object instead of the `create` or `update` method. With an Input
Generic, the `trigger` object being defined will have access to typeahead on the
expected parameters to be passed in.

### Using trigger generics with CLI Example

```ts
import { Trigger } from "deno-slack-api/types.ts";
import { TriggersWorkflow } from "../manifest.ts";

const trigger: Trigger<typeof TriggersWorkflow.definition> = { //Workflow definition is passed to the trigger object
  type: "shortcut",
  name: "Get Triggers List",
  description: "Starts the workflow to request time off",
  workflow: "#/workflows/list_trigger_workflow",
  inputs: { //The inputs parameter will now have typeahead based on the workflow definition being passed in.
    a_input: {
      value: "test_value",
    },
  },
};

export default trigger;
```

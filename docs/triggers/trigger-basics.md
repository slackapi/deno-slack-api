## What is a trigger?

A trigger is an entry point for the execution of a
[workflow](https://api.slack.com/future/workflows). triggers define the
circumstances under which a workflow will be initiated and contain contextual
information that can be passed along from the trigger to a workflow. Triggers
come in different shapes and sizes, and there are four primary trigger types
which can be used to activate a workflow. These four types are
[event](./event-triggers.md), [shortcut](./shortcut-triggers.md),
[scheduled](./scheduled-trigger.md), and [webhook](./webhook-triggers.md).
Because triggers are the entry point of a workflow, a workflow needs to be
defined before a trigger can be written for it. API information regarding
triggers can be found at [here](https://api.slack.com/future/triggers)

### Trigger types

There are currently 4 supported trigger types, [shortcut](shortcut-trigger.md),
[webhook](webhook-trigger.md), [event](event-trigger.md), and
[scheduled](scheduled-trigger.md). Each trigger type has it's own configuration
object, however all triggers have parameters that are common to all trigger
types, these common parameters are as follows:

| Parameter name | Required? | Description                                                                 |
| -------------- | :-------: | --------------------------------------------------------------------------- |
| `type`         |    Yes    | The type of trigger (one of `shortcut`, `event`, `scheduled`, or `webhook`) |
| `name`         |    Yes    | The name of the trigger                                                     |
| `description`  |    No     | A description of the purpose of the trigger                                 |
| `workflow`     |    Yes    | Which workflow the trigger connects to                                      |
| `inputs`       |    No     | What inputs (defined in the manifest) are passed to the workflow            |

The unique configuration objects for each trigger type can be found in their
respective documents.

### Context Data Availability

Each trigger type has access to a `data` context object which includes
information related to the context of the trigger activation. This `data` object
can be used to define values for `inputs` and `filters` of the trigger being
activated. Each of the four trigger types has access to separate information
which is contextual based on the trigger type. These details will be provided in
the specific article for that trigger type.

## Creating triggers

Triggers can be created in one of two ways, either dynamically in your
application at runtime, or through the Slack CLI. More details on trigger
creation can be found in the
[API documentation](https://api.dev.slack.com/future/triggers#create).

### Creating Triggers Generic Inputs

triggers can be created or updated at runtime with an optional
`WorkflowDefinition` as a generic input which utilizes the `WorkflowDefinition`
object defined in the manifest to help specify what `inputs` a trigger will
require. Additional details can be found [here](trigger-generic-inputs.md).

### Creating triggers using the Slack CLI

To create a trigger using the Slack CLI, create a file that contains your
trigger TypeScript format. Run the `trigger create` command with a
`--trigger-def` flag pointing to your desired trigger file.

```zsh
slack trigger create --trigger-def "path/to/trigger.ts"
```

Example `trigger` objects in valid typescript and JSON formats can be viewed
below. With a Generic Input these `trigger` objects will have access to
typeahead for valid input parameters.

#### With Generic Input

```ts
import { Trigger } from "deno-slack-api/types.ts";
import { TriggersWorkflow } from "../manifest.ts"; //The workflow you intend to use to define your trigger

const trigger: Trigger<typeof TriggersWorkflow.definition> = {
  type: "shortcut", // the type of trigger
  name: "Request Time off", // the name of the trigger
  description: "Starts the workflow to request time off", //Trigger description
  workflow: "#/workflows/reverse_workflow", //the workflow your trigger activates
  inputs: { //Trigger inputs
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
};

export default trigger;
```

#### Without Generic Input

```ts
import { Trigger } from "deno-slack-api/types.ts";

const trigger: Trigger = {
  type: "shortcut", // the type of trigger
  name: "Request Time off", // the name of the trigger
  description: "Starts the workflow to request time off", //Trigger description
  workflow: "#/workflows/reverse_workflow", //the workflow your trigger activates
  inputs: { //Trigger inputs
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
};

export default trigger;
```

### Creating triggers at runtime from your application

Creating triggers at runtime from within your application utilizes the
`SlackAPI` client to make an API call to the Slack API. Creation uses the
`client.workflows.triggers.create` method which takes in a trigger object as
input.

#### With Generic Input

```ts
import { TriggersWorkflow } from "../manifest.ts"; //The workflow you intend to use to define your trigger

const client = SlackAPI(token);

const shortcutResponse = await client.workflows.triggers.create<
  typeof TriggersWorkflow.definition
>({
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

#### Without Generic Input

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

## Updating triggers

Similar to creating, updating triggers can be done through the CLI, or at
runtime using the `client.workflows.triggers.update` method. Updating a trigger
takes the same trigger object as creating one, with the addition of a
`trigger_id` parameter to identify the trigger being updated. More details on
updating triggers can be found in the
[API documentation](https://api.dev.slack.com/future/triggers#update).

### Updating triggers in the CLI

To update a trigger using the Slack CLI, make the desired update to your
existing [trigger file](#creating-triggers-using-the-slack-cli). When this is
done, run the `slack trigger update` command from the CLI with a `--trigger-id`
flag to identify the trigger to be updated.

```zsh
slack trigger update --trigger-id Ft123ABC --trigger-def "path/to/trigger.ts"
```

### Updating triggers at runtime from your application

Updating uses the `client.workflows.triggers.update` method which takes in the
same trigger object as the create call as input, with the addition of a
`trigger_id` parameter.

#### With Generic Input

```ts
import { TriggersWorkflow } from "../manifest.ts"; //The workflow you intend to use to define your trigger
const client = SlackAPI(token);

const shortcutResponse = await client.workflows.triggers.update<
  typeof TriggersWorkflow.definition
>({
  trigger_id: "FtABC123",
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

#### Without Generic Input

```ts
import { TriggersWorkflow } from "../manifest.ts"; //The workflow you intend to use to define your trigger
const client = SlackAPI(token);

const shortcutResponse = await client.workflows.triggers.update({
  trigger_id: "FtABC123",
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

## Deleting triggers

Triggers can be deleted by passing the trigger ID. See the
[API documentation](https://api.dev.slack.com/future/triggers#delete) for more
details.

### Delete a trigger at runtime

You can delete a trigger at runtime by passing the desired `trigger_id` into
`client.workflows.triggers.delete`.

```ts
client.workflows.triggers.delete({
  trigger_id: "FtABC123",
});
```

## Listing triggers

Keeping track of active triggers can be done using the `List` command, which
will return a list of active triggers in your workspace. This can be done either
through the CLI or at runtime.

### Listing triggers at runtime

Triggers can be listed at runtime using the `client.workflows.triggers.list`
method. Using the client method will return an array of trigger objects. The
`list` method can be run with no input, however it also takes a variety of
optional arguments to filter results. The optional arguments are as follows:

| Parameter name    | Required? | Description                                                                                                               |
| ----------------- | :-------: | ------------------------------------------------------------------------------------------------------------------------- |
| `app_id`          |    No     | A single app id. Setting this value will filter the result to only include triggers for the given app id                  |
| `is_collaborator` |    No     | A `boolean` value. If true, only triggers where user is the collaborator will be returned.                                |
| `is_owner`        |    No     | A `boolean` value. If true, only triggers created by this user will be returned.                                          |
| `is_published`    |    No     | A `boolean` value. If true, only return triggers to a published workflow. By default, all triggers will be returned.      |
| `app_ids`         |    No     | Comma-delimited list of app ids. Setting this value will filter the result to only include triggers for the given app ids |

### Usage Examples

#### Filter list by a single app_id

```ts
const client = SlackAPI(token);

const List = await client.workflows.triggers.list({
  app_id: "A013YMY7T7C",
});
```

#### Filter list by multiple app_ids

```ts
const client = SlackAPI(token);

const List = await client.workflows.triggers.list({
  app_ids: "A013YMY7T7C,A013NSFSY4B",
});
```

#### Filter list by single app_id and collaborator/owner/published status

```ts
const client = SlackAPI(token);

const List = await client.workflows.triggers.list({
  app_ids: "A013YMY7T7C,A013NSFSY4B",
  is_collaborator: true,
  is_owner: true,
  is_published: true,
});
```

## Managing trigger access

A newly created Run on Slack trigger will only be accessible to others inside a
workspace once its creator has granted access.

Use the `access` command to manage who can have access to run your triggers.
Details on granting and revoking trigger access can be found in the
[API documentation](https://api.dev.slack.com/future/triggers#manage-access)

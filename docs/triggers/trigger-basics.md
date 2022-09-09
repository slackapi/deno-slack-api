## What is a Trigger?

A Trigger is an entry point for the execution of a [Workflow](https://api.slack.com/future/workflows). Triggers define the circumstances under which a workflow will be initiated and contain contextual information that can be
passed along from the Trigger to a Workflow. Triggers come in different shapes and sizes, and there are four primary Trigger types which can be used to activate a Workflow.
These four types are [Event](./event-triggers.md), [Shortcut](./shortcut-triggers.md), [Scheduled](./scheduled-trigger.md), and [Webhook](./webhook-triggers.md). Because Triggers are the entry point of a workflow, a Workflow needs to be defined before a Trigger can be written for it. API information regarding Triggers can be found at [here](https://api.slack.com/future/triggers)

### Trigger Types
There are currently 4 supported Trigger types, [Shortcut](shortcut-trigger.md), [Webhook](webhook-trigger.md), 
[Event](event-trigger.md), and [Scheduled](scheduled-trigger.md). Each Trigger type has it's own configuration object, however all Triggers have parameters that are common to all Trigger types, these common parameters are as follows:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `type`            | Yes           | The type of Trigger (one of `shortcut`, `event`, `scheduled`, or `webhook`)|
| `name`            | Yes           | The name of the Trigger                                              |
| `description`     | No            | A description of the purpose of the Trigger                          |
| `workflow`        | Yes           | Which Workflow the Trigger connects to                               |
| `inputs`          | No            | What inputs (defined in the manifest) are passed to the Workflow      |

The unique configuration objects for each Trigger type can be found in their respective documents.

### Context Data Availability
Each Trigger type has access to a `data` context object which includes information related to the context of the Trigger activation. This `data` object can be used to define values for `inputs` and `filters` of the Trigger being activated. Each of the four Trigger types has access to separate information which is contextual based on the Trigger type. These details will be provided in the specific article for that Trigger type.


## Creating Triggers

Triggers can be created in one of two ways, either dynamically in your application at runtime, or through the Hermes CLI. More details on Trigger creation can be found in the [API documentation](https://api.dev.slack.com/future/triggers#create).
### Creating Triggers using the Hermes CLI

To create a Trigger using the Hermes CLI, create a file that contains your Trigger TypeScript format. Run the `trigger create` command with a `--trigger-def` flag pointing to your desired trigger file.

```
slack trigger create --trigger-def "path/to/trigger.ts"
```

Example trigger objects in valid typescript and JSON formats can be viewed below.

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

## Updating Triggers

Similar to creating, updating Triggers can be done through the CLI, or at runtime using the `client.workflows.triggers.update` method. Updating a Trigger takes the same Trigger object as creating one, with the addition of a `trigger_id` parameter to identify the Trigger being updated. More details on updating Triggers can be found in the [API documentation](https://api.dev.slack.com/future/triggers#update).

### Updating Triggers in the CLI

To update a Trigger using the Hermes CLI, make the desired update to your existing Trigger file. When this is done, run the `slack trigger update` command from the CLI with a `--trigger-id` flag to identify the trigger to be updated.

```
slack trigger update --trigger-id Ft123ABC --trigger-def "path/to/trigger.ts"
```

### Updating Triggers at runtime from your application

Updating uses the `client.workflows.triggers.update` method which takes in the same Trigger object as the create call as input, with the addition of a `trigger_id` parameter. 

```ts
  const client = SlackAPI(token);

  const shortcutResponse = await client.workflows.triggers.create({
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

## Deleting Triggers 

Triggers can be deleted by passing the Trigger ID. See the [API documentation](https://api.dev.slack.com/future/triggers#delete) for more details.

### Delete a Trigger at runtime

You can delete a Trigger at runtime by passing the desired `trigger_id` into `client.workflows.triggers.delete`.

```ts
client.workflows.triggers.delete({
   trigger_id: "FtABC123"
});
```

## Listing Triggers

Keeping track of active Triggers can be done using the `List` command, which will return a list of active Triggers in your workspace. This can be done either through the CLI or at runtime.

### Listing Triggers at runtime

Triggers can be listed at runtime using the `client.workflows.triggers.list` method. Using the client method will return an array of Trigger objects. The `list` method can be run with no input, however it also takes a variety of optional arguments to filter results. The optional arguments are as follows:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `app_id`         | No           | A single app id. Setting this value will filter the result to only include triggers for the given app id                           |
| `is_collaborator`| No           | A `boolean` value. If true, only triggers where user is the collaborator will be returned.                |
| `is_owner`       | No           | A `boolean` value. If true, only triggers created by this user will be returned.               |
| `is_published`   | No           | A `boolean` value. If true, only return triggers to a published workflow. By default, all triggers will be returned.               |
| `app_ids`        | No           | Comma-delimited list of app ids. Setting this value will filter the result to only include triggers for the given app ids |

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

## Managing Trigger Access

A newly created Run on Slack Trigger will only be accessible to others inside a workspace once its creator has granted access.

Use the `access` command to manage who can have access to run your Triggers. Details on granting and revoking Trigger access can be found in the [API documentation](https://api.dev.slack.com/future/triggers#manage-access)
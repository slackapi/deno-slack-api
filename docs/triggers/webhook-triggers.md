## Webhook Triggers

A Webhook Trigger is a Trigger that activates on a webhook activation in the Slack client. A Webhook Trigger
includes the common Trigger parameters along with a webhook parameter: 

| Parameter name| Required?     | Description                                                          |
| --------------|:-------------:| ---------------------------------------------------------------------|
| `inputs`        | Yes           | What inputs (defined in the manifest) are passed to the Trigger      |
| `webook`        | No            | Contains a [filter](trigger-filters.md)             |

### Webhook Configuration

A Webhook Trigger can contain an optional `webhook` configuration object which specifies a `filter`:

```ts
  webhook?: {
    filter: FilterObject;
  };
```

### Context Data Availability
Like other Trigger types, Webhook Triggers have access to context data which can be used to fill the `inputs` parameter. Unlike other Triggers, the context data available
to a webhook Trigger is not predetermined, and will depend on the information sent along with the webhook to activate the Trigger. Whatever data contained in the HTTP body of the webhook request 
is what will be available in `{{data}}`. So an HTTP request made with a body of `{"test": true}` would yield a context data object that could be referenced like `{{data.test}}`.

## Usage

### Webhook Trigger Without Filter
```ts
const trigger: Trigger = {
  type: "webhook",
  name: "Sample Webhook Trigger",
  description: "Starts the workflow to reverse a string",
  workflow: "#/workflows/reverse_workflow",
  inputs: {
    a_input: {
      value: "input",
    },
  },
};
```
### Webhook Trigger With Filter

```ts
const trigger: Trigger = {
  type: "webhook",
  name: "Sample Webhook Trigger",
  description: "Starts the workflow to reverse a string",
  workflow: "#/workflows/reverse_workflow",
  inputs: {
    a_input: {
      value: "input",
    },
  },
  webhook: {
    filter: {
      version: 1,
      root: {
        statement: "{{data.value}} == 1",
      },
    }
  }
};
```

## Example Response
```ts
{
  ok: true,
  trigger: {
    id: "Ft0141BC3F2N",
    type: "webhook",
    workflow: {
      id: "Fn0141SXKUHZ",
      workflow_id: "Wf0141SXKULB",
      callback_id: "reverse_workflow",
      title: "Reverse Workflow",
      description: "A sample workflow",
      type: "workflow",
      input_parameters: [],
      output_parameters: [],
      app_id: "A01412HH666",
      app: {
        id: "A01412HH666",
        name: "my-app (dev)",
        icons: [],
        is_workflow_app: false
      },
      date_updated: 1658339916
    },
    inputs: { a_string: { value: "string", locked: false, hidden: false } },
    outputs: {},
    date_created: 1658339927,
    date_updated: 1658339927,
    webhook_url: "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/5641534666242/5a398c41c55cbd2sd89q9dqw0qa7"
    }
}
```

## Invoking the Trigger 

Send a POST request to invoke the Trigger. Within that POST request you can send values for specific inputs.

Example POST request
```
curl \ 
-X POST "https://hooks.slack.com/triggers/T123ABC456/.../..." \
--header "Content-Type: application/json" \
--data "{"channel":"C123ABC456"}" 
```

If successful, you'll get the following response:

```
{
  "ok":true
}
```
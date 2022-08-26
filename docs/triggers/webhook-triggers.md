## Webhook Triggers

A webhook trigger is a trigger that activates on a webhook activation in the Slack client. A webhook trigger
includes the common trigger parameters along with a webhook paramater: 

| Parameter name| Required?     | Description                                                          |
| --------------|:-------------:| ---------------------------------------------------------------------|
| inputs        | Yes           | What inputs (defined in the manifest) are passed to the trigger      |
| webook        | No            | Contains a [filter](trigger-filters.md)             |

### Webhook Object

A webhook trigger can contain an optional webhook object which specifies a filter:

```ts
  webhook?: {
    filter: FilterObject;
  };
```

### Context Data Availability
Like other trigger types, webhook triggers have access to context data which can be used to fill the `inputs` parameter. Unlike other triggers, the context data available
to a webhook trigger is not predetermined, and will depend on the information sent along with the webhook to activate the trigger. Whatever data comes in the HTTP body of the webhook curl 
is what is available in {{data}}. So a curl is made with {test: true} in the HTTP body, then you could grab that with {{data.test}}. But unlike other trigger types we don't know any of that in advance.

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
        statement: "1 === 1",
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
    function: {
      id: "Fn0141SXKUHZ",
      workflow_id: "Wf0141SXKULB",
      callback_id: "reverse_workflow",
      title: "Reverse Workflow",
      description: "A sample workflow",
      type: "workflow",
      input_parameters: [ [Object], [Object], [Object] ],
      output_parameters: [],
      app_id: "A01412HH666",
      app: {
        id: "A01412HH666",
        name: "my-app (dev)",
        icons: [Object],
        is_workflow_app: false
      },
      date_updated: 1658339916
    },
    inputs: { a_string: { value: "string", locked: false, hidden: false } },
    outputs: {},
    date_created: 1658339927,
    date_updated: 1658339927,
    webhook_url: "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1140137995618/5a398c41c55cbd2a9083770d752d99a7"
    }
}
  }
}
```


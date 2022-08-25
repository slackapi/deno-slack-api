## webhook Triggers

A webhook trigger is a trigger that activates on a webhook activation in the Slack client. A webhook trigger
includes the following required attributes: 

| Parameter name| Required?     | Description                                                          |
| --------------|:-------------:| ---------------------------------------------------------------------|
| type          | Yes           | The type of trigger (shortcut)                                       |
| name          | Yes           | The name of the trigger                                              |
| description   | No            | A description of the purpose of the trigger                          |
| workflow      | Yes           | Which workflow the trigger connects to                               |
| inputs        | Yes            | What inputs (defined in the manifest) are passed to the trigger      |
| webook        | No            | Contains information about filters                                   |

### Example Shortcut Trigger

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
      
    }
  }
};
```
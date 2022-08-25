## Shortcut Triggers

A shortcut trigger is a trigger that activates when a shortcut is clicked in the Slack client. A shortcut trigger
includes the following required attributes: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| type            | Yes           | The type of trigger (shortcut)                                       |
| name            | Yes           | The name of the trigger                                              |
| description     | No            | A description of the purpose of the trigger                          |
| workflow        | Yes           | Which workflow the trigger connects to                               |
| inputs          | No            | What inputs (defined in the manifest) are passed to the trigger      |
| shortcut        | No            | Contains information about the button text of the shortcut           |

### Example Shortcut Trigger

```ts
const trigger: Trigger = {
  type: "shortcut",
  name: "Request Time off",
  description: "Starts the workflow to request time off",
  workflow: "#/workflows/reverse_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
};
```
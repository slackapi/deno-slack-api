## Scheduled triggers

A scheduled trigger is a trigger that activates on a set schedule, defined by a `schedule` parameter object. A scheduled trigger includes the common trigger attributes along with a required `schedule` parameter:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `schedule`        | No            | Contains information about the trigger schedule            |

### Schedule configuration

The `schedule` object can take the shape of either a single occurrence schedule or a recurring schedule. A single occurrence schedule is a schedule which will only activate one time, a recurring schedule sets a schedule that will repeat on the schedule.

Both Single Occurrence and Recurring Schedules have common base attributes:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `start_time`      | Yes  |An ISO 8601 date string of when this scheduled trigger should start (i.e. "2022-03-01T14:00:00Z")|
| `timezone`      | No  |A timezone string to use for scheduling (Defaults to UTC if left blank)|

A Single occurrence schedule can be created using just these two parameters or along with these parameter explicilty mentioning once frequency type, however a recurring schedule may also include the following parameters:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `end_time`      | No  |An ISO 8601 date string of when this scheduled trigger should end (i.e. "2022-03-01T14:00:00Z")|
| `occurrence_count`| No  |The maximum number of times the trigger may run (number)|
| `frequency`      | No  |The configurable frequency of when this trigger will activate|

The `frequency` object contains information on the repeating schedule for the trigger, it contains the following parameters:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| `type`      | Yes  |How often the trigger will activate|
| `on_days` | No  |An array of days of the week as capitalized strings i.e (["Monday", "Tuesday"]) the trigger should activate on (not available for daily triggers)|
| `repeats_every`      | No  |How often the trigger will repeat, respective to the frequency type (a number, i.e every `3` days)|
| `on_week_num`      | No  |The nth week of the month that a monthly schedule should activate (a number i.e. activate on the `2` week of the month|

### Data context availability

The scheduled trigger also has access to a data context object which includes information related to the context of the trigger activation. This data object can be used to fill the optional input fields of the trigger being activated. The data context parameters available to a scheduled trigger are as follows:

```ts
  'data.user_id': string, //The user_id of the user initiating the trigger.
```

The data context can be used in the input parameter as follows:

```ts
{ 
 inputs: {
  a_input_value: {
    value: "{{data.user_id}}"
  }
 }
}
```

## Usage

Below are some usage examples of `ScheduledTrigger` objects which can be used in a .ts file to create a `scheduled` trigger through the Slack CLI, alternatively this object could be passed into a
`client.workflows.triggers.create` method to achieve the same effect at runtime.

### Single occurrence schedule

```ts
const schedule: ScheduledTrigger = {
    name: "Sample",
    type: "scheduled",
    workflow: "slack#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
    },
  };
```

### Single occurrence schedule with time zone

```ts
const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      timezone: "asia/kolkata",
    },
  };
```

### Single occurrence schedule with time zone and once frequency type

```ts
const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T15:00:00Z",
      timezone: "asia/kolkata",
      frequency: {
        type: "once",
      },
    },
  };
```

### Recurring hourly schedule

```ts
const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      end_time: "2022-05-01T14:00:00Z",
      frequency: {
        type: "hourly",
        repeats_every: 2,
      },
    },
  };
```

### Recurring daily schedule

```ts
const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      end_time: "2022-05-01T14:00:00Z",
      occurrence_count: 3,
      frequency: { type: "daily" },
    },
  };
```

### Weekly recurring schedule

```ts
const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      frequency: {
        type: "weekly",
        repeats_every: 3,
        on_days: ["Friday", "Monday"],
      },
    },
  };
```

### Monthly recurring schedule

```ts
const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      frequency: {
        type: "monthly",
        repeats_every: 3,
        on_days: ["Friday"],
        on_week_num: 1,
      },
    },
  };
```

### Yearly recurring schedule

```ts
const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      frequency: {
        type: "yearly",
        repeats_every: 2,
      },
    },
  };
```

### Example response from create API

```ts
{
  ok: true,
  trigger: {
    id: "Ft01426C5L83",
    type: "scheduled",
    workflow: {
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
    date_created: 1658339926,
    date_updated: 1658339926,
    schedule: { start_time: "2099-11-17T07:35:03Z", timezone: "Asia/Kolkata" } //Should be the same as the schedule that was passed in
  }
}
```

## Scheduled Triggers

A scheduled trigger is a trigger that activates on a set schedule, defined by a schedule parameter object. A scheduled trigger includes the common trigger attributes along with a required schedule parameter: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| schedule        | No            | Contains information about the trigger schedule            |

### Schedule Object

The schedule object can take the shape of either a Single Occurrence schedule or a Recurring Schedule. A Single occurence schedule is a schedule which will only activate one time, a recurring schedule sets a schedule that will repeat on the schedule. 

Both Single Occurrence and Recurring Schedules have common base attributes:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| start_time      | Yes  |An ISO 8601 date string of when this scheduled trigger should start (i.e. "2022-03-01T14:00:00Z")|
| timezone      | No  |A timezone string to use for scheduling (Defaults to UTC if left blank)|

A Single occurrence schedule can be created using just these two parameters, however a recurring schedule may also include the following parameters: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| end_time      | No  |An ISO 8601 date string of when this scheduled trigger should end (i.e. "2022-03-01T14:00:00Z")|
| occurence_count| No  |The maximum number of times the trigger may run (number)|
| frequency      | No  |The configurable frequency of which this trigger will activate|

The frequency object contains information on the repeating schedule for the trigger, it contains the following parameters:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| type      | Yes  |How often the trigger will activate|
| on_days | No  |An array of days of the week the trigger should activate on (not available for daily triggers)|
| repeats_every      | No  |How often the trigger will repeat, respective to the frequency type|
| on_week_num      | No  |The nth week of the chosen frequency type (not available for daily, weekly, or yearly triggers)|



## Usage

### Single Occurrence Schedule
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

### Single Occurence Schedule with Time Zone
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

### Recurring Daily Schedule
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

### Weekly Recurring Schedule
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

### Monthly Recurring Schedule 
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

### Yearly Recurring Schedule 
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


### Example Response

```ts
{
  ok: true,
  trigger: {
    id: "Ft01426C5L83",
    type: "scheduled",
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
    date_created: 1658339926,
    date_updated: 1658339926,
    schedule: { start_time: "2099-11-17T07:35:03Z", timezone: "Asia/Kolkata" } //Should be the same as the schedule that was passed in
  }
}
```
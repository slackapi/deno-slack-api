import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { ScheduledTrigger } from "./scheduled.ts";
import { TriggerTypes } from "./mod.ts";

Deno.test("Scheduled Triggers can be set with a string", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: "scheduled",
    workflow: "example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled Triggers can be set with TriggerTypes object", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled Triggers can be set with just the start_time property", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled Triggers can be set just once", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      timezone: "asia/kolkata",
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled Triggers can be set to be recurring", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      end_time: "2022-05-01T14:00:00Z",
      occurence_count: 3,
      frequency: { type: "daily" },
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled Triggers can be set to be reoccur daily", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      frequency: {
        type: "daily",
        repeats_every: 3,
      },
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled Triggers can be set to be reoccur weekly", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "example",
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
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled Triggers can be set to be reoccur monthly", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "example",
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
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled Triggers can be set to be reoccur yearly", () => {
  const schedule: ScheduledTrigger = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      frequency: {
        type: "yearly",
        repeats_every: 2,
      },
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

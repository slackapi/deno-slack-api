import { assertEquals, mf } from "../../../../dev_deps.ts";
import { ScheduledTrigger } from "../scheduled.ts";
import { TriggerTypes } from "../mod.ts";
import { SlackAPI } from "../../../../mod.ts";
import { scheduled_response } from "./fixtures/sample_responses.ts";

Deno.test("Scheduled triggers can be set with a string", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
    name: "Sample",
    type: "scheduled",
    workflow: "slack#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set with TriggerTypes object", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set with just the start_time property", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "A012384#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set just once", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      timezone: "asia/kolkata",
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set just once with explicit once frequency type", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      timezone: "asia/kolkata",
      frequency: { type: "once" },
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set to be recurring hourly", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
    inputs: {},
    schedule: {
      start_time: "2022-03-01T14:00:00Z",
      end_time: "2022-05-01T14:00:00Z",
      occurrence_count: 3,
      frequency: { type: "hourly", "repeats_every": 1 },
    },
  };
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set to be recurring", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
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
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set to be reoccur daily", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
    name: "Sample",
    type: TriggerTypes.Scheduled,
    workflow: "#/workflows/example",
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

Deno.test("Scheduled triggers can be set to be reoccur weekly", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
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
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set to be reoccur monthly", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
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
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Scheduled triggers can be set to be reoccur yearly", () => {
  // deno-lint-ignore no-explicit-any
  const schedule: ScheduledTrigger<any> = {
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
  assertEquals(schedule.type, TriggerTypes.Scheduled);
});

Deno.test("Mock call for schedule", async (t) => {
  mf.install(); // mock out calls to `fetch`

  await t.step("instantiated with default API URL", async (t) => {
    const client = SlackAPI("test-token");

    await t.step("base methods exist on client", () => {
      assertEquals(typeof client.workflows.triggers.create, "function");
      assertEquals(typeof client.workflows.triggers.update, "function");
    });

    await t.step("scheduled responses", async (t) => {
      await t.step(
        "should return successful response JSON on create",
        async () => {
          mf.mock(
            "POST@/api/workflows.triggers.create",
            (req: Request) => {
              assertEquals(
                req.url,
                "https://slack.com/api/workflows.triggers.create",
              );
              return new Response(JSON.stringify(scheduled_response));
            },
          );

          const res = await client.workflows.triggers.create({
            name: "TEST",
            type: "scheduled",
            workflow: "#/workflows/reverse_workflow",
            inputs: {
              a_string: {
                value: "string",
              },
            },
            schedule: {
              timezone: "Asia/Kolkata",
              start_time: "2099-11-17T07:35:03Z",
              frequency: {
                type: "weekly",
                on_days: ["Monday", "Wednesday", "Friday"],
                repeats_every: 2,
              },
            },
          });
          assertEquals(res.ok, true);
          if (res.ok) {
            assertEquals(res.trigger, scheduled_response.trigger);
            assertEquals(
              res.trigger?.schedule,
              scheduled_response.trigger.schedule,
            );
            assertEquals(
              res.trigger?.schedule?.start_time,
              scheduled_response.trigger.schedule.start_time,
            );
            assertEquals(
              res.trigger?.schedule?.timezone,
              scheduled_response.trigger.schedule.timezone,
            );
          }

          mf.reset();
        },
      );
    });

    await t.step(
      "should return successful response JSON on update",
      async () => {
        mf.mock(
          "POST@/api/workflows.triggers.update",
          (req: Request) => {
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.update",
            );
            return new Response(JSON.stringify(scheduled_response));
          },
        );

        const res = await client.workflows.triggers.update({
          name: "TEST",
          type: "scheduled",
          trigger_id: "123",
          workflow: "#/workflows/reverse_workflow",
          inputs: {
            a_string: {
              value: "string",
            },
          },
          schedule: {
            timezone: "Asia/Kolkata",
            start_time: "2099-11-17T07:35:03Z",
            frequency: {
              type: "weekly",
              on_days: ["Monday", "Wednesday", "Friday"],
              repeats_every: 2,
            },
          },
        });
        assertEquals(res.ok, true);
        if (res.ok) {
          assertEquals(res.trigger, scheduled_response.trigger);
          assertEquals(
            res.trigger?.schedule,
            scheduled_response.trigger.schedule,
          );
          assertEquals(
            res.trigger?.schedule?.start_time,
            scheduled_response.trigger.schedule.start_time,
          );
          assertEquals(
            res.trigger?.schedule?.timezone,
            scheduled_response.trigger.schedule.timezone,
          );
        }

        mf.reset();
      },
    );
  });
});

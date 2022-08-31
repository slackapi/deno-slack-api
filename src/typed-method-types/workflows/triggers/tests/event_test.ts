import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { EventTrigger } from "../event.ts";
import { TriggerTypes } from "../mod.ts";
import { SlackAPI } from "../../../../mod.ts";
import * as mf from "https://deno.land/x/mock_fetch@0.3.0/mod.ts";
import { event_response } from "./fixtures/sample_responses.ts";

Deno.test("Event Triggers can set the type using the string", () => {
  // deno-lint-ignore no-explicit-any
  const event: EventTrigger<any> = {
    type: "event",
    name: "test",
    workflow: "#/workflows/example",
    inputs: {},
    event: {
      event_type: "slack#/events/reaction_added",
      channel_ids: ["C013ZG3K41Z"],
    },
  };
  assertEquals(event.type, TriggerTypes.Event);
});

Deno.test("Event Triggers can set the type using the TriggerTypes object", () => {
  // deno-lint-ignore no-explicit-any
  const event: EventTrigger<any> = {
    type: TriggerTypes.Event,
    name: "test",
    workflow: "#/workflows/example",
    inputs: {},
    event: {
      event_type: "slack#/events/reaction_added",
      channel_ids: ["C013ZG3K41Z"],
    },
  };
  assertEquals(event.type, TriggerTypes.Event);
});

Deno.test("Mock call for event", async (t) => {
  mf.install(); // mock out calls to `fetch`

  await t.step("instantiated with default API URL", async (t) => {
    const client = SlackAPI("test-token");

    await t.step("base methods exist on client", () => {
      assertEquals(typeof client.workflows.triggers.create, "function");
      assertEquals(typeof client.workflows.triggers.update, "function");
    });

    await t.step("apiCall method", async (t) => {
      await t.step(
        "should return successful response JSON on create",
        async () => {
          mf.mock("POST@/api/workflows.triggers.create", (req: Request) => {
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.create",
            );
            return new Response(JSON.stringify(event_response));
          });

          const res = await client.workflows.triggers.create({
            name: "TEST",
            type: "event",
            workflow: "#/workflows/reverse_workflow",
            inputs: {
              a_string: {
                value: "string",
              },
            },
            event: {
              event_type: "slack#/events/reaction_added",
              channel_ids: ["C013ZG3K41Z"],
            },
          });
          assertEquals(res.ok, true);
          if (res.ok) {
            assertEquals(res.trigger, event_response.trigger);
            assertEquals(
              res.trigger?.event_type,
              event_response.trigger.event_type,
            );
          }

          mf.reset();
        },
      );
    });

    await t.step(
      "should return successful response JSON on update",
      async () => {
        mf.mock("POST@/api/workflows.triggers.update", (req: Request) => {
          assertEquals(
            req.url,
            "https://slack.com/api/workflows.triggers.update",
          );
          return new Response(JSON.stringify(event_response));
        });

        const res = await client.workflows.triggers.update({
          name: "TEST",
          type: "event",
          trigger_id: "123",
          workflow: "#/workflows/reverse_workflow",
          inputs: {
            a_string: {
              value: "string",
            },
          },
          event: {
            event_type: "slack#/events/reaction_added",
            channel_ids: ["C013ZG3K41Z"],
          },
        });
        assertEquals(res.ok, true);
        if (res.ok) {
          assertEquals(res.trigger, event_response.trigger);
          assertEquals(
            res.trigger?.event_type,
            event_response.trigger.event_type,
          );
        }

        mf.reset();
      },
    );
  });
});

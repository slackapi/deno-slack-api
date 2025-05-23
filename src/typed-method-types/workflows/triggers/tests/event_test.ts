import { assertEquals, assertObjectMatch } from "@std/assert";
import { SlackAPI, TriggerEventTypes, TriggerTypes } from "../../../../mod.ts";
import { stubFetch } from "../../../../../testing/http.ts";
import { event_response } from "./fixtures/sample_responses.ts";
import type { ExampleWorkflow } from "./fixtures/workflows.ts";
import type { EventTrigger } from "../event.ts";

Deno.test("Event trigger type tests", async (t) => {
  await t.step("Event triggers can set the type using the string", () => {
    const event: EventTrigger<ExampleWorkflow> = {
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

  await t.step(
    "Event triggers can set the type using the TriggerTypes object",
    () => {
      const event: EventTrigger<ExampleWorkflow> = {
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
    },
  );

  await t.step(
    "shared_channel_invite_* event triggers do not require channel_ids",
    () => {
      const event: EventTrigger<ExampleWorkflow> = {
        type: TriggerTypes.Event,
        name: "test",
        workflow: "#/workflows/example",
        inputs: {},
        event: {
          event_type: TriggerEventTypes.SharedChannelInviteAccepted,
        },
      };
      assertEquals(event.type, TriggerTypes.Event);
    },
  );

  await t.step(
    "can define a channel-scoped event with `channel_ids`",
    () => {
      const event: EventTrigger<ExampleWorkflow> = {
        type: TriggerTypes.Event,
        name: "test",
        workflow: "#/workflows/example",
        inputs: {},
        event: {
          event_type: TriggerEventTypes.ReactionAdded,
          channel_ids: ["C1234"],
        },
      };
      const _event2: EventTrigger<ExampleWorkflow> = {
        type: TriggerTypes.Event,
        name: "test",
        workflow: "#/workflows/example",
        inputs: {},
        event: {
          event_type: TriggerEventTypes.ReactionAdded,
          channel_ids: ["C1234"],
          all_resources: false,
        },
      };
      assertEquals(event.type, TriggerTypes.Event);
    },
  );

  await t.step(
    "can define a channel-unscoped event with `all_resources`",
    () => {
      const event: EventTrigger<ExampleWorkflow> = {
        type: TriggerTypes.Event,
        name: "test",
        workflow: "#/workflows/example",
        inputs: {},
        event: {
          event_type: TriggerEventTypes.ReactionAdded,
          all_resources: true,
        },
      };
      assertEquals(event.type, TriggerTypes.Event);
    },
  );

  await t.step(
    "channel event types must provide one of `all_resources:true` or `channel_ids`",
    () => {
      const event: EventTrigger<ExampleWorkflow> = {
        type: TriggerTypes.Event,
        name: "test",
        workflow: "#/workflows/example",
        inputs: {},
        // @ts-expect-error requires one of `all_resources:true` or `channel_ids`
        event: {
          event_type: TriggerEventTypes.ReactionAdded,
        },
      };
      const _event2: EventTrigger<ExampleWorkflow> = {
        type: TriggerTypes.Event,
        name: "test",
        workflow: "#/workflows/example",
        inputs: {},
        // @ts-expect-error requires one of `all_resources:true` or `channel_ids`
        event: {
          event_type: TriggerEventTypes.ReactionAdded,
          all_resources: false,
        },
      };
      assertEquals(event.type, TriggerTypes.Event);
    },
  );

  await t.step(
    "channel event types must not provide both `all_resources:true` and `channel_ids`",
    () => {
      const event: EventTrigger<ExampleWorkflow> = {
        type: TriggerTypes.Event,
        name: "test",
        workflow: "#/workflows/example",
        inputs: {},
        // @ts-expect-error cannot provide both `all_resources` and `channel_ids`
        event: {
          event_type: TriggerEventTypes.ReactionAdded,
          all_resources: true,
          channel_ids: ["C1234"],
        },
      };
      assertEquals(event.type, TriggerTypes.Event);
    },
  );

  await t.step(
    "can define a workspace-scoped event with `team_ids`",
    () => {
      const event: EventTrigger<ExampleWorkflow> = {
        type: TriggerTypes.Event,
        name: "test",
        workflow: "#/workflows/example",
        inputs: {},
        event: {
          event_type: TriggerEventTypes.UserJoinedTeam,
          team_ids: ["T1234"],
        },
      };
      assertEquals(event.type, TriggerTypes.Event);
    },
  );
});

Deno.test("Mock call for event", async (t) => {
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
          using _fetchStub = stubFetch(
            (req) => {
              assertEquals(req.method, "POST");
              assertEquals(
                req.url,
                "https://slack.com/api/workflows.triggers.create",
              );
            },
            new Response(JSON.stringify(event_response)),
          );

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
            assertObjectMatch(res.trigger, event_response.trigger);
            assertEquals(
              res.trigger?.event_type,
              event_response.trigger.event_type,
            );
          }
        },
      );
    });

    await t.step(
      "should return successful response JSON on update",
      async () => {
        using _fetchStub = stubFetch(
          (req) => {
            assertEquals(req.method, "POST");
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.update",
            );
          },
          new Response(JSON.stringify(event_response)),
        );

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
          assertObjectMatch(res.trigger, event_response.trigger);
          assertEquals(
            res.trigger?.event_type,
            event_response.trigger.event_type,
          );
        }
      },
    );
  });
});

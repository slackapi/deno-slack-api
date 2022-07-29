import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { WebhookTrigger } from "./webhook.ts";
import { TriggerTypes } from "./mod.ts";
import * as mf from "https://deno.land/x/mock_fetch@0.3.0/mod.ts";
import { SlackAPI } from "../../../mod.ts";

Deno.test("Webhook Triggers can set the type using the string", () => {
  const webhook: WebhookTrigger = {
    type: "webhook",
    name: "test",
    workflow: "#/workflows/example",
    inputs: {},
  };
  assertEquals(webhook.type, TriggerTypes.Webhook);
});

Deno.test("Webhook Triggers can set the type using the TriggerTypes object", () => {
  const webhook: WebhookTrigger = {
    type: TriggerTypes.Webhook,
    name: "test",
    workflow: "#/workflows/example",
    inputs: {},
  };
  assertEquals(webhook.type, TriggerTypes.Webhook);
});

Deno.test("Webhook Triggers support an optional filter object", () => {
  const webhook: WebhookTrigger = {
    type: TriggerTypes.Webhook,
    name: "test",
    workflow: "#/workflows/example",
    inputs: {},
    webhook: {
      filter: {
        version: 1,
        root: {
          statement: "1 === 1",
        },
      },
    },
  };
  assertEquals(typeof webhook.webhook, "object");
});

Deno.test("Mock call for webhook", async (t) => {
  mf.install(); // mock out calls to `fetch`

  await t.step("instantiated with default API URL", async (t) => {
    const client = SlackAPI("test-token");

    await t.step("base methods exist on client", () => {
      assertEquals(typeof client.workflows.triggers.create, "function");
    });

    await t.step("apiCall method", async (t) => {
      await t.step("should call the default API URL", async () => {
        mf.mock("POST@/api/workflows.triggers.create", (req: Request) => {
          assertEquals(
            req.url,
            "https://slack.com/api/workflows.triggers.create",
          );
          return new Response('{"ok":true}');
        });

        await client.workflows.triggers.create({
          name: "TEST",
          type: "event",
          workflow: "#/workflows/reverse_workflow",
          inputs: {
            a_string: {
              value: "string",
            },
          },
          event: {
            event_type: "reaction_added",
            channel_ids: ["C013ZG3K41Z"],
          },
        });

        mf.reset();
      });

      await t.step(
        "should return successful response JSON on create",
        async () => {
          mf.mock("POST@/api/workflows.triggers.create", (req: Request) => {
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.create",
            );
            return new Response('{"ok":true}');
          });

          const res = await await client.workflows.triggers.create({
            name: "TEST",
            type: "webhook",
            workflow: "#/workflows/reverse_workflow",
            inputs: {
              a_string: {
                value: "string",
              },
            },
          });
          assertEquals(res.ok, true);

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
          return new Response('{"ok":true}');
        });

        const res = await await client.workflows.triggers.update({
          name: "TEST",
          type: "webhook",
          trigger_id: "123",
          workflow: "#/workflows/reverse_workflow",
          inputs: {
            a_string: {
              value: "string",
            },
          },
        });
        assertEquals(res.ok, true);

        mf.reset();
      },
    );
  });
});

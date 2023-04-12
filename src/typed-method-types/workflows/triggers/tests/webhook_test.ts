import { assertEquals, mf } from "../../../../dev_deps.ts";
import { WebhookTrigger } from "../webhook.ts";
import { TriggerTypes } from "../mod.ts";
import { SlackAPI } from "../../../../mod.ts";
import { webhook_response } from "./fixtures/sample_responses.ts";

Deno.test("Webhook triggers can set the type using the string", () => {
  // deno-lint-ignore no-explicit-any
  const webhook: WebhookTrigger<any> = {
    type: "webhook",
    name: "test",
    workflow: "#/workflows/example",
    inputs: {},
  };
  assertEquals(webhook.type, TriggerTypes.Webhook);
});

Deno.test("Webhook triggers can set the type using the TriggerTypes object", () => {
  // deno-lint-ignore no-explicit-any
  const webhook: WebhookTrigger<any> = {
    type: TriggerTypes.Webhook,
    name: "test",
    workflow: "#/workflows/example",
    inputs: {},
  };
  assertEquals(webhook.type, TriggerTypes.Webhook);
});

Deno.test("Webhook triggers support an optional filter object", () => {
  // deno-lint-ignore no-explicit-any
  const webhook: WebhookTrigger<any> = {
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

    await t.step("webhook responses", async (t) => {
      await t.step(
        "should return successful response JSON on create",
        async () => {
          mf.mock("POST@/api/workflows.triggers.create", (req: Request) => {
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.create",
            );
            return new Response(JSON.stringify(webhook_response));
          });

          const res = await client.workflows.triggers.create({
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
          if (res.ok) {
            assertEquals(res.trigger, webhook_response.trigger);
            assertEquals(
              res.trigger?.webhook_url,
              webhook_response.trigger.webhook_url,
            );
          }
          mf.reset();

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
          return new Response(JSON.stringify(webhook_response));
        });

        const res = await client.workflows.triggers.update({
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
        if (res.ok) {
          assertEquals(res.trigger, webhook_response.trigger);
          assertEquals(
            res.trigger?.webhook_url,
            webhook_response.trigger.webhook_url,
          );
        }
        mf.reset();
      },
    );
  });
});

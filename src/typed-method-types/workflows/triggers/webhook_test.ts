import { assertEquals } from "../../../dev_deps.ts";
import { WebhookTrigger } from "./webhook.ts";
import { TriggerTypes } from "./mod.ts";

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

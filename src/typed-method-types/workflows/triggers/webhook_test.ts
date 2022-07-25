import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { WebhookTrigger } from "./webhook.ts";
import { TriggerTypes } from "./mod.ts";

Deno.test("Webhook Triggers can set the type using the string", () => {
  const webhook: WebhookTrigger = {
    type: "webhook",
    name: "test",
    workflow: "example",
    inputs: {},
  };
  assertEquals(webhook.type, TriggerTypes.Webhook);
});

Deno.test("Webhook Triggers can set the type using the TriggerTypes object", () => {
  const webhook: WebhookTrigger = {
    type: TriggerTypes.Webhook,
    name: "test",
    workflow: "example",
    inputs: {},
  };
  assertEquals(webhook.type, TriggerTypes.Webhook);
});

Deno.test("Webhook Triggers support an optional filter object", () => {
  const webhook: WebhookTrigger = {
    type: TriggerTypes.Webhook,
    name: "test",
    workflow: "example",
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

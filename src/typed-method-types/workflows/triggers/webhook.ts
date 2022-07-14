import { BaseTrigger, RequiredInputs, TriggerTypes } from "./mod.ts";

export type WebhookTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof TriggerTypes.Webhook;
    webhook?: {
      // deno-lint-ignore no-explicit-any
      filter?: Record<string, any>;
    };
  };

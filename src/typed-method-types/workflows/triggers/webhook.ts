import { BaseTrigger, RequiredInputs, VALID_TRIGGERS } from "./mod.ts";

export type WebhookTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof VALID_TRIGGERS.webhook;
    webhook?: {
      // deno-lint-ignore no-explicit-any
      filter?: Record<string, any>;
    };
  };

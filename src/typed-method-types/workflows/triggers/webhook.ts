import { BaseTrigger, RequiredInputs, VALID_TRIGGERS } from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";

export type WebhookTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof VALID_TRIGGERS.webhook;
    webhook?: {
      filter?: FilterType;
    };
  };

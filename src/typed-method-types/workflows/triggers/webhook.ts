import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  InputSchema,
  TriggerTypes,
  WorkflowSchema,
} from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";

export type WebhookTrigger<WorkflowDefinition extends WorkflowSchema> =
  & BaseTrigger
  & {
    type: typeof TriggerTypes.Webhook;
    webhook?: {
      /** @description Defines the condition in which this webhook trigger should execute the Workflow */
      filter?: FilterType;
    };
    inputs?: InputSchema<WorkflowDefinition["input_parameters"]>;
  };
export type WebhookTriggerResponse<
  WorkflowDefinition extends WorkflowSchema,
> = Promise<
  WebhookResponse<WorkflowDefinition> | FailedTriggerResponse
>;

export type WebhookResponse<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseResponse
  & {
    trigger: WebhookTriggerObject<WorkflowDefinition>;
  };

export type WebhookTriggerObject<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<WorkflowDefinition>
  & {
    webhook: string;
    webhook_url: string;
  };

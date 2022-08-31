import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  TriggerTypes,
  WorkflowSchema,
} from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";

export type WebhookTrigger<WorkflowDefinition extends WorkflowSchema> =
  & BaseTrigger<WorkflowDefinition>
  & {
    type: typeof TriggerTypes.Webhook;
    webhook?: {
      /** @description Defines the condition in which this webhook trigger should execute the Workflow */
      filter?: FilterType;
    };
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
    trigger: WebhookTriggerResponseObject<WorkflowDefinition>;
  };

export type WebhookTriggerResponseObject<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<WorkflowDefinition>
  & {
    /**
     * @description The webhook object used to define the webhook trigger
     */
    webhook?: string;
    /**
     * @description The URL used to trip the webhook trigger
     */
    webhook_url?: string;
  };

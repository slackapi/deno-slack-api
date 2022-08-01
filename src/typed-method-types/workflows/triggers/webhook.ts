import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  RequiredInputs,
  TriggerTypes,
  WorkflowSchema,
} from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";

export type WebhookTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof TriggerTypes.Webhook;
    webhook?: {
      /** @description Defines the condition in which this webhook trigger should execute the Workflow */
      filter?: FilterType;
    };
  };
export type WebhookTriggerResponse<
  TriggerDefinition extends WebhookTrigger,
  WorkflowDefinition extends WorkflowSchema,
> = Promise<
  WebhookResponse<TriggerDefinition, WorkflowDefinition> | FailedTriggerResponse
>;

export type WebhookResponse<
  TriggerDefinition extends WebhookTrigger,
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseResponse
  & {
    trigger: WebhookTriggerObject<TriggerDefinition, WorkflowDefinition>;
  };

export type WebhookTriggerObject<
  TriggerDefinition extends WebhookTrigger,
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<TriggerDefinition, WorkflowDefinition>
  & {
    webhook: TriggerDefinition["webhook"];
    webhook_url: string;
  };

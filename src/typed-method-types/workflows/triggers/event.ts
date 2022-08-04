import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  InputSchema,
  TriggerTypes,
  WorkflowSchema,
} from "./mod.ts";

type BaseEvent = {
  /** @description The type of event */
  event_type: string;
  channel_ids?: string[];
  // deno-lint-ignore no-explicit-any
  filter?: Record<string, any>;
  team_ids?: string[];
};

type MetadataEvents = {
  metadata_event_type: string;
} & BaseEvent;

export type EventTrigger<WorkflowDefinition extends WorkflowSchema> =
  & BaseTrigger
  & {
    type: typeof TriggerTypes.Event;
    /** @description The payload object for event triggers */
    event: BaseEvent | MetadataEvents;
    inputs: InputSchema<WorkflowDefinition["input_parameters"]>;
  };
export type EventTriggerResponse<
  WorkflowDefinition extends WorkflowSchema,
> = Promise<
  EventResponse<WorkflowDefinition> | FailedTriggerResponse
>;
export type EventResponse<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseResponse
  & {
    trigger: EventTriggerObject<WorkflowDefinition>;
  };

export type EventTriggerObject<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<WorkflowDefinition>
  & {
    event_type: string;
  };

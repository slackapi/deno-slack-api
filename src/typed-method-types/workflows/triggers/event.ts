import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  RequiredInputs,
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

export type EventTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof TriggerTypes.Event;
    /** @description The payload object for event triggers */
    event: BaseEvent | MetadataEvents;
  };
export type EventTriggerResponse<
  TriggerDefinition extends EventTrigger,
  WorkflowDefinition extends WorkflowSchema,
> = Promise<
  EventResponse<TriggerDefinition, WorkflowDefinition> | FailedTriggerResponse
>;
export type EventResponse<
  TriggerDefinition extends EventTrigger,
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseResponse
  & {
    trigger: EventTriggerObject<TriggerDefinition, WorkflowDefinition>;
  };

export type EventTriggerObject<
  TriggerDefinition extends EventTrigger,
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<TriggerDefinition, WorkflowDefinition>
  & {
    event_type: TriggerDefinition["event"]["event_type"];
  };

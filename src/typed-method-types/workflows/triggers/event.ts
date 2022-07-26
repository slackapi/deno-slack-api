import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  RequiredInputs,
  TriggerTypes,
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
export type EventTriggerResponse<TriggerDefinition extends EventTrigger> =
  Promise<
    EventResponse<TriggerDefinition> | FailedTriggerResponse
  >;
export type EventResponse<TriggerDefinition extends EventTrigger> =
  & BaseResponse
  & {
    trigger:
      & BaseTriggerResponse<TriggerDefinition>
      & {
        event_type: TriggerDefinition["event"]["event_type"];
      };
  };

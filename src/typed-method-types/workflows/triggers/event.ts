import { BaseTrigger, RequiredInputs, VALID_TRIGGERS } from "./mod.ts";

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
    type: typeof VALID_TRIGGERS.event;
    // TODO: Figure out event typing
    /** @description The payload object for event triggers */
    event: BaseEvent | MetadataEvents;
  };

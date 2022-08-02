import { BaseTrigger, RequiredInputs, TriggerTypes } from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";
import { ObjectValueUnion } from "../../../type-helpers.ts";

export const MetadataEventTypes = {
  MessageMetadataPosted: "slack#/events/message_metadata_posted", //channel
  // MessageMetadataAdded: "slack#/events/message_metadata_added",
  // MessageMetadataDeleted: "slack#/events/message_metadata_deleted",
} as const;

export const TriggerEventTypes = {
  ChannelCreated: "slack#/events/channel_created", //workspace
  DndUpdated: "slack#/events/dnd_updated", //workspace
  ReactionAdded: "slack#/events/reaction_added", //channel
  UserJoinedChannel: "slack#/events/user_joined_channel", //channel
  UserJoinedTeam: "slack#/events/user_joined_team", //workspace
  ...MetadataEventTypes,
} as const;

type TriggerEventTypeValues = ObjectValueUnion<typeof TriggerEventTypes>;
type MetadataEventTypeValues = ObjectValueUnion<typeof MetadataEventTypes>;

type BaseEvent = {
  /** @description The type of event */
  event_type: Exclude<TriggerEventTypeValues, MetadataEventTypeValues>;
  filter?: FilterType;
  channel_ids?: string[];
  team_ids?: string[];
  metadata_event_type?: never;
};

type MetadataEvents = {
  /** @description The type of event */
  event_type: Extract<TriggerEventTypeValues, MetadataEventTypeValues>;
  /** @description User defined description for the event type */
  metadata_event_type: string; // TODO: Is this just a normal string? Is it required?
} & Omit<BaseEvent, "event_type" | "metadata_event_type">;

export type EventTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof TriggerTypes.Event;
    /** @description The payload object for event triggers */
    event: BaseEvent | MetadataEvents;
  };

import { BaseTrigger, RequiredInputs, VALID_TRIGGERS } from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";

// TODO: Should this be imported into the SDK?
const TriggerEventTypes = {
  ReactionAdded: "slack#/events/reaction_added",
  MessageMetadataPosted: "slack#/events/message_metadata_posted",
  UserJoinedChannel: "slack#/events/user_joined_channel",
  UserJoinedTeam: "slack#/events/user_joined_team",
  ChannelCreated: "slack#/events/channel_created",
  DndUpdated: "slack#/events/dnd_updated",
} as const;

type TriggerEventTypeValues =
  typeof TriggerEventTypes[keyof typeof TriggerEventTypes];

// TODO: How far is support for these?
type MetadataEventTypes = // | typeof TriggerEventTypes.MessageMetadataAdded
  // | typeof TriggerEventTypes.MessageMetadataDeleted
  typeof TriggerEventTypes.MessageMetadataPosted;

type BaseEvent = {
  /** @description The type of event */
  event_type: Exclude<TriggerEventTypeValues, MetadataEventTypes>;
  filter?: FilterType;
  channel_ids?: string[];
  team_ids?: string[];
};

type MetadataEvents = {
  /** @description The type of event */
  event_type: Extract<TriggerEventTypeValues, MetadataEventTypes>;
  metadata_event_type: string; // TODO: Is this just a normal string? Is it required?
} & Omit<BaseEvent, "event_type">;

export type EventTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof VALID_TRIGGERS.event;
    inputs: BaseTrigger["inputs"];
    // TODO: Figure out event typing
    /** @description The payload object for event triggers */
    event: BaseEvent | MetadataEvents;
  };

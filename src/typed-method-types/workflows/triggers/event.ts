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

type MessageMetadataTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    "MessageMetadataPosted" /* | "MessageMetadataAdded" | "MessageMetadataDeleted" */
  >
>;
type ChannelTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    "ReactionAdded" | "UserJoinedChannel" | "MessageMetadataPosted"
  >
>;
type WorkspaceTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    "UserJoinedTeam" | "ChannelCreated" | "DndUpdated"
  >
>;

type BaseChannelEvent =
  & (MetadataChannelEvent | ChannelEvent)
  & {
    /** @description The channel id's that this event listens on */
    channel_ids?: string[];
  };

type ChannelEvent = BaseEvent & {
  /** @description The type of event */
  event_type: Exclude<ChannelTypes, MessageMetadataTypes>;
};
type MetadataChannelEvent =
  & {
    /** @description The type of event */
    event_type: Extract<ChannelTypes, MessageMetadataTypes>;
  }
  & MetadataEvents
  & Pick<BaseEvent, "filter">;

type BaseWorkspaceEvent =
  //Currently there are no metadata workspace events supported, if we support in the future change to "MetadataWorkspaceEvent | WorkspaceEvent"
  & (WorkspaceEvent)
  & {
    /** @description The team id's that this event listens on */
    team_ids?: string[];
  };

type WorkspaceEvent = BaseEvent & {
  /** @description The type of event */
  event_type: WorkspaceTypes;
};

type MetadataWorkspaceEvent =
  & {
    /** @description The type of event */
    event_type: Extract<WorkspaceTypes, MessageMetadataTypes>;
  }
  & MetadataEvents
  & Pick<BaseEvent, "filter">;

type BaseEvent = {
  filter?: FilterType;
  metadata_event_type?: never;
};

type MetadataEvents = {
  /** @description User defined description for the event type */
  metadata_event_type: string;
};
export type EventTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof TriggerTypes.Event;
    /** @description The payload object for event triggers */
    event: BaseChannelEvent | BaseWorkspaceEvent;
  };

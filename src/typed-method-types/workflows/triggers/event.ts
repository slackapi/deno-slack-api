import { BaseTrigger, RequiredInputs, TriggerTypes } from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";
import { ObjectValueUnion } from "../../../type-helpers.ts";
import { TriggerEventTypes } from "./trigger_event_types.ts";

// Utility type for the array types which requires minumum one subtype in it.
type PopulatedArray<T> = [T, ...T[]];

type MessageMetadataTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    "MessageMetadataPosted" /* | "MessageMetadataAdded" | "MessageMetadataDeleted" */
  >
>;

type FilterRequiredTypes = ObjectValueUnion<
  Pick<typeof TriggerEventTypes, "MessagePosted">
>;
type ChannelTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    | "ReactionAdded"
    | "UserJoinedChannel"
    | "MessageMetadataPosted"
    | "AppMention"
    | "ChannelShared"
    | "ChannelUnshared"
    | "MemberLeftChannel"
    | "PinAdded"
    | "PinRemoved"
    | "ReactionRemoved"
    | "SharedChannelInviteAccepted"
    | "SharedChannelInviteApproved"
    | "SharedChannelInviteDeclined"
    | "SharedChannelInviteReceived"
  >
>;
type WorkspaceTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    | "UserJoinedTeam"
    | "ChannelCreated"
    | "DndUpdated"
    | "ChannelArchive"
    | "ChannelDeleted"
    | "ChannelRename"
    | "ChannelUnarchive"
    | "EmojiChanged"
  >
>;

type BaseChannelEvent =
  & (MetadataChannelEvent | ChannelEvent | MessagePostedEvent)
  & {
    /** @description The channel id's that this event listens on */
    channel_ids: PopulatedArray<string>;
  };

type MessagePostedEvent = MessageEvent & {
  event_type: FilterRequiredTypes;
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
  & WorkspaceEvent
  & {
    /** @description The team id's that this event listens on */
    team_ids?: PopulatedArray<string>;
  };

type WorkspaceEvent = BaseEvent & {
  /** @description The type of event */
  event_type: WorkspaceTypes;
};

type BaseEvent = {
  filter?: FilterType;
  metadata_event_type?: never;
};

type MessageEvent = {
  filter: FilterType;
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

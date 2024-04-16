import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  TriggerTypes,
  WorkflowSchema,
} from "./mod.ts";
import { FilterType } from "./trigger-filter.ts";
import { ObjectValueUnion, PopulatedArray } from "../../../type-helpers.ts";
import { TriggerEventTypes } from "./trigger-event-types.ts";

type MessageMetadataTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    "MessageMetadataPosted" /* | "MessageMetadataAdded" | "MessageMetadataDeleted" */
  >
>;

type MessagePostedEventType = ObjectValueUnion<
  Pick<typeof TriggerEventTypes, "MessagePosted">
>;

type ChannelTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    | "AppMentioned"
    | "ChannelShared"
    | "ChannelUnshared"
    | "MessageMetadataPosted"
    | "PinAdded"
    | "PinRemoved"
    | "ReactionAdded"
    | "ReactionRemoved"
    | "UserJoinedChannel"
    | "UserLeftChannel"
  >
>;

type WorkspaceTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    | "ChannelArchived"
    | "ChannelCreated"
    | "ChannelDeleted"
    | "ChannelRenamed"
    | "ChannelUnarchived"
    | "DndUpdated"
    | "EmojiChanged"
    | "SharedChannelInviteAccepted"
    | "SharedChannelInviteApproved"
    | "SharedChannelInviteDeclined"
    | "SharedChannelInviteReceived"
    | "UserJoinedTeam"
  >
>;

type ChannelEvents =
  & (ChannelEvent | MetadataChannelEvent | MessagePostedEvent) // controls `event_type` and `filter`
  & (ChannelUnscopedEvent | ChannelScopedEvent); // controls event scoping: `channel_ids` and `all_resources`

/**
 * Event that is unscoped and not limited to a specific channel
 */
type ChannelUnscopedEvent = {
  /** @description If set to `true`, will trigger in all channels. `false` by default and mutually exclusive with `channel_ids`. */
  all_resources: true;
  /** @description The channel ids that this event listens on. Mutually exclusive with `all_resources: true`. */
  channel_ids?: never;
};

/**
 * Event that is scoped to specific channel ID(s)
 */
type ChannelScopedEvent = {
  /** @description The channel ids that this event listens on. Mutually exclusive with `all_resources: true`. */
  channel_ids: PopulatedArray<string>;
  /** @description If set to `true`, will trigger in all channels. `false` by default and mutually exclusive with `channel_ids`. */
  all_resources?: false;
};

type ChannelEvent = BaseEvent & {
  /** @description The type of event */
  event_type: Exclude<ChannelTypes, MessageMetadataTypes>;
};

type MetadataChannelEvent = ChannelEvent & {
  /** @description User defined description for the metadata event type */
  metadata_event_type: string;
};

// The only event that currently requires a filter
type MessagePostedEvent =
  & BaseEvent
  & Required<Pick<BaseEvent, "filter">>
  & {
    /** @description The type of event */
    event_type: MessagePostedEventType;
  };

type WorkspaceEvents = BaseEvent & {
  /** @description The type of event */
  event_type: WorkspaceTypes;
  /** @description The team IDs that this event should listen on. Must be included when used on Enterprise Grid and working with workspace-based event triggers. */
  team_ids?: PopulatedArray<string>;
};

type BaseEvent = {
  // TODO: (breaking change) filter should not be optional here, but explicitly chosen for the events that accept it;
  // could use similar technique as we do to manage messagemetadata-specific properties (above)
  /** @description Defines the condition in which this event trigger should execute the workflow */
  filter?: FilterType;
  // deno-lint-ignore no-explicit-any
} & Record<string, any>;

export type EventTrigger<WorkflowDefinition extends WorkflowSchema> =
  & BaseTrigger<WorkflowDefinition>
  & {
    type: typeof TriggerTypes.Event;
    /** @description The payload object for event triggers */
    event: ChannelEvents | WorkspaceEvents;
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
    trigger: EventTriggerResponseObject<WorkflowDefinition>;
  };

export type EventTriggerResponseObject<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<WorkflowDefinition>
  & {
    /**
     * @description The type of event specified for the event trigger
     */
    event_type?: string;
  }
  // deno-lint-ignore no-explicit-any
  & Record<string, any>;

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
    | "SharedChannelInviteAccepted"
    | "SharedChannelInviteApproved"
    | "SharedChannelInviteDeclined"
    | "SharedChannelInviteReceived"
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
    | "UserJoinedTeam"
  >
>;

type ChannelEvents =
  & (ChannelEvent | MetadataChannelEvent | MessagePostedEvent)
  & {
    /** @description The channel id's that this event listens on */
    channel_ids: PopulatedArray<string>;
    // deno-lint-ignore no-explicit-any
    [otherOptions: string]: any;
  };

type ChannelEvent = BaseEvent & {
  /** @description The type of event */
  event_type: Exclude<ChannelTypes, MessageMetadataTypes>;
};

type MetadataChannelEvent =
  & BaseEvent
  & {
    /** @description The type of event */
    event_type: Extract<ChannelTypes, MessageMetadataTypes>;
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

type WorkspaceEvents =
  & BaseWorkspaceEvent
  & {
    /** @description The team id's that this event listens on */
    team_ids?: PopulatedArray<string>;
    // deno-lint-ignore no-explicit-any
    [otherOptions: string]: any;
  };

type BaseWorkspaceEvent = BaseEvent & {
  /** @description The type of event */
  event_type: WorkspaceTypes;
};

type BaseEvent = {
  /** @description Defines the condition in which this event trigger should execute the Workflow */
  filter?: FilterType;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

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
    // deno-lint-ignore no-explicit-any
    [otherOptions: string]: any;
  };

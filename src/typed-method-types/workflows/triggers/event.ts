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
    "message_metadata_posted" /* | "message_metadata_added" | "message_metadata_removed" */
  >
>;

type MessagePostedEventType = ObjectValueUnion<
  Pick<typeof TriggerEventTypes, "message_posted">
>;

type ChannelTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    | "app_mentioned"
    | "channel_shared"
    | "channel_unshared"
    | "message_metadata_posted"
    | "pin_added"
    | "pin_removed"
    | "reaction_added"
    | "reaction_removed"
    | "shared_channel_invite_accepted"
    | "shared_channel_invite_approved"
    | "shared_channel_invite_declined"
    | "shared_channel_invite_received"
    | "user_joined_channel"
    | "user_left_channel"
  >
>;

type WorkspaceTypes = ObjectValueUnion<
  Pick<
    typeof TriggerEventTypes,
    | "channel_archived"
    | "channel_created"
    | "channel_deleted"
    | "channel_renamed"
    | "channel_unarchived"
    | "dnd_updated"
    | "emoji_changed"
    | "user_joined_team"
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
  /** @description Defines the condition in which this event trigger should execute the workflow */
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

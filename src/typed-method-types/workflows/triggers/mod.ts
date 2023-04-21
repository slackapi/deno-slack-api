import {
  BaseMethodArgs,
  BaseResponse,
  CursorPaginationArgs,
  CursorPaginationResponse,
} from "../../../types.ts";
import { InputParameterSchema, WorkflowInputs } from "./inputs.ts";
import {
  EventTrigger,
  EventTriggerResponse,
  EventTriggerResponseObject,
} from "./event.ts";
import {
  ScheduledTrigger,
  ScheduledTriggerResponse,
  ScheduledTriggerResponseObject,
} from "./scheduled.ts";
import {
  ShortcutTrigger,
  ShortcutTriggerResponse,
  ShortcutTriggerResponseObject,
} from "./shortcut.ts";
import {
  WebhookTrigger,
  WebhookTriggerResponse,
  WebhookTriggerResponseObject,
} from "./webhook.ts";
import { ShortcutTriggerContextData } from "./shortcut-data.ts";
import { ScheduledTriggerContextData } from "./scheduled-data.ts";
import { EventTriggerContextData } from "./event-data/mod.ts";

/**
 * @enum {string} Enumerates valid trigger types.
 */
export const TriggerTypes = {
  /**
   * An event trigger type specifier, for invoking a workflow when a specific event happens in Slack.
   */
  Event: "event",
  /**
   * A scheduled trigger type specifier, for invoking a workflow at a specific time interval.
   */
  Scheduled: "scheduled",
  /**
   * A shortcut, or link, trigger type specifier, for invoking a workflow from a conversation in Slack.
   */
  Shortcut: "shortcut",
  /**
   * A webhook trigger type specifier, for invoking a workflow when a specific URL receives an HTTP POST request.
   */
  Webhook: "webhook",
} as const;

/**
 * Data available on different triggers for use in workflow inputs.
 */
export const TriggerContextData = {
  /**
   * Data available on scheduled triggers for use in workflow inputs.
   */
  Scheduled: ScheduledTriggerContextData,
  /**
   * Data available on shortcut, or link, triggers for use in workflow inputs.
   */
  Shortcut: ShortcutTriggerContextData,
  /**
   * Data available from the variety of different eventr triggers for use in workflow inputs.
   */
  Event: EventTriggerContextData,
} as const;

// Set defaults for any direct uses of this type
export type NO_GENERIC_TITLE = "#no-generic";
type DEFAULT_WORKFLOW_TYPE = { title: NO_GENERIC_TITLE };

type WorkflowStringFormat<AcceptedString extends string | undefined> =
  AcceptedString extends string ? `${string}#/workflows/${AcceptedString}`
    : `${string}#/workflows/${string}`;

export type BaseTrigger<WorkflowDefinition extends WorkflowSchema> = {
  /** @description The type of trigger */
  type: string;
  /** @description The workflow that the trigger initiates */
  workflow: WorkflowStringFormat<WorkflowDefinition["callback_id"]>;
  /** @description The name of the trigger */
  name: string;
  /** @description The description of the trigger */
  description?: string;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
} & WorkflowInputs<WorkflowDefinition>;

export type WorkflowSchema = {
  callback_id?: string;
  description?: string;
  input_parameters?: InputParameterSchema;
  // deno-lint-ignore no-explicit-any
  output_parameters?: Record<string, any>;
  title: string;
};

type ResponseTypes<
  WorkflowDefinition extends WorkflowSchema,
> =
  & ShortcutTriggerResponse<WorkflowDefinition>
  & EventTriggerResponse<WorkflowDefinition>
  & ScheduledTriggerResponse<WorkflowDefinition>
  & WebhookTriggerResponse<WorkflowDefinition>;

/** @description Response object content for delete method */
type DeleteResponse = {
  ok: true;
};

type DeleteTriggerResponse = Promise<
  DeleteResponse | FailedTriggerResponse
>;

type ListArgs = {
  /** @description Lists triggers only if they owned by the caller */
  is_owner?: boolean;
  /** @description Lists triggers only if they have been published */
  is_published?: boolean;
};

type ValidTriggerResponseObjects =
  | ShortcutTriggerResponseObject<WorkflowSchema>
  | EventTriggerResponseObject<WorkflowSchema>
  | ScheduledTriggerResponseObject<WorkflowSchema>
  | WebhookTriggerResponseObject<WorkflowSchema>;

type ListResponse = CursorPaginationResponse & {
  ok: true;
  /** @description List of triggers in the workspace */
  triggers: ValidTriggerResponseObjects[];
};

type ListTriggerResponse = Promise<
  ListResponse | FailedListTriggerResponse
>;

type FailedListTriggerResponse = BaseResponse & CursorPaginationResponse & {
  ok: false;
  /** @description no triggers are returned on a failed response */
  triggers?: never;
};

export type FailedTriggerResponse = BaseResponse & {
  ok: false;
  /** @description no trigger is returned on a failed response */
  trigger?: never;
};

type TriggerIdType = {
  /** @description The id of a specified trigger */
  trigger_id: string;
};

export type ValidTriggerTypes<
  WorkflowDefinition extends WorkflowSchema = DEFAULT_WORKFLOW_TYPE,
> =
  | EventTrigger<WorkflowDefinition>
  | ScheduledTrigger<WorkflowDefinition>
  | ShortcutTrigger<WorkflowDefinition>
  | WebhookTrigger<WorkflowDefinition>;

/** @description Function type for create method */
type CreateType = {
  <WorkflowDefinition extends WorkflowSchema = DEFAULT_WORKFLOW_TYPE>(
    args: BaseMethodArgs & ValidTriggerTypes<WorkflowDefinition>,
  ): ResponseTypes<WorkflowDefinition>;
};

/** @description Function type for update method */
type UpdateType = {
  <WorkflowDefinition extends WorkflowSchema = DEFAULT_WORKFLOW_TYPE>(
    args:
      & BaseMethodArgs
      & ValidTriggerTypes<WorkflowDefinition>
      & TriggerIdType,
  ): ResponseTypes<WorkflowDefinition>;
};

export type TypedWorkflowsTriggersMethodTypes = {
  /** @description Method to create a new trigger */
  create: CreateType;
  /** @description Method to update an existing trigger identified with trigger_id */
  update: UpdateType;
  /** @description Method to delete an existing trigger identified with trigger_id */
  delete: (
    args: BaseMethodArgs & TriggerIdType,
  ) => DeleteTriggerResponse;
  /** @description Method to list existing triggers in the workspace */
  list: (
    args?: BaseMethodArgs & CursorPaginationArgs & ListArgs,
  ) => ListTriggerResponse;
};

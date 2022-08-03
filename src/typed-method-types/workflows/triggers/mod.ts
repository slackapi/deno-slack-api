import { BaseMethodArgs, BaseResponse } from "../../../types.ts";
import {
  EventTrigger,
  EventTriggerObject,
  EventTriggerResponse,
} from "./event.ts";
import {
  ScheduledTrigger,
  ScheduledTriggerObject,
  ScheduledTriggerResponse,
} from "./scheduled.ts";
import {
  ShortcutTrigger,
  ShortcutTriggerObject,
  ShortcutTriggerResponse,
} from "./shortcut.ts";
import {
  WebhookTrigger,
  WebhookTriggerObject,
  WebhookTriggerResponse,
} from "./webhook.ts";

export const TriggerTypes = {
  Event: "event",
  Scheduled: "scheduled",
  Shortcut: "shortcut",
  Webhook: "webhook",
} as const;

type WorkflowInput = {
  // deno-lint-ignore no-explicit-any
  value: any;
};

type ResponseTypes<
  TriggerDefinition extends ValidTriggerTypes,
  WorkflowDefinition extends WorkflowSchema,
> = TriggerDefinition extends ShortcutTrigger
  ? ShortcutTriggerResponse<TriggerDefinition, WorkflowDefinition>
  : TriggerDefinition extends EventTrigger
    ? EventTriggerResponse<TriggerDefinition, WorkflowDefinition>
  : TriggerDefinition extends ScheduledTrigger
    ? ScheduledTriggerResponse<TriggerDefinition, WorkflowDefinition>
  : TriggerDefinition extends WebhookTrigger
    ? WebhookTriggerResponse<TriggerDefinition, WorkflowDefinition>
  : BaseResponse;

type WorkflowStringFormat = `${string}#/workflows/${string}`;

export type BaseTrigger = {
  /** @description The type of trigger */
  type: string;
  /** @description The workflow that the trigger initiates */
  workflow: WorkflowStringFormat;
  /** @description The inputs provided to the workflow */
  inputs?: Record<string, WorkflowInput>;
  /** @description The name of the trigger */
  name: string;
  /** @description The description of the trigger */
  description?: string;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

// A helper to make sure inputs are passed. Required for automated triggers
export type RequiredInputs = Required<
  Pick<BaseTrigger, "inputs">
>;

export type WorkflowSchema = {
  callback_id: string;
  description?: string;
  // deno-lint-ignore no-explicit-any
  input_parameters?: Record<string, any>;
  // deno-lint-ignore no-explicit-any
  output_parameters?: Record<string, any>;
  title: string;
};

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

type ValidTriggerObjects =
  | ShortcutTriggerObject<ShortcutTrigger, WorkflowSchema>
  | EventTriggerObject<EventTrigger, WorkflowSchema>
  | ScheduledTriggerObject<ScheduledTrigger, WorkflowSchema>
  | WebhookTriggerObject<WebhookTrigger, WorkflowSchema>;

type ListResponse = {
  ok: true;
  triggers: ValidTriggerObjects[];
};

type ListTriggerResponse = Promise<
  ListResponse | FailedTriggerResponse
>;

export type FailedTriggerResponse = BaseResponse & {
  ok: false;
  /** @description no trigger is returned on a failed response */
  trigger?: never;
};

export type TriggerIdType = {
  /** @description The id of a specified trigger */
  trigger_id: string;
};

export type ValidTriggerTypes =
  | EventTrigger
  | ScheduledTrigger
  | ShortcutTrigger
  | WebhookTrigger;

/** @description Function type for create method */
type CreateType = {
  <
    WorkflowDefinition extends WorkflowSchema,
    TriggerDefinition extends ValidTriggerTypes,
  >(
    args: BaseMethodArgs & TriggerDefinition,
  ): ResponseTypes<TriggerDefinition, WorkflowDefinition>;
};

/** @description Function type for update method */
type UpdateType = {
  <
    WorkflowDefinition extends WorkflowSchema,
    TriggerDefinition extends ValidTriggerTypes,
  >(
    args: BaseMethodArgs & TriggerDefinition & TriggerIdType,
  ): ResponseTypes<TriggerDefinition, WorkflowDefinition>;
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
    args?: BaseMethodArgs & ListArgs,
  ) => ListTriggerResponse;
};

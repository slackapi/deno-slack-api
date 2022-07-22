import {
  BaseMethodArgs,
  BaseResponse,
  UpdateMethodArgs,
} from "../../../types.ts";
import { EventResponse, EventTrigger, EventTriggerResponse } from "./event.ts";
import {
  ScheduledResponse,
  ScheduledTrigger,
  ScheduledTriggerResponse,
} from "./scheduled.ts";
import {
  ShortcutResponse,
  ShortcutTrigger,
  ShortcutTriggerResponse,
} from "./shortcut.ts";
import {
  WebhookResponse,
  WebhookTrigger,
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

export type BaseTrigger = {
  /** @description The type of trigger */
  type: typeof TriggerTypes[keyof typeof TriggerTypes];
  /** @description The workflow that the trigger initiates */
  workflow: string;
  /** @description The inputs provided to the workflow */
  inputs?: Record<string, WorkflowInput>;
  /** @description The name of the trigger */
  name: string;
  /** @description The description of the trigger */
  description?: string;
};

export type TriggerIdType = {
  /** @description The id of a specified trigger */
  trigger_id: string | undefined;
};

// A helper to make sure inputs are passed. Required for automated triggers
export type RequiredInputs = Required<Pick<BaseTrigger, "inputs">>;

export type FailedTriggerResponse = BaseResponse & {
  ok: false;
  /** @description no trigger is returned on a failed response */
  trigger?: never;
};

export type ValidTriggerTypes =
  | EventTrigger
  | ScheduledTrigger
  | ShortcutTrigger
  | WebhookTrigger;

/** @description Overload function type for create method */
type createType = {
  (args: BaseMethodArgs & ScheduledTrigger): ScheduledTriggerResponse;
  (args: BaseMethodArgs & ShortcutTrigger): ShortcutTriggerResponse;
  (args: BaseMethodArgs & WebhookTrigger): WebhookTriggerResponse;
  (args: BaseMethodArgs & EventTrigger): EventTriggerResponse;
};

/** @description Overload function type for update method */
type updateType = {
  (args: UpdateMethodArgs & ScheduledTrigger): ScheduledTriggerResponse;
  (args: UpdateMethodArgs & ShortcutTrigger): ShortcutTriggerResponse;
  (args: UpdateMethodArgs & WebhookTrigger): WebhookTriggerResponse;
  (args: UpdateMethodArgs & EventTrigger): EventTriggerResponse;
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

type ValidResponseTypes =
  | EventResponse
  | ScheduledResponse
  | WebhookResponse
  | ShortcutResponse;

type ListResponse = {
  triggers: ValidResponseTypes[];
};

type ListTriggerResponse = Promise<
  ListResponse | FailedTriggerResponse
>;

export type TypedWorkflowsTriggersMethodTypes = {
  /** @description Method to create a new trigger */
  create: createType;
  /** @description Method to update an existing trigger identified with trigger_id */
  update: updateType;
  /** @description Method to delete an existing trigger identified with trigger_id */
  delete: (
    args: BaseMethodArgs & TriggerIdType,
  ) => DeleteTriggerResponse;
  /** @description Method to list existing triggers in the workspace */
  list: (
    args?: BaseMethodArgs & ListArgs,
  ) => ListTriggerResponse;
};

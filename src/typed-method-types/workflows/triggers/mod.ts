import { BaseMethodArgs, BaseResponse } from "../../../types.ts";
import { EventTrigger } from "./event.ts";
import { ScheduledTrigger } from "./scheduled.ts";
import { ShortcutTrigger } from "./shortcut.ts";
import { WebhookTrigger } from "./webhook.ts";

// TODO: Export to SDK
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
  trigger_id: string;
};

// A helper to make sure inputs are passed. Required for automated triggers
export type RequiredInputs = Required<Pick<BaseTrigger, "inputs">>;

type ValidTriggerTypes =
  | EventTrigger
  | ScheduledTrigger
  | ShortcutTrigger
  | WebhookTrigger;

type BaseTriggerResponse = Promise<BaseResponse>;
type TriggerResponse = BaseTriggerResponse;
type ListArgs = {
  /** @description Lists triggers only if they owned by the caller */
  is_owner?: boolean;
  /** @description Lists triggers only if they have been published */
  is_published?: boolean;
};

export type TypedWorkflowsTriggersMethodTypes = {
  /** @description Create a new trigger with a specified type */
  create: (
    args: BaseMethodArgs & ValidTriggerTypes,
  ) => TriggerResponse;
  /** @description Updates an existing trigger identified with trigger_id */
  update: (
    args: BaseMethodArgs & TriggerIdType & ValidTriggerTypes,
  ) => TriggerResponse;
  /** @description Deletes an existing trigger identified with trigger_id */
  delete: (
    args: BaseMethodArgs & TriggerIdType,
  ) => TriggerResponse;
  /** @description Returns a list of triggers in the workspace */
  list: (
    args?: BaseMethodArgs & ListArgs,
  ) => TriggerResponse;
};

import { BaseMethodArgs, BaseResponse } from "../../../types.ts";
import { EventTrigger } from "./event.ts";
import { ScheduledTrigger } from "./schedule.ts";
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
  is_owner?: boolean;
  is_published?: boolean;
};

export type TypedWorkflowsTriggersMethodTypes = {
  create: (
    args: BaseMethodArgs & ValidTriggerTypes,
  ) => TriggerResponse;
  update: (
    args: BaseMethodArgs & TriggerIdType & ValidTriggerTypes,
  ) => TriggerResponse;
  delete: (
    args: BaseMethodArgs & TriggerIdType,
  ) => TriggerResponse;
  list: (
    args?: BaseMethodArgs & ListArgs,
  ) => TriggerResponse;
};

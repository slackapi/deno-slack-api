import { BaseMethodArgs, BaseResponse } from "../../../types.ts";
import { EventTrigger } from "./event.ts";
import { ScheduledTrigger } from "./schedule.ts";
import { ShortcutTrigger } from "./shortcut.ts";
import { WebhookTrigger } from "./webhook.ts";

// TODO: Export to SDK
export const VALID_TRIGGERS = {
  event: "event",
  scheduled: "scheduled",
  shortcut: "shortcut",
  webhook: "webhook",
} as const;

export type BaseTrigger = {
  /** @description The type of trigger */
  type: keyof typeof VALID_TRIGGERS;
  /** @description The workflow that the trigger initiates */
  workflow: string;
  /** @description The inputs provided to the workflow */
  inputs?: Record<string, unknown>;
  /** @description The name of the trigger */
  name: string;
  /** @description The description of the trigger */
  description?: string;
};

// A helper to make sure inputs are passed. Required for automated triggers
export type RequiredInputs = Required<Pick<BaseTrigger, "inputs">>;

type TriggerTypes =
  | EventTrigger
  | ScheduledTrigger
  | ShortcutTrigger
  | WebhookTrigger;

type BaseTriggerResponse = Promise<BaseResponse>;
type TriggerResponse = BaseTriggerResponse;

export type TypedWorkflowsTriggersMethodTypes = {
  create: (
    args: BaseMethodArgs & TriggerTypes,
  ) => TriggerResponse;
};

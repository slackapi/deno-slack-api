import { BaseMethodArgs, BaseResponse } from "../../../types.ts";
import { EventResponse, EventTrigger } from "./event.ts";
import { ScheduledResponse, ScheduledTrigger } from "./scheduled.ts";
import { ShortcutResponse, ShortcutTrigger } from "./shortcut.ts";
import { WebhookResponse, WebhookTrigger } from "./webhook.ts";
import { FilterType } from "./trigger-filter.ts";
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

type ValidResponseTypes =
  | EventResponse
  | ScheduledResponse
  | ShortcutResponse
  | WebhookResponse;
export type TriggerResponse = Promise<
  ValidResponseTypes | FailedTriggerResponse
>;

type FailedTriggerResponse = BaseResponse & {
  ok: false;
  /** @description no trigger is returned on a failed response */
  trigger?: never;
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
};

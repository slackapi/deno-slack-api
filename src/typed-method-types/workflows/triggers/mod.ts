import {
  BaseMethodArgs,
  BaseResponse,
  UpdateMethodArgs,
} from "../../../types.ts";
import { EventTrigger, EventTriggerResponse } from "./event.ts";
import { ScheduledTrigger, ScheduledTriggerResponse } from "./scheduled.ts";
import { ShortcutTrigger, ShortcutTriggerResponse } from "./shortcut.ts";
import { WebhookTrigger, WebhookTriggerResponse } from "./webhook.ts";
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
  trigger_id: string | undefined;
};

// A helper to make sure inputs are passed. Required for automated triggers
export type RequiredInputs = Required<Pick<BaseTrigger, "inputs">>;

export type FailedTriggerResponse = BaseResponse & {
  ok: false;
  /** @description no trigger is returned on a failed response */
  trigger?: never;
};

type createType = {
  (args: BaseMethodArgs & ScheduledTrigger): ScheduledTriggerResponse;
  (args: BaseMethodArgs & ShortcutTrigger): ShortcutTriggerResponse;
  (args: BaseMethodArgs & WebhookTrigger): WebhookTriggerResponse;
  (args: BaseMethodArgs & EventTrigger): EventTriggerResponse;
};

type updateType = {
  (args: UpdateMethodArgs & ScheduledTrigger): ScheduledTriggerResponse;
  (args: UpdateMethodArgs & ShortcutTrigger): ShortcutTriggerResponse;
  (args: UpdateMethodArgs & WebhookTrigger): WebhookTriggerResponse;
  (args: UpdateMethodArgs & EventTrigger): EventTriggerResponse;
};

type DeleteResponse = {
  ok: true;
};

type DeleteTriggerResponse = Promise<
  DeleteResponse | FailedTriggerResponse
>;

export type TypedWorkflowsTriggersMethodTypes = {
  create: createType;
  update: updateType;
  delete: (
    args: BaseMethodArgs & TriggerIdType,
  ) => DeleteTriggerResponse;
};

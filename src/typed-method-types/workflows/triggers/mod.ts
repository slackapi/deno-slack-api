import { BaseMethodArgs, BaseResponse } from "../../../types.ts";
import { EventTrigger } from "./event.ts";
import { ScheduledTrigger } from "./schedule.ts";
import { ShortcutTrigger } from "./shortcut.ts";
import { FilterType } from "./trigger-filter.ts";
import { WebhookTrigger } from "./webhook.ts";

// TODO: Should we import this in the SDK?
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

export type BaseTriggerResponse = Promise<
  SuccessfulTriggerResponse | FailedTriggerResponse
>;

// TODO: Revisit this response
type SuccessfulTriggerResponse = BaseResponse & {
  ok: true;
  /** @description successful calls come with the returned trigger object */
  trigger: {
    id: string;
    type: string; //same type passed as arg
    function: {
      id: string; // same uid of the func
      workflow_id: string; // uid of the called wf
      callback_id: string; // same callback_id of the func
      title: string; // title of the called wf
      description: string; // is this of the called wf?
      type: string; // will this ever not be workflow?
      input_parameters: {
        [key: string]: unknown;
      }[]; // why is this an array of objects?
      output_parameters: {
        [key: string]: unknown;
      }[];
      app_id: string;
      app: {
        id: string;
        name: string;
        icons: {
          [key: string]: unknown;
        }[];
      };
      date_updated: number;
    };
    inputs: {
      [key: string]: unknown;
    };
    date_created: number;
    date_updated: number;
    filter: FilterType;
  };
};

type FailedTriggerResponse = BaseResponse & {
  ok: false;
  /** @description no trigger is returned on a failed response */
  trigger?: never;
};

type TriggerResponse = BaseTriggerResponse;

export type TypedWorkflowsTriggersMethodTypes = {
  create: (
    args: BaseMethodArgs & TriggerTypes,
  ) => TriggerResponse;
};

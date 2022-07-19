import { BaseMethodArgs, BaseResponse } from "../../../types.ts";
import { EventTrigger } from "./event.ts";
// TODO: Rename to `scheduled.ts` after the Schedule PR is merged
import { ScheduledTrigger } from "./schedule.ts";
import { ShortcutTrigger } from "./shortcut.ts";
import { WebhookTrigger } from "./webhook.ts";
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

// A helper to make sure inputs are passed. Required for automated triggers
export type RequiredInputs = Required<Pick<BaseTrigger, "inputs">>;

type ValidTriggerTypes =
  | EventTrigger
  | ScheduledTrigger
  | ShortcutTrigger
  | WebhookTrigger;

export type BaseTriggerResponse = Promise<
  SuccessfulTriggerResponse | FailedTriggerResponse
>;

// TODO: Test this response with all trigger types
type SuccessfulTriggerResponse =
  & BaseResponse
  & Pick<BaseTrigger, "name" | "description">
  & {
    ok: true;
    /** @description The name of the trigger */
    /** @description A timestamp of when the trigger was created */
    date_created: number;
    /** @description A timestamp of when the workflow was last updated */
    date_updated: number;
    /** @description successful calls come with the returned trigger object */
    trigger: Pick<BaseTrigger, "type"> & {
      /** @description The trigger's internal uid */
      id: string;
      /** @description The metadata for the workflow */
      function: {
        /** @description the workflow function's internal uid */
        id: string;
        /** @description the workflow's internal uid */
        workflow_id: string;
        /** @description the workflow's callback_id */
        callback_id: string;
        /** @description the workflow's title */
        title: string;
        /** @description the workflow's description */
        description: string;
        /** @default "workflow" */
        type: string;
        // TODO: Add generic for inputs
        /** @description the workflow's input parameters */
        input_parameters: {
          // deno-lint-ignore no-explicit-any
          [key: string]: any;
        }[];
        // TODO: Add generic for outputs
        /** @description the workflow's output parameters */
        output_parameters: {
          // deno-lint-ignore no-explicit-any
          [key: string]: any;
        }[];
        /** @description the app_id that the workflow belongs to */
        app_id: string;
        /** @description the app metadata that the workflow belongs to */
        app: {
          id: string;
          name: string;
          icons: {
            image_32: string;
            image_48: string;
            image_64: string;
            image_72: string;
          };
        };
        /** @description A timestamp of when the workflow was last updated */
        date_updated: number;
      };
      // TODO: Type this based on a generic
      /** @description The inputs provided to the workflow */
      inputs: {
        [key: string]: {
          value: unknown;
          locked: boolean;
          hidden: boolean;
        };
      };
      // TODO: Is this needed on any response?
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
    args: BaseMethodArgs & ValidTriggerTypes,
  ) => TriggerResponse;
};

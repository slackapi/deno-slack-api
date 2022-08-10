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

const emptyValue = "#no_wf_definition" as const;
const emptyWorkflow = {
  callback_id: emptyValue,
  title: emptyValue,
} as const;

export type WorkflowInput = {
  // deno-lint-ignore no-explicit-any
  value: any;
};

type ResponseTypes<
  WorkflowDefinition extends WorkflowSchema,
> =
  | ShortcutTriggerResponse<WorkflowDefinition>
  | EventTriggerResponse<WorkflowDefinition>
  | ScheduledTriggerResponse<WorkflowDefinition>
  | WebhookTriggerResponse<WorkflowDefinition>;

type WorkflowStringFormat<AcceptedString extends string> =
  `${string}#/workflows/${AcceptedString}`;

type TypedWorkflowString<WorkflowCallback extends string> =
  // If the callback is from the empty workflow, accept any string
  WorkflowCallback extends typeof emptyValue ? WorkflowStringFormat<string>
    // otherwise accept only the specified callback
    : WorkflowStringFormat<WorkflowCallback>;

export type BaseTrigger<WorkflowDefinition extends WorkflowSchema> = {
  /** @description The type of trigger */
  type: string;
  /** @description The workflow that the trigger initiates */
  workflow: TypedWorkflowString<WorkflowDefinition["callback_id"]>;
  /** @description The name of the trigger */
  name: string;
  /** @description The description of the trigger */
  description?: string;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
} & WorkflowInputsType<WorkflowDefinition>;

type InputSchema<RequiredParams extends RequiredInputParams> =
  & { [k in keyof RequiredParams["properties"]]?: WorkflowInput }
  & { [k in RequiredParams["required"][number]]: WorkflowInput };

type PopulatedInputs<InputParams extends RequiredInputParams> = {
  /** @description The inputs provided to the workflow */
  inputs?: InputSchema<InputParams>;
};

type IsWorkflowDefinitionSet<WorkflowDefinition extends WorkflowSchema> =
  WorkflowDefinition extends typeof emptyWorkflow ? false : true;

type WorkflowInputsType<WorkflowDefinition extends WorkflowSchema> =
  IsWorkflowDefinitionSet<WorkflowDefinition> extends true
    ? WorkflowDefinition["input_parameters"] extends RequiredInputParams
      ? /** If the workflow has inputs, allow them to be set */
      WorkflowDefinition["input_parameters"]["required"] extends never[]
        // If the workflow has no required inputs, keep inputs optional
        ? PopulatedInputs<WorkflowDefinition["input_parameters"]>
        // If the workflow has required inputs, make inputs required
      : Required<PopulatedInputs<WorkflowDefinition["input_parameters"]>>
    : // If the workflow does not have inputs, don't allow them to be set
    {
      /** @description The inputs provided to the workflow */
      inputs?: Record<string, never>;
    }
    // If the workflow is not set, allow any workflow input
    : {
      /** @description The inputs provided to the workflow */
      inputs?: Record<string, WorkflowInput>;
    };

export type WorkflowSchema = {
  callback_id: string;
  description?: string;
  input_parameters?: RequiredInputParams;
  // deno-lint-ignore no-explicit-any
  output_parameters?: Record<string, any>;
  title: string;
};

export type RequiredInputParams = {
  // deno-lint-ignore no-explicit-any
  properties: Record<string, any>;
  required: (string | number)[];
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
  | ShortcutTriggerObject<WorkflowSchema>
  | EventTriggerObject<WorkflowSchema>
  | ScheduledTriggerObject<WorkflowSchema>
  | WebhookTriggerObject<WorkflowSchema>;

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

export type InputParameterSchema = {
  // deno-lint-ignore no-explicit-any
  [options: string]: any;
} | undefined;

export type ValidTriggerTypes<
  WorkflowDefinition extends WorkflowSchema = typeof emptyWorkflow,
> =
  | EventTrigger<WorkflowDefinition>
  | ScheduledTrigger<WorkflowDefinition>
  | ShortcutTrigger<WorkflowDefinition>
  | WebhookTrigger<WorkflowDefinition>;

/** @description Function type for create method */
type CreateType = {
  <WorkflowDefinition extends WorkflowSchema = typeof emptyWorkflow>(
    args: BaseMethodArgs & ValidTriggerTypes<WorkflowDefinition>,
  ): ResponseTypes<WorkflowDefinition>;
};

/** @description Function type for update method */
type UpdateType = {
  <WorkflowDefinition extends WorkflowSchema = typeof emptyWorkflow>(
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
    args?: BaseMethodArgs & ListArgs,
  ) => ListTriggerResponse;
};

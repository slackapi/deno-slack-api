import { PopulatedArray } from "../../../type-helpers.ts";
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

type NO_GENERIC_TITLE = "#no-generic";

export type WorkflowInput = {
  // deno-lint-ignore no-explicit-any
  value: any;
};

type ResponseTypes<
  WorkflowDefinition extends WorkflowSchema,
> =
  & ShortcutTriggerResponse<WorkflowDefinition>
  & EventTriggerResponse<WorkflowDefinition>
  & ScheduledTriggerResponse<WorkflowDefinition>
  & WebhookTriggerResponse<WorkflowDefinition>;

type WorkflowStringFormat<AcceptedString extends string | undefined> =
  AcceptedString extends string ? `${string}#/workflows/${AcceptedString}`
    : `${string}#/workflows/${string}`;

export type BaseTrigger<WorkflowDefinition extends WorkflowSchema> = {
  /** @description The type of trigger */
  type: string;
  /** @description The workflow that the trigger initiates */
  workflow: WorkflowStringFormat<WorkflowDefinition["callback_id"]>;
  /** @description The name of the trigger */
  name: string;
  /** @description The description of the trigger */
  description?: string;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
} & WorkflowInputs<WorkflowDefinition>;

type WorkflowInputs<WorkflowDefinition extends WorkflowSchema> =
  WorkflowDefinition["title"] extends NO_GENERIC_TITLE
    ? { inputs?: Record<string, WorkflowInput> }
    : [keyof WorkflowDefinition["input_parameters"]] extends [string]
      ? WorkflowInputsType<NonNullable<WorkflowDefinition["input_parameters"]>>
    : EmptyInputs;

// deno-lint-ignore no-explicit-any
type EmptyObject = Record<any, never>;
type EmptyInputs = { inputs?: never | EmptyObject };

type WorkflowInputsType<Params extends InputParameterSchema> =
  [keyof Params["properties"]] extends [string]
    // Since never extends string, must check for no properties
    ? [keyof Params["properties"]] extends [never] ? EmptyInputs
    : Params["required"] extends Array<infer T> ? [T] extends [never]
        // If there are no required properties, inputs are optional
        ? { inputs?: InputSchema<Params> }
        // If there are required params, inputs are required
      : { inputs: InputSchema<Params> }
      // If there are no inputs, don't allow them to be set
    : EmptyInputs
    : EmptyInputs;

type InputSchema<Params extends InputParameterSchema> = Params extends
  InputParameterSchema ? 
    & { [k in keyof Params["properties"]]?: WorkflowInput }
    & { [k in Params["required"][number]]: WorkflowInput }
  : Record<string, WorkflowInput>;

export type WorkflowSchema = {
  callback_id?: string;
  description?: string;
  input_parameters?: InputParameterSchema;
  // deno-lint-ignore no-explicit-any
  output_parameters?: Record<string, any>;
  title: string;
};

export type InputParameterSchema = {
  // deno-lint-ignore no-explicit-any
  properties: Record<string, Record<string, any>>;
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

// Set a default for any direct uses of this type for the CLI
type DEFAULT_WORKFLOW_TYPE = { title: NO_GENERIC_TITLE };

export type ValidTriggerTypes<
  WorkflowDefinition extends WorkflowSchema = DEFAULT_WORKFLOW_TYPE,
> =
  | EventTrigger<WorkflowDefinition>
  | ScheduledTrigger<WorkflowDefinition>
  | ShortcutTrigger<WorkflowDefinition>
  | WebhookTrigger<WorkflowDefinition>;

/** @description Function type for create method */
type CreateType = {
  <WorkflowDefinition extends WorkflowSchema = DEFAULT_WORKFLOW_TYPE>(
    args: BaseMethodArgs & ValidTriggerTypes<WorkflowDefinition>,
  ): ResponseTypes<WorkflowDefinition>;
};

/** @description Function type for update method */
type UpdateType = {
  <WorkflowDefinition extends WorkflowSchema = DEFAULT_WORKFLOW_TYPE>(
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

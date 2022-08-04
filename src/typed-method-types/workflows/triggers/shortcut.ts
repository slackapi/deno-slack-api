import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  InputSchema,
  TriggerTypes,
  WorkflowSchema,
} from "./mod.ts";

export type ShortcutTrigger<WorkflowDefinition extends WorkflowSchema> =
  & BaseTrigger
  & {
    type: typeof TriggerTypes.Shortcut;
    shortcut?: {
      button_text: string;
    };
    inputs?: InputSchema<WorkflowDefinition["input_parameters"]>;
  };

export type ShortcutTriggerResponse<
  WorkflowDefinition extends WorkflowSchema,
> = Promise<
  | ShortcutResponse<WorkflowDefinition>
  | FailedTriggerResponse
>;
export type ShortcutResponse<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseResponse
  & {
    trigger: ShortcutTriggerObject<WorkflowDefinition>;
  };
export type ShortcutTriggerObject<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<WorkflowDefinition>
  & { shortcut_url: string };

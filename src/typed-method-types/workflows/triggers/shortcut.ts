import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  TriggerTypes,
  WorkflowSchema,
} from "./mod.ts";

export type ShortcutTrigger<WorkflowDefinition extends WorkflowSchema> =
  & BaseTrigger<WorkflowDefinition>
  & {
    type: typeof TriggerTypes.Shortcut;
    shortcut?: {
      button_text: string;
    };
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
    trigger: ShortcutTriggerResponseObject<WorkflowDefinition>;
  };
export type ShortcutTriggerResponseObject<
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<WorkflowDefinition>
  & {
    /**
     * @description A URL that will trip a shortcut trigger
     */
    shortcut_url?: string;
  };

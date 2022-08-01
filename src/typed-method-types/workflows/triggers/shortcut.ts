import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import {
  BaseTrigger,
  FailedTriggerResponse,
  TriggerTypes,
  WorkflowSchema,
} from "./mod.ts";

export type ShortcutTrigger =
  & BaseTrigger
  & {
    type: typeof TriggerTypes.Shortcut;
    shortcut?: {
      button_text: string;
    };
  };

export type ShortcutTriggerResponse<
  TriggerDefinition extends ShortcutTrigger,
  WorkflowDefinition extends WorkflowSchema,
> = Promise<
  | ShortcutResponse<TriggerDefinition, WorkflowDefinition>
  | FailedTriggerResponse
>;
export type ShortcutResponse<
  TriggerDefinition extends ShortcutTrigger,
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseResponse
  & {
    trigger: ShortcutTriggerObject<TriggerDefinition, WorkflowDefinition>;
  };
export type ShortcutTriggerObject<
  TriggerDefinition extends ShortcutTrigger,
  WorkflowDefinition extends WorkflowSchema,
> =
  & BaseTriggerResponse<TriggerDefinition, WorkflowDefinition>
  & { shortcut_url: string };

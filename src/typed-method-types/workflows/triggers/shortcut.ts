import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import { BaseTrigger, FailedTriggerResponse, TriggerTypes } from "./mod.ts";

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
> = Promise<
  ShortcutResponse<TriggerDefinition> | FailedTriggerResponse
>;
export type ShortcutResponse<TriggerDefinition extends ShortcutTrigger> =
  & BaseResponse
  & {
    trigger: ShortcutTriggerObject<TriggerDefinition>;
  };
export type ShortcutTriggerObject<TriggerDefinition extends ShortcutTrigger> =
  & BaseTriggerResponse<TriggerDefinition>
  & { shortcut_url: string };

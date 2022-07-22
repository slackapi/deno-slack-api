import { BaseResponse } from "../../../types.ts";
import { BaseTriggerResponse } from "./base_response.ts";
import { BaseTrigger, FailedTriggerResponse, TriggerTypes } from "./mod.ts";

export type ShortcutTrigger = BaseTrigger & {
  type: typeof TriggerTypes.Shortcut;
  shortcut?: {
    button_text: string;
  };
};

export type ShortcutTriggerResponse = Promise<
  ShortcutResponse | FailedTriggerResponse
>;
export type ShortcutResponse = BaseResponse & {
  trigger:
    & BaseTriggerResponse
    & Pick<BaseTrigger, "type">
    & Pick<BaseTrigger, "name" | "description">
    & { shortcut_url: string };
};

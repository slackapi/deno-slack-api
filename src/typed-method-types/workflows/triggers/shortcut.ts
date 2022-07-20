import { BaseTriggerResponse } from "./base_response.ts";
import { BaseTrigger, TriggerTypes } from "./mod.ts";

export type ShortcutTrigger = BaseTrigger & {
  type: typeof TriggerTypes.Shortcut;
  shortcut?: {
    button_text: string;
  };
};

export type ShortcutResponse =
  & BaseTriggerResponse
  & Pick<BaseTrigger, "name" | "description">;

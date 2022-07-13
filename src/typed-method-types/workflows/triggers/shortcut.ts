import { BaseTrigger, TriggerTypes } from "./mod.ts";

export type ShortcutTrigger = BaseTrigger & {
  type: typeof TriggerTypes.Shortcut;
  shortcut?: {
    button_text: string;
  };
};

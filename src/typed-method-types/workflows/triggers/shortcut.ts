import { BaseTrigger, TriggerTypes } from "./mod.ts";

export type ShortcutTrigger = BaseTrigger & {
  type: typeof TriggerTypes.Shortcut;
  shortcut?: {
    // Eventually this will support button text
    [key: string]: never;
  };
};

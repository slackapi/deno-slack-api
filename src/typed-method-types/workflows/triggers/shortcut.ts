import { BaseTrigger, VALID_TRIGGERS } from "./mod.ts";

export type ShortcutTrigger = BaseTrigger & {
  type: typeof VALID_TRIGGERS.shortcut;
  // TODO: Should we remove this?
  shortcut?: {
    // Eventually this will support button text
    [key: string]: never;
  };
};

import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { ShortcutTrigger } from "./shortcut.ts";
import { TriggerTypes } from "./mod.ts";

Deno.test("Shortcut Triggers can set the type using the string", () => {
  const shortcut: ShortcutTrigger = {
    type: "shortcut",
    name: "test",
    workflow: "example",
    inputs: {},
  };
  assertEquals(shortcut.type, TriggerTypes.Shortcut);
});

Deno.test("Shortcut Triggers can set the type using the TriggerTypes object", () => {
  const shortcut: ShortcutTrigger = {
    type: TriggerTypes.Shortcut,
    name: "test",
    workflow: "example",
    inputs: {},
  };
  assertEquals(shortcut.type, TriggerTypes.Shortcut);
});

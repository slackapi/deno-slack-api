import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { EventTrigger } from "./event.ts";
import { TriggerTypes } from "./mod.ts";

Deno.test("Event Triggers can set the type using the string", () => {
  const event: EventTrigger = {
    type: "event",
    name: "test",
    workflow: "example",
    inputs: {},
    event: {
      event_type: "reaction_added",
      channel_ids: ["C013ZG3K41Z"],
    },
  };
  assertEquals(event.type, TriggerTypes.Event);
});

Deno.test("Event Triggers can set the type using the TriggerTypes object", () => {
  const event: EventTrigger = {
    type: TriggerTypes.Event,
    name: "test",
    workflow: "example",
    inputs: {},
    event: {
      event_type: "reaction_added",
      channel_ids: ["C013ZG3K41Z"],
    },
  };
  assertEquals(event.type, TriggerTypes.Event);
});

import { assertEquals, assertObjectMatch } from "@std/assert";
import type { ShortcutTrigger } from "../shortcut.ts";
import { TriggerTypes } from "../mod.ts";
import { stubFetch } from "../../../../../testing/http.ts";
import { SlackAPI } from "../../../../mod.ts";
import { shortcut_response } from "./fixtures/sample_responses.ts";
import type {
  ExampleWorkflow,
  RequiredInputWorkflow,
} from "./fixtures/workflows.ts";

Deno.test("Shortcut triggers can set the type using the string", () => {
  const shortcut: ShortcutTrigger<ExampleWorkflow> = {
    type: "shortcut",
    name: "test",
    workflow: "#/workflows/example",
  };
  assertEquals(shortcut.type, TriggerTypes.Shortcut);
});

Deno.test("Shortcut triggers can set the type using the TriggerTypes object", () => {
  const shortcut: ShortcutTrigger<RequiredInputWorkflow> = {
    type: TriggerTypes.Shortcut,
    name: "test",
    workflow: "#/workflows/example",
    inputs: { required: { value: "example" } },
  };
  assertEquals(shortcut.type, TriggerTypes.Shortcut);
});

Deno.test("Mock call for shortcut", async (t) => {
  await t.step("instantiated with default API URL", async (t) => {
    const client = SlackAPI("test-token");

    await t.step("base methods exist on client", () => {
      assertEquals(typeof client.workflows.triggers.create, "function");
      assertEquals(typeof client.workflows.triggers.update, "function");
    });

    await t.step("shortcut responses", async (t) => {
      await t.step(
        "should return successful response JSON on create",
        async () => {
          using _fetchStub = stubFetch(
            (req) => {
              assertEquals(req.method, "POST");
              assertEquals(
                req.url,
                "https://slack.com/api/workflows.triggers.create",
              );
            },
            new Response(JSON.stringify(shortcut_response)),
          );

          const res = await client.workflows.triggers.create({
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/reverse_workflow",
            inputs: {
              a_string: {
                value: "string",
              },
            },
          });
          assertEquals(res.ok, true);
          if (res.ok) {
            assertObjectMatch(res.trigger, shortcut_response.trigger);
            assertEquals(
              res.trigger?.shortcut_url,
              shortcut_response.trigger.shortcut_url,
            );
          }
        },
      );
    });

    await t.step(
      "should return successful response JSON on update",
      async () => {
        using _fetchStub = stubFetch(
          (req) => {
            assertEquals(req.method, "POST");
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.update",
            );
          },
          new Response(JSON.stringify(shortcut_response)),
        );

        const res = await client.workflows.triggers.update({
          name: "TEST",
          type: "shortcut",
          trigger_id: "123",
          workflow: "#/workflows/reverse_workflow",
          inputs: {
            a_string: {
              value: "string",
            },
          },
        });
        assertEquals(res.ok, true);
        if (res.ok) {
          assertObjectMatch(res.trigger, shortcut_response.trigger);
          assertEquals(
            res.trigger?.shortcut_url,
            shortcut_response.trigger.shortcut_url,
          );
        }
      },
    );
  });
});

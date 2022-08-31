import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { SlackAPI } from "../../../../mod.ts";
import * as mf from "https://deno.land/x/mock_fetch@0.3.0/mod.ts";
import {
  delete_response,
  shortcut_response,
} from "./fixtures/sample_responses.ts";
import { list_response } from "./fixtures/list_response.ts";

Deno.test("Mock CRUD call", async (t) => {
  mf.install(); // mock out calls to `fetch`

  await t.step("instantiated with default API URL", async (t) => {
    const client = SlackAPI("test-token");

    await t.step("base methods exist on client", () => {
      assertEquals(typeof client.workflows.triggers.create, "function");
      assertEquals(typeof client.workflows.triggers.update, "function");
      assertEquals(typeof client.workflows.triggers.delete, "function");
      assertEquals(typeof client.workflows.triggers.list, "function");
    });

    await t.step("create method", async (t) => {
      await t.step("should call the default API URL", async () => {
        mf.mock("POST@/api/workflows.triggers.create", (req: Request) => {
          assertEquals(
            req.url,
            "https://slack.com/api/workflows.triggers.create",
          );
          return new Response('{"ok":true}');
        });

        await client.workflows.triggers.create({
          name: "TEST",
          type: "event",
          workflow: "#/workflows/reverse_workflow",
          inputs: {
            a_string: {
              value: "string",
            },
          },
          event: {
            event_type: "slack#/events/reaction_added",
            channel_ids: ["C013ZG3K41Z"],
          },
        });

        mf.reset();
      });

      await t.step(
        "should return successful response JSON on create",
        async () => {
          mf.mock("POST@/api/workflows.triggers.create", (req: Request) => {
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.create",
            );
            return new Response(JSON.stringify(shortcut_response));
          });

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
            assertEquals(res.trigger, shortcut_response.trigger);
            assertEquals(
              res.trigger?.shortcut_url,
              shortcut_response.trigger.shortcut_url,
            );
          }

          mf.reset();
        },
      );
    });

    await t.step(
      "should return successful response JSON on update",
      async () => {
        mf.mock("POST@/api/workflows.triggers.update", (req: Request) => {
          assertEquals(
            req.url,
            "https://slack.com/api/workflows.triggers.update",
          );
          return new Response(JSON.stringify(shortcut_response));
        });

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
          assertEquals(res.trigger, shortcut_response.trigger);
          assertEquals(
            res.trigger?.shortcut_url,
            shortcut_response.trigger.shortcut_url,
          );
        }

        mf.reset();
      },
    );

    await t.step(
      "should return successful response JSON on delete",
      async () => {
        mf.mock("POST@/api/workflows.triggers.delete", (req: Request) => {
          assertEquals(
            req.url,
            "https://slack.com/api/workflows.triggers.delete",
          );
          return new Response(JSON.stringify(delete_response));
        });

        const res = await client.workflows.triggers.delete({
          trigger_id: "123",
        });
        assertEquals(res.ok, true);

        mf.reset();
      },
    );

    await t.step(
      "should return successful response JSON on list",
      async () => {
        mf.mock("POST@/api/workflows.triggers.list", (req: Request) => {
          assertEquals(
            req.url,
            "https://slack.com/api/workflows.triggers.list",
          );
          return new Response(JSON.stringify(list_response));
        });

        const res = await client.workflows.triggers.list();
        assertEquals(res.ok, true);
        assertEquals(res.triggers?.length, list_response.triggers.length);

        mf.reset();
      },
    );
  });
});

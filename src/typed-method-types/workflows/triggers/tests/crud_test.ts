import { assertEquals, assertObjectMatch } from "@std/assert";
import { SlackAPI } from "../../../../mod.ts";
import { stubFetch } from "../../../../../testing/http.ts";
import {
  delete_response,
  shortcut_response,
} from "./fixtures/sample_responses.ts";
import { list_response } from "./fixtures/list_response.ts";

Deno.test("Mock CRUD call", async (t) => {
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
        using _fetchStub = stubFetch(
          (req) => {
            assertEquals(req.method, "POST");
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.create",
            );
          },
          new Response('{"ok":true}'),
        );

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
      });

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

    await t.step(
      "should return successful response JSON on delete",
      async () => {
        using _fetchStub = stubFetch(
          (req) => {
            assertEquals(req.method, "POST");
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.delete",
            );
          },
          new Response(JSON.stringify(delete_response)),
        );

        const res = await client.workflows.triggers.delete({
          trigger_id: "123",
        });
        assertEquals(res.ok, true);
      },
    );

    await t.step(
      "should return successful response JSON on list",
      async () => {
        using _fetchStub = stubFetch(
          (req) => {
            assertEquals(req.method, "POST");
            assertEquals(
              req.url,
              "https://slack.com/api/workflows.triggers.list",
            );
          },
          new Response(JSON.stringify(list_response)),
        );

        const res = await client.workflows.triggers.list();
        assertEquals(res.ok, true);
        assertEquals(res.triggers?.length, list_response.triggers.length);
      },
    );
  });
});

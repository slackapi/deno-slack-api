import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.132.0/testing/asserts.ts";
import * as mf from "https://deno.land/x/mock_fetch@0.3.0/mod.ts";
import { SlackAPI } from "./mod.ts";
import { serializeData } from "./base-client.ts";

Deno.test("SlackAPI class", async (t) => {
  mf.install(); // mock out calls to `fetch`

  await t.step("instantiated with default API URL", async (t) => {
    const client = SlackAPI("test-token", {});

    await t.step("base methods exist on client", () => {
      assertEquals(typeof client.apiCall, "function");
      assertEquals(typeof client.response, "function");
    });

    await t.step("apiCall method", async (t) => {
      await t.step("should call the default API URL", async () => {
        mf.mock("POST@/api/chat.postMessage", (req: Request) => {
          assertEquals(req.url, "https://slack.com/api/chat.postMessage");
          return new Response('{"ok":true}');
        });

        await client.apiCall("chat.postMessage", {});

        mf.reset();
      });

      await t.step(
        "should prioritize calling provided token vs. token instantiated client with",
        async () => {
          mf.mock("POST@/api/chat.postMessage", (req: Request) => {
            assertEquals(req.headers.get("authorization"), "Bearer override");
            return new Response('{"ok":true}');
          });

          await client.apiCall("chat.postMessage", { token: "override" });

          mf.reset();

          mf.mock("POST@/api/chat.postMessage", (req: Request) => {
            assertEquals(req.headers.get("authorization"), "Bearer test-token");
            return new Response('{"ok":true}');
          });

          await client.apiCall("chat.postMessage", {});

          mf.reset();
        },
      );

      await t.step(
        "should throw if response returns an HTTP status code >= 400",
        async () => {
          mf.mock("POST@/api/chat.postMessage", () => {
            return new Response("big explosions", { status: 500 });
          });

          await assertRejects(
            async () => {
              return await client.apiCall("chat.postMessage", {});
            },
            Error,
            "500: big explosions",
          );

          mf.reset();
        },
      );

      await t.step("should return successful response JSON", async () => {
        mf.mock("POST@/api/chat.postMessage", () => {
          return new Response('{"ok":true}');
        });

        const res = await client.apiCall("chat.postMessage", {});
        assertEquals(res.ok, true);

        mf.reset();
      });
    });

    await t.step("response method", async (t) => {
      await t.step(
        "should throw if response returns an HTTP status code >= 400",
        async () => {
          mf.mock("POST@/api/chat.postMessage", () => {
            return new Response("big explosions", { status: 500 });
          });

          await assertRejects(
            async () => {
              return await client.response(
                "https://slack.com/api/chat.postMessage",
                {},
              );
            },
            Error,
            "500: big explosions",
          );

          mf.reset();
        },
      );

      await t.step("should return successful response JSON", async () => {
        mf.mock("POST@/api/chat.postMessage", () => {
          return new Response('{"ok":true}');
        });

        const res = await client.response(
          "https://slack.com/api/chat.postMessage",
          {},
        );
        assertEquals(res.ok, true);

        mf.reset();
      });
    });
  });

  await t.step("instantiated with custom API URL", async (t) => {
    const client = SlackAPI("test-token", {
      slackApiUrl: "https://apitown.com/",
    });

    await t.step("apiCall method", async (t) => {
      await t.step("should call the custom API URL", async () => {
        mf.mock("POST@/chat.postMessage", (req: Request) => {
          assertEquals(req.url, "https://apitown.com/chat.postMessage");
          return new Response('{"ok":true}');
        });

        await client.apiCall("chat.postMessage", {});

        mf.reset();
      });
    });
  });

  mf.uninstall();
});

Deno.test("serializeData helper function", async (t) => {
  await t.step(
    "should serialize string values as strings and return a URLSearchParams object",
    () => {
      assertEquals(
        serializeData({ "batman": "robin" }).toString(),
        "batman=robin",
      );
    },
  );
  await t.step(
    "should serialize non-string values as JSON-encoded strings and return a URLSearchParams object",
    () => {
      assertEquals(
        serializeData({ "hockey": { "good": true, "awesome": "yes" } })
          .toString(),
        "hockey=%7B%22good%22%3Atrue%2C%22awesome%22%3A%22yes%22%7D",
      );
    },
  );
});

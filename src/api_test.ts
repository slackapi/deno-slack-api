import { assertEquals, assertRejects, mf } from "./dev_deps.ts";
import { SlackAPI } from "./mod.ts";
import { serializeData } from "./base-client.ts";

Deno.test("SlackAPI class", async (t) => {
  mf.install(); // mock out calls to `fetch`

  await t.step("instantiated with default API URL", async (t) => {
    const client = SlackAPI("test-token");

    await t.step("base methods exist on client", () => {
      assertEquals(typeof client.apiCall, "function");
      assertEquals(typeof client.response, "function");
      assertEquals(typeof client.setSlackApiUrl, "function");
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

  await t.step(
    "instantiated with custom API URL without trailing slash",
    async (t) => {
      const client = SlackAPI("test-token", {
        slackApiUrl: "https://apitown.com",
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
    },
  );

  await t.step("calling custom method accessor functions", async (t) => {
    const client = SlackAPI("test-token");

    await t.step(
      "should provide single level deep api method functions",
      async () => {
        mf.mock("POST@/api/chat.postMessage", () => {
          return new Response('{"ok":true}');
        });

        const res = await client.chat.postMessage({ channel: "", text: "" });
        assertEquals(res.ok, true);

        mf.reset();
      },
    );

    await t.step(
      "should provide deeply nested api method functions",
      async () => {
        mf.mock("POST@/api/admin.apps.approved.list", () => {
          return new Response('{"ok":true}');
        });

        const res = await client.admin.apps.approved.list();
        assertEquals(res.ok, true);

        mf.reset();
      },
    );

    await t.step(
      "should allow for typed method calls",
      async () => {
        mf.mock("POST@/api/apps.datastore.put", () => {
          return new Response('{"ok":true}');
        });

        const TestDatastore = {
          name: "test",
          attributes: {
            id: "string",
            email: "string",
          },
          primary_key: "id",
        };

        const res = await client.apps.datastore.put<typeof TestDatastore>({
          datastore: "test",
          item: {
            id: "sample",
            email: "test@test.com",
          },
        });
        assertEquals(res.ok, true);

        mf.reset();
      },
    );

    await t.step(
      "should allow for typed method calls for external auth",
      async () => {
        mf.mock("POST@/api/apps.auth.external.get", () => {
          return new Response('{"ok":true, "external_token": "abcd"}');
        });
        const TestExternalAuthId = {
          external_token_id: "ET12345",
        };
        const res = await client.apps.auth.external.get(TestExternalAuthId);
        assertEquals(res.ok, true);
        assertEquals(res.external_token, "abcd");
        mf.reset();
      },
    );
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
  await t.step(
    "should not serialize undefined values",
    () => {
      assertEquals(
        serializeData({
          "hockey": { "good": true, "awesome": "yes" },
          "baseball": undefined,
        })
          .toString(),
        "hockey=%7B%22good%22%3Atrue%2C%22awesome%22%3A%22yes%22%7D",
      );
    },
  );
});

Deno.test("SlackApi.setSlackApiUrl()", async (t) => {
  mf.install();
  const testClient = SlackAPI("test-token");

  await t.step("override url", async () => {
    testClient.setSlackApiUrl("https://something.slack.com/api/");

    mf.mock("POST@/api/chat.postMessage", (req: Request) => {
      assertEquals(
        req.url,
        "https://something.slack.com/api/chat.postMessage",
      );
      return new Response('{"ok":true}');
    });

    await testClient.apiCall("chat.postMessage", {});

    mf.reset();
  });

  await t.step("override url without trailing slash", async () => {
    testClient.setSlackApiUrl("https://something.slack.com/api");

    mf.mock("POST@/api/chat.postMessage", (req: Request) => {
      assertEquals(
        req.url,
        "https://something.slack.com/api/chat.postMessage",
      );
      return new Response('{"ok":true}');
    });

    await testClient.apiCall("chat.postMessage", {});

    mf.reset();
  });

  await t.step("reset url", async () => {
    testClient.setSlackApiUrl("https://slack.com/api/");

    mf.mock("POST@/api/chat.postMessage", (req: Request) => {
      assertEquals(
        req.url,
        "https://slack.com/api/chat.postMessage",
      );
      return new Response('{"ok":true}');
    });

    await testClient.apiCall("chat.postMessage", {});

    mf.reset();
  });

  mf.uninstall();
});

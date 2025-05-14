import {
  assertEquals,
  assertExists,
  assertInstanceOf,
  assertRejects,
} from "@std/assert";
import { SlackAPI } from "./mod.ts";
import { HttpError } from "@std/http/http-errors";
import { stubFetch } from "./utils_test.ts";

Deno.test("SlackAPI class", async (t) => {
  await t.step(
    "instantiated with default API URL",
    async (t) => {
      const client = SlackAPI("test-token");

      await t.step("base methods exist on client", () => {
        assertEquals(typeof client.apiCall, "function");
        assertEquals(typeof client.response, "function");
        assertEquals(typeof client.setSlackApiUrl, "function");
      });

      await t.step("apiCall method", async (t) => {
        await t.step("should call the default API URL", async () => {
          using _fetchStub = stubFetch(new Response('{"ok":true}'), (req) => {
            assertEquals(req.url, "https://slack.com/api/chat.postMessage");
            assertExists(req.headers.has("user-agent"));
          });

          await client.apiCall("chat.postMessage", {});
        });

        await t.step(
          "should prioritize calling provided token vs. token instantiated client with",
          async () => {
            let fetchStub = stubFetch(new Response('{"ok":true}'), (req) => {
              assertEquals(req.method, "POST");
              assertEquals(req.url, "https://slack.com/api/chat.postMessage");
              assertEquals(req.headers.get("authorization"), "Bearer override");
              assertExists(req.headers.has("user-agent"));
            });

            await client.apiCall("chat.postMessage", { token: "override" });

            fetchStub.restore();

            fetchStub = stubFetch(new Response('{"ok":true}'), (req) => {
              assertEquals(req.method, "POST");
              assertEquals(req.url, "https://slack.com/api/chat.postMessage");
              assertEquals(
                req.headers.get("authorization"),
                "Bearer test-token",
              );
            });
            await client.apiCall("chat.postMessage", {});

            fetchStub.restore();
          },
        );

        await t.step(
          "should throw an HttpError if HTTP response status code >= 400",
          async () => {
            using _fetchStub = stubFetch(
              new Response("ratelimited", {
                status: 429,
                headers: { "Retry-After": "120" },
              }),
              (req) => {
                assertEquals(req.method, "POST");
                assertEquals(req.url, "https://slack.com/api/chat.postMessage");
              },
            );

            const error = await assertRejects(
              () => client.apiCall("chat.postMessage", {}),
              HttpError,
              "429: ratelimited",
            );
            assertEquals(error.headers?.get("Retry-After"), "120");
            assertEquals(error.status, 429);
          },
        );

        await t.step(
          "should return successful response JSON",
          async () => {
            using _fetchStub = stubFetch(
              new Response(
                '{"ok":true, "channel": "C123", "message": {}}',
              ),
              (req) => {
                assertEquals(req.method, "POST");
                assertEquals(req.url, "https://slack.com/api/chat.postMessage");
              },
            );

            const res = await client.apiCall("chat.postMessage", {});
            assertEquals(res.ok, true);
            assertEquals(res.channel, "C123");
            assertEquals(res.message, {});
          },
        );

        await t.step("toFetchResponse method", async (t) => {
          await t.step(
            "should return usable Response with payload {'ok': false}",
            async () => {
              using _fetchStub = stubFetch(
                new Response('{"ok":false}', {
                  headers: { "Retry-After": "120" },
                }),
                (req) => {
                  assertEquals(req.method, "POST");
                  assertEquals(
                    req.url,
                    "https://slack.com/api/chat.postMessage",
                  );
                },
              );

              const res = await client.apiCall("chat.postMessage", {});
              assertEquals(res.ok, false);
              const fullRes = res.toFetchResponse();
              assertInstanceOf(fullRes, Response);
              assertEquals(fullRes.headers?.get("Retry-After"), "120");
            },
          );
        });
      });

      await t.step("response method", async (t) => {
        await t.step(
          "should throw an HttpError if HTTP response status code >= 400",
          async () => {
            using _fetchStub = stubFetch(
              new Response("ratelimited", {
                status: 429,
                headers: { "Retry-After": "120" },
              }),
              (req) => {
                assertEquals(req.method, "POST");
                assertEquals(req.url, "https://slack.com/api/chat.postMessage");
              },
            );

            const error = await assertRejects(
              () =>
                client.response("https://slack.com/api/chat.postMessage", {}),
              HttpError,
            );
            assertEquals(error.headers?.get("Retry-After"), "120");
            assertEquals(error.status, 429);
            assertEquals(error.message, "429: ratelimited");
          },
        );

        await t.step(
          "should return successful response JSON",
          async () => {
            using _fetchStub = stubFetch(
              new Response(
                '{"ok":true, "channel": "C123", "message": {}}',
              ),
              (req) => {
                assertEquals(req.method, "POST");
                assertEquals(req.url, "https://slack.com/api/chat.postMessage");
              },
            );

            const res = await client.response(
              "https://slack.com/api/chat.postMessage",
              {},
            );
            assertEquals(res.ok, true);
            assertEquals(res.channel, "C123");
            assertEquals(res.message, {});
          },
        );

        await t.step("toFetchResponse method", async (t) => {
          await t.step(
            "should return usable Response with payload {'ok': false}",
            async () => {
              using _fetchStub = stubFetch(
                new Response('{"ok":false}', {
                  headers: { "Retry-After": "120" },
                }),
                (req) => {
                  assertEquals(req.method, "POST");
                  assertEquals(
                    req.url,
                    "https://slack.com/api/chat.postMessage",
                  );
                },
              );

              const res = await client.response(
                "https://slack.com/api/chat.postMessage",
                {},
              );
              assertEquals(res.ok, false);
              const fullRes = res.toFetchResponse();
              assertInstanceOf(fullRes, Response);
              assertEquals(fullRes.headers?.get("Retry-After"), "120");
            },
          );
        });
      });
    },
  );

  await t.step(
    "instantiated with custom API URL",
    async (t) => {
      const client = SlackAPI("test-token", {
        slackApiUrl: "https://apitown.com/",
      });

      await t.step("apiCall method", async (t) => {
        await t.step("should call the custom API URL", async () => {
          using _fetchStub = stubFetch(
            new Response('{"ok":true}'),
            (req) => {
              assertEquals(req.url, "https://apitown.com/chat.postMessage");
            },
          );

          await client.apiCall("chat.postMessage", {});
        });
      });
    },
  );

  await t.step(
    "instantiated with custom API URL without trailing slash",
    async (t) => {
      const client = SlackAPI("test-token", {
        slackApiUrl: "https://apitown.com",
      });

      await t.step("apiCall method", async (t) => {
        await t.step("should call the custom API URL", async () => {
          using _fetchStub = stubFetch(
            new Response('{"ok":true}'),
            (req) => {
              assertEquals(req.url, "https://apitown.com/chat.postMessage");
            },
          );

          await client.apiCall("chat.postMessage", {});
        });
      });
    },
  );

  await t.step(
    "calling custom method accessor functions",
    async (t) => {
      const client = SlackAPI("test-token");

      await t.step(
        "should provide single level deep api method functions",
        async () => {
          using _fetchStub = stubFetch(
            new Response('{"ok":true}'),
            (req) => {
              assertEquals(req.method, "POST");
              assertEquals(req.url, "https://slack.com/api/chat.postMessage");
            },
          );

          const res = await client.chat.postMessage({ channel: "", text: "" });
          assertEquals(res.ok, true);
        },
      );

      await t.step(
        "should provide deeply nested api method functions",
        async () => {
          using _fetchStub = stubFetch(
            new Response('{"ok":true}'),
            (req) => {
              assertEquals(req.method, "POST");
              assertEquals(
                req.url,
                "https://slack.com/api/admin.apps.approved.list",
              );
            },
          );

          const res = await client.admin.apps.approved.list();
          assertEquals(res.ok, true);
        },
      );

      await t.step(
        "should allow for typed method calls",
        async () => {
          using _fetchStub = stubFetch(
            new Response('{"ok":true}'),
            (req) => {
              assertEquals(req.method, "POST");
              assertEquals(req.url, "https://slack.com/api/apps.datastore.put");
            },
          );

          const TestDatastore = {
            name: "test",
            attributes: {
              id: "string",
              email: "string",
            },
            primary_key: "id",
          } as const; // casted as const to validate primary_key requirement

          const res = await client.apps.datastore.put<typeof TestDatastore>({
            datastore: "test",
            item: {
              id: "sample",
              email: "test@test.com",
            },
          });
          assertEquals(res.ok, true);
        },
      );

      await t.step(
        "should allow for typed method calls for external auth",
        async () => {
          using _fetchStub = stubFetch(
            new Response('{"ok":true, "external_token": "abcd"}'),
            (req) => {
              assertEquals(req.method, "POST");
              assertEquals(
                req.url,
                "https://slack.com/api/apps.auth.external.get",
              );
            },
          );
          const TestExternalAuthId = {
            external_token_id: "ET12345",
          };
          const res = await client.apps.auth.external.get(TestExternalAuthId);
          assertEquals(res.ok, true);
          assertEquals(res.external_token, "abcd");
        },
      );

      await t.step(
        "should allow for typed method calls for external auth with force_refresh",
        async () => {
          using _fetchStub = stubFetch(
            new Response('{"ok":true, "external_token": "abcd"}'),
            (req) => {
              assertEquals(req.method, "POST");
              assertEquals(
                req.url,
                "https://slack.com/api/apps.auth.external.get",
              );
            },
          );
          const res = await client.apps.auth.external.get({
            external_token_id: "ET12345",
            force_refresh: true,
          });
          assertEquals(res.ok, true);
          assertEquals(res.external_token, "abcd");
        },
      );

      await t.step(
        "should allow for typed method calls for external auth delete method",
        async () => {
          using _fetchStub = stubFetch(
            new Response('{"ok":true}'),
            (req) => {
              assertEquals(req.method, "POST");
              assertEquals(
                req.url,
                "https://slack.com/api/apps.auth.external.delete",
              );
            },
          );
          const res = await client.apps.auth.external.delete({
            external_token_id: "ET12345",
          });
          assertEquals(res.ok, true);
        },
      );
    },
  );
});

Deno.test("SlackApi.setSlackApiUrl()", async (t) => {
  const testClient = SlackAPI("test-token");

  await t.step("override url", async () => {
    testClient.setSlackApiUrl("https://something.slack.com/api/");

    using _fetchStub = stubFetch(
      new Response('{"ok":true}'),
      (req) => {
        assertEquals(
          req.url,
          "https://something.slack.com/api/chat.postMessage",
        );
      },
    );

    await testClient.apiCall("chat.postMessage", {});
  });

  await t.step("override url without trailing slash", async () => {
    testClient.setSlackApiUrl("https://something.slack.com/api");

    using _fetchStub = stubFetch(
      new Response('{"ok":true}'),
      (req) => {
        assertEquals(
          req.url,
          "https://something.slack.com/api/chat.postMessage",
        );
      },
    );

    await testClient.apiCall("chat.postMessage", {});
  });

  await t.step("reset url", async () => {
    testClient.setSlackApiUrl("https://slack.com/api/");

    using _fetchStub = stubFetch(
      new Response('{"ok":true}'),
      (req) => {
        assertEquals(req.url, "https://slack.com/api/chat.postMessage");
      },
    );

    await testClient.apiCall("chat.postMessage", {});
  });
});

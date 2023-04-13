import {
  assertEquals,
  assertInstanceOf,
  assertRejects,
  isHttpError,
  MockFetch,
} from "./dev_deps.ts";
import { SlackAPI } from "./mod.ts";
import { serializeData } from "./base-client.ts";
import { HttpError } from "./deps.ts";

Deno.test("SlackAPI class", async (t) => {
  MockFetch.install(); // mock out calls to `fetch`

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
          MockFetch.mock("POST@/api/chat.postMessage", (req: Request) => {
            assertEquals(req.url, "https://slack.com/api/chat.postMessage");
            return new Response('{"ok":true}');
          });

          await client.apiCall("chat.postMessage", {});

          MockFetch.reset();
        });

        await t.step(
          "should prioritize calling provided token vs. token instantiated client with",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", (req: Request) => {
              assertEquals(req.headers.get("authorization"), "Bearer override");
              return new Response('{"ok":true}');
            });

            await client.apiCall("chat.postMessage", { token: "override" });

            MockFetch.reset();

            MockFetch.mock("POST@/api/chat.postMessage", (req: Request) => {
              assertEquals(
                req.headers.get("authorization"),
                "Bearer test-token",
              );
              return new Response('{"ok":true}');
            });

            await client.apiCall("chat.postMessage", {});

            MockFetch.reset();
          },
        );

        await t.step(
          "should throw if response returns an HTTP status code >= 400",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
              return new Response("big explosions", { status: 500 });
            });

            await assertRejects(
              async () => {
                return await client.apiCall("chat.postMessage", {});
              },
              Error,
              "500: big explosions",
            );

            MockFetch.reset();
          },
        );

        await t.step(
          "should throw an HttpError if HTTP response status code >= 400",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
              return new Response("ratelimited", {
                status: 429,
                headers: { "Retry-After": "120" },
              });
            });

            await assertRejects(
              async () => {
                return await client.apiCall("chat.postMessage", {});
              },
              (error: Error) => {
                assertInstanceOf(error, HttpError);
                if (isHttpError(error)) {
                  assertEquals(error.headers?.get("Retry-After"), "120");
                  assertEquals(error.status, 429);
                  assertEquals(error.message, "429: ratelimited");
                }
              },
            );

            MockFetch.reset();
          },
        );

        await t.step(
          "should return successful response JSON",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
              return new Response('{"ok":true}');
            });

            const res = await client.apiCall("chat.postMessage", {});
            assertEquals(res.ok, true);

            MockFetch.reset();
          },
        );

        await t.step(
          "should return usable Response with payload {'ok': false}",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
              return new Response('{"ok":false}', {
                headers: { "Retry-After": "120" },
              });
            });

            const res = await client.apiCall("chat.postMessage", {});
            assertEquals(res.ok, false);
            const fullRes = res.toResponse();
            assertInstanceOf(fullRes, Response);
            assertEquals(fullRes.headers?.get("Retry-After"), "120");

            MockFetch.reset();
          },
        );

        await t.step(
          "should return usable Response with payload {'ok': false}",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
              return new Response('{"ok":false}', {
                headers: { "Retry-After": "120" },
              });
            });

            try {
              const res = await client.apiCall("chat.postMessage", {});
              if (!res.ok) {
                const fullRes = res.toResponse();
                console.log(fullRes);
                console.log(fullRes.headers);
              }
            } catch (error) {
              if (isHttpError(error)) {
                error.headers;
              }
            }

            const res = await client.apiCall("chat.postMessage", {});
            assertEquals(res.ok, false);
            const fullRes = res.toResponse();
            assertInstanceOf(fullRes, Response);
            assertEquals(fullRes.headers?.get("Retry-After"), "120");

            MockFetch.reset();
          },
        );
      });

      await t.step("response method", async (t) => {
        await t.step(
          "should throw if response returns an HTTP status code >= 400",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
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

            MockFetch.reset();
          },
        );

        await t.step(
          "should throw an HttpError if HTTP response status code >= 400",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
              return new Response("ratelimited", {
                status: 429,
                headers: { "Retry-After": "120" },
              });
            });

            await assertRejects(
              async () => {
                return await client.response(
                  "https://slack.com/api/chat.postMessage",
                  {},
                );
              },
              (error: Error) => {
                assertInstanceOf(error, HttpError);
                if (isHttpError(error)) {
                  assertEquals(error.headers?.get("Retry-After"), "120");
                  assertEquals(error.status, 429);
                  assertEquals(error.message, "429: ratelimited");
                }
              },
            );

            MockFetch.reset();
          },
        );

        await t.step(
          "should return successful response JSON",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
              return new Response('{"ok":true}');
            });

            const res = await client.response(
              "https://slack.com/api/chat.postMessage",
              {},
            );
            assertEquals(res.ok, true);

            MockFetch.reset();
          },
        );

        await t.step(
          "should return usable Response with payload {'ok': false}",
          async () => {
            MockFetch.mock("POST@/api/chat.postMessage", () => {
              return new Response('{"ok":false}', {
                headers: { "Retry-After": "120" },
              });
            });

            const res = await client.response(
              "https://slack.com/api/chat.postMessage",
              {},
            );
            assertEquals(res.ok, false);
            const fullRes = res.toResponse();
            assertInstanceOf(fullRes, Response);
            assertEquals(fullRes.headers?.get("Retry-After"), "120");

            MockFetch.reset();
          },
        );
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
          MockFetch.mock("POST@/chat.postMessage", (req: Request) => {
            assertEquals(req.url, "https://apitown.com/chat.postMessage");
            return new Response('{"ok":true}');
          });

          await client.apiCall("chat.postMessage", {});

          MockFetch.reset();
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
          MockFetch.mock("POST@/chat.postMessage", (req: Request) => {
            assertEquals(req.url, "https://apitown.com/chat.postMessage");
            return new Response('{"ok":true}');
          });

          await client.apiCall("chat.postMessage", {});

          MockFetch.reset();
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
          MockFetch.mock("POST@/api/chat.postMessage", () => {
            return new Response('{"ok":true}');
          });

          const res = await client.chat.postMessage({ channel: "", text: "" });
          assertEquals(res.ok, true);

          MockFetch.reset();
        },
      );

      await t.step(
        "should provide deeply nested api method functions",
        async () => {
          MockFetch.mock("POST@/api/admin.apps.approved.list", () => {
            return new Response('{"ok":true}');
          });

          const res = await client.admin.apps.approved.list();
          assertEquals(res.ok, true);

          MockFetch.reset();
        },
      );

      await t.step(
        "should allow for typed method calls",
        async () => {
          MockFetch.mock("POST@/api/apps.datastore.put", () => {
            return new Response('{"ok":true}');
          });

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

          MockFetch.reset();
        },
      );

      await t.step(
        "should allow for typed method calls for external auth",
        async () => {
          MockFetch.mock("POST@/api/apps.auth.external.get", () => {
            return new Response('{"ok":true, "external_token": "abcd"}');
          });
          const TestExternalAuthId = {
            external_token_id: "ET12345",
          };
          const res = await client.apps.auth.external.get(TestExternalAuthId);
          assertEquals(res.ok, true);
          assertEquals(res.external_token, "abcd");
          MockFetch.reset();
        },
      );

      await t.step(
        "should allow for typed method calls for external auth with force_refresh",
        async () => {
          MockFetch.mock("POST@/api/apps.auth.external.get", () => {
            return new Response('{"ok":true, "external_token": "abcd"}');
          });
          const res = await client.apps.auth.external.get({
            external_token_id: "ET12345",
            force_refresh: true,
          });
          assertEquals(res.ok, true);
          assertEquals(res.external_token, "abcd");
          MockFetch.reset();
        },
      );

      await t.step(
        "should allow for typed method calls for external auth delete method",
        async () => {
          MockFetch.mock("POST@/api/apps.auth.external.delete", () => {
            return new Response('{"ok":true}');
          });
          const res = await client.apps.auth.external.delete({
            external_token_id: "ET12345",
          });
          assertEquals(res.ok, true);
          MockFetch.reset();
        },
      );
    },
  );

  MockFetch.uninstall();
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
  MockFetch.install();
  const testClient = SlackAPI("test-token");

  await t.step("override url", async () => {
    testClient.setSlackApiUrl("https://something.slack.com/api/");

    MockFetch.mock("POST@/api/chat.postMessage", (req: Request) => {
      assertEquals(
        req.url,
        "https://something.slack.com/api/chat.postMessage",
      );
      return new Response('{"ok":true}');
    });

    await testClient.apiCall("chat.postMessage", {});

    MockFetch.reset();
  });

  await t.step("override url without trailing slash", async () => {
    testClient.setSlackApiUrl("https://something.slack.com/api");

    MockFetch.mock("POST@/api/chat.postMessage", (req: Request) => {
      assertEquals(
        req.url,
        "https://something.slack.com/api/chat.postMessage",
      );
      return new Response('{"ok":true}');
    });

    await testClient.apiCall("chat.postMessage", {});

    MockFetch.reset();
  });

  await t.step("reset url", async () => {
    testClient.setSlackApiUrl("https://slack.com/api/");

    MockFetch.mock("POST@/api/chat.postMessage", (req: Request) => {
      assertEquals(
        req.url,
        "https://slack.com/api/chat.postMessage",
      );
      return new Response('{"ok":true}');
    });

    await testClient.apiCall("chat.postMessage", {});

    MockFetch.reset();
  });

  MockFetch.uninstall();
});

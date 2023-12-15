import {
  assertEquals,
  assertExists,
  assertInstanceOf,
  assertRejects,
  isHttpError,
  mf,
} from "./dev_deps.ts";
import { SlackAPI } from "./mod.ts";
import { HttpError } from "./deps.ts";

Deno.test("SlackAPI class", async (t) => {
  mf.install(); // mock out calls to `fetch`

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
          mf.mock("POST@/api/chat.postMessage", (req: Request) => {
            assertEquals(req.url, "https://slack.com/api/chat.postMessage");
            assertExists(req.headers.has("user-agent"));
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
              assertExists(req.headers.has("user-agent"));
              return new Response('{"ok":true}');
            });

            await client.apiCall("chat.postMessage", { token: "override" });

            mf.reset();

            mf.mock("POST@/api/chat.postMessage", (req: Request) => {
              assertEquals(
                req.headers.get("authorization"),
                "Bearer test-token",
              );
              return new Response('{"ok":true}');
            });

            await client.apiCall("chat.postMessage", {});

            mf.reset();
          },
        );

        await t.step(
          "should throw an HttpError if HTTP response status code >= 400",
          async () => {
            mf.mock("POST@/api/chat.postMessage", () => {
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

            mf.reset();
          },
        );

        await t.step(
          "should return successful response JSON",
          async () => {
            mf.mock("POST@/api/chat.postMessage", () => {
              return new Response(
                '{"ok":true, "channel": "C123", "message": {}}',
              );
            });

            const res = await client.apiCall("chat.postMessage", {});
            assertEquals(res.ok, true);
            assertEquals(res.channel, "C123");
            assertEquals(res.message, {});

            mf.reset();
          },
        );

        await t.step("toFetchResponse method", async (t) => {
          await t.step(
            "should return usable Response with payload {'ok': false}",
            async () => {
              mf.mock("POST@/api/chat.postMessage", () => {
                return new Response('{"ok":false}', {
                  headers: { "Retry-After": "120" },
                });
              });

              const res = await client.apiCall("chat.postMessage", {});
              assertEquals(res.ok, false);
              const fullRes = res.toFetchResponse();
              assertInstanceOf(fullRes, Response);
              assertEquals(fullRes.headers?.get("Retry-After"), "120");

              mf.reset();
            },
          );
        });
      });

      await t.step("response method", async (t) => {
        await t.step(
          "should throw an HttpError if HTTP response status code >= 400",
          async () => {
            mf.mock("POST@/api/chat.postMessage", () => {
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

            mf.reset();
          },
        );

        await t.step(
          "should return successful response JSON",
          async () => {
            mf.mock("POST@/api/chat.postMessage", () => {
              return new Response(
                '{"ok":true, "channel": "C123", "message": {}}',
              );
            });

            const res = await client.response(
              "https://slack.com/api/chat.postMessage",
              {},
            );
            assertEquals(res.ok, true);
            assertEquals(res.channel, "C123");
            assertEquals(res.message, {});

            mf.reset();
          },
        );

        await t.step("toFetchResponse method", async (t) => {
          await t.step(
            "should return usable Response with payload {'ok': false}",
            async () => {
              mf.mock("POST@/api/chat.postMessage", () => {
                return new Response('{"ok":false}', {
                  headers: { "Retry-After": "120" },
                });
              });

              const res = await client.response(
                "https://slack.com/api/chat.postMessage",
                {},
              );
              assertEquals(res.ok, false);
              const fullRes = res.toFetchResponse();
              assertInstanceOf(fullRes, Response);
              assertEquals(fullRes.headers?.get("Retry-After"), "120");

              mf.reset();
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

  await t.step(
    "calling custom method accessor functions",
    async (t) => {
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
          } as const; // casted as const to validate primary_key requirement

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

      await t.step(
        "should allow for typed method calls for external auth with force_refresh",
        async () => {
          mf.mock("POST@/api/apps.auth.external.get", () => {
            return new Response('{"ok":true, "external_token": "abcd"}');
          });
          const res = await client.apps.auth.external.get({
            external_token_id: "ET12345",
            force_refresh: true,
          });
          assertEquals(res.ok, true);
          assertEquals(res.external_token, "abcd");
          mf.reset();
        },
      );

      await t.step(
        "should allow for typed method calls for external auth delete method",
        async () => {
          mf.mock("POST@/api/apps.auth.external.delete", () => {
            return new Response('{"ok":true}');
          });
          const res = await client.apps.auth.external.delete({
            external_token_id: "ET12345",
          });
          assertEquals(res.ok, true);
          mf.reset();
        },
      );
    },
  );

  await t.step(
    "fileUploadV2 method",
    async (t) => {
      const client = SlackAPI("test-token");
      await t.step(
        "should successfully upload a single file",
        async () => {
          const testFile = {
            file: new Blob(["test"]),
            filename: "test.txt",
            length: "6",
            fileId: "test_id",
          };
          mf.mock("POST@/api/files.getUploadURLExternal", () => {
            return new Response(
              JSON.stringify({
                "ok": true,
                "upload_url": "https://files.slack.com/test",
                "file_id": "test_id",
              }),
            );
          });
          mf.mock("POST@/test", () => {
            return new Response(
              undefined,
              { status: 200 },
            );
          });
          mf.mock("POST@/api/files.completeUploadExternal", () => {
            return new Response(
              `{"ok":true}`,
            );
          });
          const response = await client.fileUploadV2({
            file_uploads: [
              testFile,
            ],
          });
          response.forEach((res) => assertEquals(res.ok, true));

          mf.reset();
        },
      );

      await t.step(
        "should successfully upload multiple file",
        async () => {
          const testFile = {
            file: new Blob(["test"]),
            filename: "test.txt",
            length: "6",
            fileId: "test_id",
          };
          const testTextFile = {
            file: "test",
            filename: "test.txt",
            length: "6",
            fileId: "test_id",
          };
          mf.mock("POST@/api/files.getUploadURLExternal", () => {
            return new Response(
              JSON.stringify({
                "ok": true,
                "upload_url": "https://files.slack.com/test",
                "file_id": "test_id",
              }),
            );
          });
          mf.mock("POST@/test", () => {
            return new Response(
              undefined,
              { status: 200 },
            );
          });
          mf.mock("POST@/api/files.completeUploadExternal", () => {
            return new Response(
              `{"ok":true}`,
            );
          });
          const response = await client.fileUploadV2({
            file_uploads: [
              testFile,
              testTextFile,
            ],
          });
          response.forEach((res) => assertEquals(res.ok, true));

          mf.reset();
        },
      );
      await t.step(
        "should rejects when get upload url fails",
        async () => {
          const testFile = {
            file: new Blob(["test"]),
            filename: "test.txt",
            length: "6",
            fileId: "test_id",
          };
          mf.mock("POST@/api/files.getUploadURLExternal", () => {
            return new Response(
              JSON.stringify({
                "ok": false,
              }),
            );
          });
          await assertRejects(async () =>
            await client.fileUploadV2({
              file_uploads: [
                testFile,
              ],
            })
          );

          mf.reset();
        },
      );
      await t.step(
        "should rejects when upload fails",
        async () => {
          const testFile = {
            file: new Blob(["test"]),
            filename: "test.txt",
            length: "6",
            fileId: "test_id",
          };
          mf.mock("POST@/api/files.getUploadURLExternal", () => {
            return new Response(
              JSON.stringify({
                "ok": true,
                "upload_url": "https://files.slack.com/test",
                "file_id": "test_id",
              }),
            );
          });
          mf.mock("POST@/test", () => {
            return new Response(
              undefined,
              { status: 500 },
            );
          });
          await assertRejects(async () =>
            await client.fileUploadV2({
              file_uploads: [
                testFile,
              ],
            })
          );

          mf.reset();
        },
      );
      await t.step(
        "should rejects when upload complete fails",
        async () => {
          const testFile = {
            file: new Blob(["test"]),
            filename: "test.txt",
            length: "6",
            fileId: "test_id",
          };
          mf.mock("POST@/api/files.getUploadURLExternal", () => {
            return new Response(
              JSON.stringify({
                "ok": true,
                "upload_url": "https://files.slack.com/test",
                "file_id": "test_id",
              }),
            );
          });
          mf.mock("POST@/test", () => {
            return new Response(
              undefined,
              { status: 200 },
            );
          });
          mf.mock("POST@/api/files.completeUploadExternal", () => {
            return new Response(
              `{"ok":false}`,
            );
          });
          await assertRejects(async () =>
            await client.fileUploadV2({
              file_uploads: [
                testFile,
              ],
            })
          );

          mf.reset();
        },
      );
    },
  );

  mf.uninstall();
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

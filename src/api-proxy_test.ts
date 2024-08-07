import { APIProxy } from "./api-proxy.ts";
import { BaseSlackAPIClient } from "./base-client.ts";
import type { SlackAPIMethodArgs } from "./types.ts";
import { assertSpyCall, spy } from "./dev_deps.ts";

Deno.test("APIProxy", async (t) => {
  const baseClient = new BaseSlackAPIClient("test-token");
  const generateClientProxy = (client: BaseSlackAPIClient) => ({
    apiCall: client.apiCall.bind(client),
    response: client.response.bind(client),
  });

  await t.step("should proxy legit Slack API calls", async () => {
    const clientToProxy = generateClientProxy(baseClient);

    const apiCallHandler = (_method: string, _payload?: SlackAPIMethodArgs) => {
      return Promise.resolve({
        ok: true,
        toFetchResponse: () => new Response(),
      });
    };
    const apiCallHandlerSpy = spy(apiCallHandler);

    const client = APIProxy(clientToProxy, apiCallHandlerSpy);

    const payload = { text: "proxied call", channel: "" };
    await client.chat.postMessage(payload);

    assertSpyCall(apiCallHandlerSpy, 0, {
      args: ["chat.postMessage", payload],
    });

    await client.admin.apps.approved.list();

    assertSpyCall(apiCallHandlerSpy, 1, {
      args: ["admin.apps.approved.list", undefined],
    });
  });

  await t.step("should not proxy Promise methods like `then`", () => {
    const clientToProxy = generateClientProxy(baseClient);

    const apiCallHandler = (_method: string, _payload?: SlackAPIMethodArgs) => {
      return Promise.resolve({
        ok: true,
        toFetchResponse: () => new Response(),
      });
    };
    const apiCallHandlerSpy = spy(apiCallHandler);

    const client = APIProxy(clientToProxy, apiCallHandlerSpy);

    // re: https://github.com/slackapi/deno-slack-api/issues/107
    // @ts-expect-error client does not have `then` but thenable feature detection at runtime may invoke or test for the method
    if (client.then) {
      throw new Error("APIProxy should have no `then`!");
    }
  });
});

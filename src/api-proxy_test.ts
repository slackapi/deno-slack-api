import { APIProxy } from "./api-proxy.ts";
import { BaseSlackAPIClient } from "./base-client.ts";
import { SlackAPIMethodArgs } from "./types.ts";
import { assertSpyCall, spy } from "./dev_deps.ts";

Deno.test("APIProxy", async () => {
  const baseClient = new BaseSlackAPIClient("test-token");
  const clientToProxy = {
    apiCall: baseClient.apiCall.bind(baseClient),
    response: baseClient.response.bind(baseClient),
  };

  const apiCallHandler = (_method: string, _payload?: SlackAPIMethodArgs) => {
    return Promise.resolve({ ok: true, toFetchResponse: () => new Response() });
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

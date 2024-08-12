import { isHttpError } from "@std/http/http-errors";
import { mf } from "../../src/dev_deps.ts";
import { assertEquals, assertRejects } from "@std/assert";
import { afterEach, beforeAll } from "@std/testing/bdd";
import { apiDepsIn } from "./update.ts";

const depsTsMock =
  `export { SlackAPI } from "https://deno.land/x/deno_slack_api@2.1.0/mod.ts";
   export type {SlackAPIClient, Trigger} from "https://deno.land/x/deno_slack_api@2.2.0/types.ts";`;

beforeAll(() => {
  mf.install();
});

afterEach(() => {
  mf.reset();
});

Deno.test("apiDepsIn should return a list of the api module urls used by a module", async () => {
  mf.mock("GET@/x/deno_slack_sdk@x.x.x/deps.ts", (req: Request) => {
    assertEquals(
      req.url,
      "https://deno.land/x/deno_slack_sdk@x.x.x/deps.ts?source,file",
    );
    return new Response(depsTsMock);
  });

  const apiDeps = await apiDepsIn(
    "https://deno.land/x/deno_slack_sdk@x.x.x/",
  );

  assertEquals(
    apiDeps,
    new Set([
      "https://deno.land/x/deno_slack_api@2.1.0/",
      "https://deno.land/x/deno_slack_api@2.2.0/",
    ]),
  );
});

Deno.test("apiDepsIn should throw http error on response not ok", async () => {
  mf.mock("GET@/x/deno_slack_sdk@x.x.x/deps.ts", () => {
    return new Response("error", { status: 500 });
  });

  const error = await assertRejects(() =>
    apiDepsIn("https://deno.land/x/deno_slack_sdk@x.x.x/")
  );
  isHttpError(error);
});

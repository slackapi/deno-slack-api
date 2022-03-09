import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { SlackAPI } from "./mod.ts";

Deno.test("SlackAPI", () => {
  const client = SlackAPI("test-token", {
    slackApiUrl: "https://slack.com/api/",
  });

  assertEquals(typeof client.call, "function");
  assertEquals(typeof client.response, "function");
});

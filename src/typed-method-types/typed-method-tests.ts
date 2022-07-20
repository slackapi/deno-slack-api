import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { SlackAPI } from "../mod.ts";

Deno.test("Custom Type Methods are valid functions", () => {
  const client = SlackAPI("test-token");

  assertEquals(typeof client.apps.datastore.delete, "function");
  assertEquals(typeof client.apps.datastore.get, "function");
  assertEquals(typeof client.apps.datastore.put, "function");
  assertEquals(typeof client.apps.datastore.query, "function");
  assertEquals(typeof client.workflows.triggers.create, "function");
  assertEquals(typeof client.workflows.triggers.update, "function");
  assertEquals(typeof client.workflows.triggers.delete, "function");
});

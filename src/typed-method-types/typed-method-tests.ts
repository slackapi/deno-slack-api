import { assertEquals } from "../dev_deps.ts";
import { SlackAPI } from "../mod.ts";

Deno.test("Custom Type Methods are valid functions", () => {
  const client = SlackAPI("test-token");

  assertEquals(typeof client.apps.datastore.delete, "function");
  assertEquals(typeof client.apps.datastore.bulkDelete, "function");
  assertEquals(typeof client.apps.datastore.get, "function");
  assertEquals(typeof client.apps.datastore.bulkGet, "function");
  assertEquals(typeof client.apps.datastore.put, "function");
  assertEquals(typeof client.apps.datastore.bulkPut, "function");
  assertEquals(typeof client.apps.datastore.update, "function");
  assertEquals(typeof client.apps.datastore.query, "function");
  assertEquals(typeof client.apps.datastore.count, "function");
  assertEquals(typeof client.apps.auth.external.get, "function");
  assertEquals(typeof client.apps.auth.external.delete, "function");
  assertEquals(typeof client.workflows.triggers.create, "function");
  assertEquals(typeof client.workflows.triggers.list, "function");
  assertEquals(typeof client.workflows.triggers.update, "function");
  assertEquals(typeof client.workflows.triggers.delete, "function");
});

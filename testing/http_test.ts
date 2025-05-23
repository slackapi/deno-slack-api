import { assertEquals, assertNotEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { assertSpyCalls, spy } from "@std/testing/mock";

import { stubFetch } from "./http.ts";

describe("stubFetch", () => {
  const originalFetch = globalThis.fetch;

  it("should replace global fetch with a stub", async () => {
    const matchesSpy = spy(() => {});

    using _stub = stubFetch(
      matchesSpy,
      new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    assertNotEquals(globalThis.fetch, originalFetch);

    const response = await fetch("https://example.com/api");

    assertSpyCalls(matchesSpy, 1);
    assertEquals(await response.json(), { success: true });
    assertEquals(response.status, 200);
    assertEquals(response.headers.get("Content-Type"), "application/json");
  });

  it("should handle Request objects directly", async () => {
    const matchesSpy = spy((req: Request) => {
      assertEquals(req.method, "POST");
      assertEquals(req.url, "https://example.com/data");
    });

    using _stub = stubFetch(matchesSpy, new Response("Hello world"));

    const request = new Request("https://example.com/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "value" }),
    });

    await fetch(request);

    assertSpyCalls(matchesSpy, 1);
  });

  it("should handle async matchers", async () => {
    let asyncOperationCompleted = false;

    const asyncMatcher = async (req: Request) => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      asyncOperationCompleted = true;
      assertEquals(req.url.includes("example.com"), true);
    };

    using _stub = stubFetch(asyncMatcher, new Response("Success"));

    await fetch("https://example.com/async");

    assertEquals(asyncOperationCompleted, true);
  });

  it("should clone the response for each call", async () => {
    const testBody = "test";
    using _stub = stubFetch(() => {}, new Response(testBody));

    const response1 = await fetch("https://example.com/first");
    const response2 = await fetch("https://example.com/second");

    assertEquals(await response1.text(), testBody);
    assertEquals(await response2.text(), testBody);
  });

  it("should restore original fetch when stub is released", () => {
    {
      using _stub = stubFetch(() => {}, new Response("Test"));
      assertEquals(globalThis.fetch !== originalFetch, true);
    }
    assertEquals(globalThis.fetch, originalFetch);
  });
});

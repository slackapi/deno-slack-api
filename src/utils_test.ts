import { assert, assertEquals, assertExists } from "@std/assert";
import { stub } from "@std/testing/mock";

export function stubFetch(
  response: Response = new Response(
    "ok",
    {
      status: 200,
    },
  ),
  expected: {
    url?: string;
    init?: RequestInit;
  } = {},
): Disposable {
  return stub(
    globalThis,
    "fetch",
    (_url: string | URL | Request, options?: RequestInit) => {
      if (expected.url) {
        assertEquals(_url, expected.url);
      }
      if (expected.init) {
        if (expected.init.method) {
          assertEquals(options?.method, expected.init.method);
        }
        if (expected.init.body) {
          assertEquals(options?.body, expected.init.body);
        }
        if (expected.init.headers) {
          assertExists(options);
          assertExists(options.headers);
          const expectedHeaders = expected.init.headers as Record<
            string,
            string
          >;
          const actualHeaders = options.headers as Record<
            string,
            string
          >;
          for (const key in expectedHeaders) {
            assertExists(actualHeaders[key]);
            assert(key in actualHeaders);
            assert(actualHeaders[key] === expectedHeaders[key]);
          }
        }
      }
      return Promise.resolve(response);
    },
  );
}

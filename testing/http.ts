import { type Stub, stub } from "@std/testing/mock";

/**
 * Creates a simple fetch stub that replaces the global fetch implementation with a mock.
 *
 * @param matches - A function that validates the request object
 * @param response - The Response object to return from the stubbed fetch call
 * @returns A Stub object that can be used to restore the original fetch implementation
 *
 * @example With 'using' statement
 * ```typescript
 * {
 *   using fetchStub = stubFetch(
 *     (req) => {
 *       assertEquals(req.url, "https://api.example.com/data");
 *       assertEquals(req.method, "POST");
 *     },
 *     new Response(JSON.stringify({ result: "success" }))
 *   );
 *
 *   // Test code - stub automatically cleaned up at end of block scope
 * }
 * ```
 */
export function stubFetch(
  matches: (req: Request) => void | Promise<void>,
  response: Response,
): Stub {
  return stub(
    globalThis,
    "fetch",
    async (url: string | URL | Request, options?: RequestInit) => {
      const request = url instanceof Request ? url : new Request(url, options);
      const matchesResult = matches(request.clone());
      if (matchesResult instanceof Promise) {
        await matchesResult;
      }
      return Promise.resolve(response.clone());
    },
  );
}

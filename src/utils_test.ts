import { type Stub, stub } from "@std/testing/mock";

export function stubFetch(
  response: Response = new Response(
    "ok",
    {
      status: 200,
    },
  ),
  assertion: (req: Request) => void | Promise<void>,
): Stub {
  return stub(
    globalThis,
    "fetch",
    async (_url: string | URL | Request, options?: RequestInit) => {
      const request = new Request(_url, options);
      const assertionResult = assertion(request);
      if (assertionResult instanceof Promise) {
        await assertionResult;
      }
      return Promise.resolve(response);
    },
  );
}

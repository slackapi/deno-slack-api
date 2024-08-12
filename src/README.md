# deno-slack-api

[![codecov](https://codecov.io/gh/slackapi/deno-slack-api/graph/badge.svg?token=QKJCI23P5S)](https://codecov.io/gh/slackapi/deno-slack-api)

Slack API Client for Deno Run on Slack projects

```ts
import { SlackAPI } from "jsr:@slack/api";

const client = SlackAPI(token);

// ...or create a client with options
const client = SlackAPI(token, {
  slackApiUrl: "...",
});

await client.chat.postMessage({
  text: "hello there",
  channel: "...",
});

// respond to a response_url
await client.response("...", payload);

// use apiCall() w/ method name
await client.apiCall("chat.postMessage", {
  text: "hello there",
  channel: "...",
});
```

## Requirements

A recent version of `deno`.

## Versioning

Releases for this repository follow the [SemVer](https://semver.org/) versioning
scheme. The SDK's contract is determined by the top-level exports from
`src/mod.ts` and `src/types.ts`. Exports not included in these files are deemed
internal and any modifications will not be treated as breaking changes. As such,
internal exports should be treated as unstable and used at your own risk.

## Running Tests

If you make changes to this repo, or just want to make sure things are working
as desired, you can run:

    deno task test

To get a full test coverage report, run:

    deno task test:coverage

---

### Getting Help

We welcome contributions from everyone! Please check out our
[Contributor's Guide](https://github.com/slackapi/deno-slack-api/blob/main/.github/CONTRIBUTING.md)
for how to contribute in a helpful and collaborative way.

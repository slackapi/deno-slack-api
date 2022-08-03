# deno-slack-api

Slack API Client for Deno Run on Slack projects

```ts
import { SlackAPI } from "https://deno.land/x/deno_slack_api@0.0.3/mod.ts"

const client = SlackAPI(token);

// ...or create a client with options
const client = SlackAPI(token, {
  slackApiUrl: "..."
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

## Running Tests

If you make changes to this repo, or just want to make sure things are working as desired, you can run:

    deno task test

To get a full test coverage report, run:

    deno task coverage

---

### Getting Help

We welcome contributions from everyone! Please check out our
[Contributor's Guide](.github/CONTRIBUTING.md) for how to contribute in a
helpful and collaborative way.

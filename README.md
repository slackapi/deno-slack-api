# deno-slack-api

Slack API Client for Deno Run on Slack projects

```ts
import { SlackAPI } from "https://deno.land/x/deno_slack_api@0.0.2/mod.ts"

const client = SlackAPI(token, {});

await client.apiCall("chat.postMessage", {
  text: "hello there",
  channel: "...",
});

// respond to a response_url
await client.response("...", payload);

// create a client with options
const client = SlackAPI(token, {
  slackApiUrl: "..."
})
```

## Requirements

A recent version of `deno`.

## Running Tests

If you make changes to this repo, or just want to make sure things are working as desired, you can run:

    deno fmt ./src
    deno lint ./src
    deno test --allow-read --coverage=.coverage && deno coverage --exclude="fixtures|test" .coverage

---

### Getting Help

You can [create an Issue](https://github.com/slackapi/deno-slack-api/issues/new)
right here on GitHub.

We welcome contributions from everyone! Please check out our
[Contributor's Guide](.github/CONTRIBUTING.md) for how to contribute in a
helpful and collaborative way.

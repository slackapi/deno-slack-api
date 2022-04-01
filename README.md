# deno-slack-api

Slack API Client for Deno Run on Slack projects

```ts
import { SlackAPI } from "https://deno.land/x/deno_slack_api@0.0.5/mod.ts"

const client = SlackAPI(token);

const response = await client.chat.postMessage({
  text: "hello there",
  channel: "...",
});

// use client.apiCall() directly with the api method name
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

---

### Getting Help

You can [create an Issue](https://github.com/slackapi/deno-slack-api/issues/new)
right here on GitHub.

We welcome contributions from everyone! Please check out our
[Contributor's Guide](.github/CONTRIBUTING.md) for how to contribute in a
helpful and collaborative way.

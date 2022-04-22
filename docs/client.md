## Slack API Client

### Instantiating the Slack API Client

To instantiate the Slack API Client, use the top level `SlackAPI` export. `SlackAPI` accepts two arguments:
- `token`: Your application's access token
- `options`: An optional object with parameters to customize the client
  - `slackApiUrl`: an optional string parameter to specify the Slack API URL. By default this is set to `"https://slack.com/api/"`


```ts
import { SlackAPI } from "https://deno.land/x/deno_slack_api@0.0.2/mod.ts"

// create a client with defaults
const client = SlackAPI(token);

// create a client with options
const customClient = SlackAPI(token, {
  slackApiUrl: "..."
});
```

### Using the Slack API Client

Now that you have an instance of the Slack API Client, you have access to its methods. You can call Slack API methods by directly referencing them on the client, such as `client.chat.postMessage()` or `client.pins.add()`. You also have access to the following methods:
- `apiCall`: An async function that accepts two arguments:
  1. `method`: a string which defines which API method you wish to invoke.
  2. `data`: a JSON object representing parameter data to be passed to the API method you wish to invoke; the client will handle serializing it appropriately.
- `response`: An async function that accepts two arguments:
  1. `responseURL`: a string defining the response URL.
  2. `data`: the payload to send to the response URL.

```ts
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
```
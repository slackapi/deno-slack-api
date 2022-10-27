## Slack API Client

### Instantiating the Slack API Client

To instantiate the Slack API Client, use the top level `SlackAPI` export. `SlackAPI` accepts two arguments:
- `token`: Your application's access token
- `options`: An optional object with parameters to customize the client
  - `slackApiUrl`: an optional string parameter to specify the Slack API URL. By default this is set to `"https://slack.com/api/"`


```ts
import { SlackAPI } from "https://deno.land/x/deno_slack_api@0.0.8/mod.ts"

// create a client with defaults
const client = SlackAPI(token);

// create a client with options
const customClient = SlackAPI(token, {
  slackApiUrl: "..."
});
```

### Using the Slack API Client

Now that you have an instance of the Slack API Client, you have access to its [methods](https://api.slack.com/methods). You can call Slack API methods by directly referencing them on the client, such as `client.chat.postMessage()` or `client.pins.add()`. You also have access to the following methods:
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

#### Pagination

A vast majority of Slack API methods support [cursor-based pagination](https://api.slack.com/docs/pagination#cursors). To use cursor-based pagination, start by specifying a `limit` parameter to any API method that returns lists of objects, like so:

```ts
const messages = await client.conversations.history({
  channel: myChannelID,
  limit: 1
});
```

Specifying `limit: 1` will ensure the response from the API will contain at most one item.

However, assumining in our above example that the channel being queried has more than one message, we would expect to be able to retrieve more "pages" of results. By inspecting the API response's `response_metadata.next_cursor` value, we can determine if there are any additional pages, and if so, we can use `next_cursor` to retrieve the next page of results, like so:

```ts
if (messages.response_metadata?.next_cursor) {
   const moarMessages = await.client.conversations.history({
     channel: myChannelID,
     limit: 1,
     cursor: messages.response_metadata.next_cursor
   });
}
```

const API_VERSION_REGEX = /\/deno_slack_api@(.*)\//;

export function getUserAgent() {
  const userAgents = [];
  userAgents.push(`Deno/${Deno.version.deno}`);
  userAgents.push(`OS/${Deno.build.os}`);
  userAgents.push(
    `deno-slack-api/${_internals.getModuleVersion()}`,
  );
  return userAgents.join(" ");
}

function getModuleVersion(): string | undefined {
  const url = _internals.getModuleUrl();
  // Insure this module is sourced from https://deno.land/x/deno_slack_api
  if (url.host === "deno.land") {
    return url.pathname.match(API_VERSION_REGEX)?.at(1);
  }
  return undefined;
}

function getModuleUrl(): URL {
  return new URL(import.meta.url);
}

// Serialize an object into a string so as to be compatible with x-www-form-urlencoded payloads
export function serializeData(data: Record<string, unknown>): URLSearchParams {
  const encodedData: Record<string, string> = {};
  Object.entries(data).forEach(([key, value]) => {
    // Objects/arrays, numbers and booleans get stringified
    // Slack API accepts JSON-stringified-and-url-encoded payloads for objects/arrays
    // Inspired by https://github.com/slackapi/node-slack-sdk/blob/%40slack/web-api%406.7.2/packages/web-api/src/WebClient.ts#L452-L528

    // Skip properties with undefined values.
    if (value === undefined) return;

    const serializedValue: string = typeof value !== "string"
      ? JSON.stringify(value)
      : value;
    encodedData[key] = serializedValue;
  });

  return new URLSearchParams(encodedData);
}

export const _internals = { getModuleVersion, getModuleUrl };

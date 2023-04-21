import {
  BaseResponse,
  BaseSlackClient,
  SlackAPIMethodArgs,
  SlackAPIOptions,
} from "./types.ts";
import { createHttpError, HttpError } from "./deps.ts";

export class BaseSlackAPIClient implements BaseSlackClient {
  #token?: string;
  #baseURL: string;

  constructor(token?: string, options: SlackAPIOptions = {}) {
    this.#token = token;
    this.#baseURL = options.slackApiUrl || "https://slack.com/api/";
  }

  /**
   * @description Set an override url endpoint for Slack API calls.
   * @param apiURL url endpoint for the Slack API used for api calls. It should include the protocol, the domain and the path.
   * @example: "https://slack.com/api/"
   * @returns BaseSlackClient
   */
  setSlackApiUrl(apiURL: string) {
    this.#baseURL = apiURL;

    return this;
  }

  // TODO: [brk-chg] return the `Promise<Response>` object
  async apiCall(
    method: string,
    data: SlackAPIMethodArgs = {},
  ): Promise<BaseResponse> {
    // ensure there's a slash prior to method
    const url = `${this.#baseURL.replace(/\/$/, "")}/${method}`;
    const body = serializeData(data);

    const token = data.token || this.#token || "";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
    if (!response.ok) {
      throw await this.createHttpError(response);
    }
    return await this.createBaseResponse(response);
  }

  // TODO: [brk-chg] return a `Promise<Response>` object
  async response(
    url: string,
    data: Record<string, unknown>,
  ): Promise<BaseResponse> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw await this.createHttpError(response);
    }
    return await this.createBaseResponse(response);
  }

  private async createHttpError(response: Response): Promise<HttpError> {
    const text = await response.text();
    return createHttpError(
      response.status,
      `${response.status}: ${text}`,
      {
        headers: response.headers,
      },
    );
  }

  private async createBaseResponse(response: Response): Promise<BaseResponse> {
    return {
      toFetchResponse: () => response,
      ...await response.json(),
    };
  }
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

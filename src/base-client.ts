import type {
  BaseResponse,
  BaseSlackClient,
  SlackAPIMethodArgs,
  SlackAPIOptions,
} from "./types.ts";
import { createHttpError, type HttpError } from "./deps.ts";
import { getUserAgent, serializeData } from "./base-client-helpers.ts";

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
        "User-Agent": getUserAgent(),
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
        "User-Agent": getUserAgent(),
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

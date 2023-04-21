import { TypedSlackAPIMethodsType } from "./typed-method-types/mod.ts";
import { SlackAPIMethodsType } from "./generated/method-types/mod.ts";

export type { DatastoreItem } from "./typed-method-types/apps.ts";

export type {
  ValidTriggerTypes as Trigger,
} from "./typed-method-types/workflows/triggers/mod.ts";

// TODO: [brk-chg] remove this in favor of `Response`
export type BaseResponse = {
  /**
   * @description `true` if the response from the server was successful, `false` otherwise.
   */
  ok: boolean;
  /**
   * @description: Optional error description returned by the server.
   */
  error?: string;
  /**
   * @description Optional list of warnings returned by the server.
   */
  warnings?: string[];
  /**
   * @description Optional metadata about the response returned by the server.
   */
  "response_metadata"?: {
    warnings?: string[];
    messages?: string[];
  };

  /**
   * @description Get the original `Response` object created by `fetch`
   *
   * ```ts
   * const originalResponse = response.toFetchResponse();
   * console.log(originalResponse.headers);
   * ```
   */
  toFetchResponse(): Response;

  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

export type SlackAPIClient =
  & BaseSlackClient
  & TypedSlackAPIMethodsType
  & SlackAPIMethodsType;

export type BaseSlackClient = {
  setSlackApiUrl: (slackApiUrl: string) => BaseSlackClient;
  apiCall: BaseClientCall;
  response: BaseClientResponse;
};

// TODO: [brk-chg] return a `Promise<Response>` object
type BaseClientCall = (
  method: string,
  data?: SlackAPIMethodArgs,
) => Promise<BaseResponse>;

// TODO: [brk-chg] return a `Promise<Response>` object
type BaseClientResponse = (
  url: string,
  data: Record<string, unknown>,
) => Promise<BaseResponse>;

export type SlackAPIOptions = {
  /**
   * @description Optional url endpoint for the Slack API used for api calls. Defaults to https://slack.com/api/
   */
  slackApiUrl?: string;
};

export type BaseMethodArgs = {
  /**
   * @description Optional override token. If set, it will be used as the token
   * for this single API call rather than the token provided when creating the client.
   */
  token?: string;
};

export type CursorPaginationArgs = {
  /**
   * @description Paginate through collections of data by setting the `cursor` parameter
   * to a `next_cursor` attribute returned by a previous request's `response_metadata`.
   * Default value fetches the first "page" of the collection.
   * Used in conjunction with `limit`, these parameters allow for
   * {@link https://api.slack.com/docs/pagination#cursors cursor-based pagination}.
   */
  cursor?: string;
  /**
   * @description The maximum number of items to return. Fewer than the requested
   * number of items may be returned, even if the end of the result list hasn't
   * been reached.
   * Used in conjunction with `cursor`, these parameters allow for
   * {@link https://api.slack.com/docs/pagination#cursors cursor-based pagination}.
   */
  limit?: number;
};

export type CursorPaginationResponse = {
  "response_metadata"?: {
    /**
     * @description A pointer that can be provided as parameter for a follow-up
     * call to the same API to retrieve the next set of results, should more exist.
     * If this property does not exist or is the empty string, there are no further
     * results to retrieve.
     * See {@link https://api.slack.com/docs/pagination#cursors our docs on cursor-based pagination}
     * for more details
     */
    next_cursor?: string;
  };
};

export type SlackAPIMethodArgs = BaseMethodArgs & {
  [name: string]: unknown;
};

export type SlackAPIMethod = {
  (args?: SlackAPIMethodArgs): Promise<BaseResponse>;
};

export type SlackAPICursorPaginatedMethod = {
  (
    args?: SlackAPIMethodArgs & CursorPaginationArgs,
  ): Promise<BaseResponse & CursorPaginationResponse>;
};

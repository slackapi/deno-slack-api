export type BaseResponse = {
  /** `true` if the response from the server was successful, `false` otherwise. */
  ok: boolean;
  /** Optional error description returned by the server. */
  error?: string;
  /** Optional list of warnings returned by the server. */
  warnings?: string[];
  /** Optional metadata about the response returned by the server. */
  "response_metadata"?: {
    warnings?: string[];
    messages?: string[];
  };
  [otherOptions: string]: unknown;
};

export type SlackAPIOptions = {
  slackApiUrl?: string;
};

export type BaseMethodArgs = {
  token?: string;
};

export type SlackAPIMethodArgs = BaseMethodArgs & {
  [name: string]: unknown;
};

export type SlackAPIMethod = {
  (args: SlackAPIMethodArgs): Promise<BaseResponse>;
};

import { BaseResponse } from "../types.ts";

type ChatPostMessageOptionalArgs = {
  /** @description The formatted text of the message to be published. If blocks are included, this will become the fallback text used in notifications. */
  text?: string;
  /** @description A JSON-based array of structured attachments. */
  // deno-lint-ignore no-explicit-any
  attachments?: any[];
  /** @description A JSON-based array of structured blocks. */
  // deno-lint-ignore no-explicit-any
  blocks?: any[];
  /** @description Provide another message's ts value to make this message a reply. Avoid using a reply's ts value; use its parent instead. */
  thread_ts?: string;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

type ChatPostMessageOneOfRequired =
  & ChatPostMessageOptionalArgs
  & Required<
    | Pick<ChatPostMessageOptionalArgs, "text">
    | Pick<ChatPostMessageOptionalArgs, "blocks">
    | Pick<ChatPostMessageOptionalArgs, "attachments">
  >;

type ChatPostMessageArgs = ChatPostMessageOneOfRequired & {
  /** @description Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. */
  channel: string;
};

type ChatPostMessageSuccessfulResponse = BaseResponse & {
  ok: true;
  /** @description The channel the message was posted to */
  channel: string;
  /** @description The timestamp of when the message was posted */
  ts: string;
  // deno-lint-ignore no-explicit-any
  message: Record<string, any>;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

type ChatPostMessageFailedResponse = BaseResponse & {
  ok: false;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

type ChatPostMessageResponse =
  | ChatPostMessageSuccessfulResponse
  | ChatPostMessageFailedResponse;

type ChatPostMessage = {
  (args: ChatPostMessageArgs): Promise<ChatPostMessageResponse>;
};

export type TypedChatMethodTypes = {
  chat: {
    postMessage: ChatPostMessage;
  };
};

import { BaseResponse } from "../types.ts";

type ChatPostMessageOptionalArgs = {
  text?: string;
  // deno-lint-ignore no-explicit-any
  attachments?: any[];
  // deno-lint-ignore no-explicit-any
  blocks?: any[];
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
  channel: string;
};

type ChatPostMessage = {
  (args: ChatPostMessageArgs): Promise<BaseResponse>;
};

export type TypedChatMethodTypes = {
  chat: {
    postMessage: ChatPostMessage;
  };
};

import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type EmojiAPIType = {
  list: SlackAPIMethod;
};

export const EmojiAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const emoji: any = {};

  emoji.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("emoji.list", args);
  };

  return emoji as EmojiAPIType;
};

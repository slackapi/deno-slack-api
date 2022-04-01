import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type ReactionsAPIType = {
  add: SlackAPIMethod;
  get: SlackAPIMethod;
  list: SlackAPIMethod;
  remove: SlackAPIMethod;
};

export const ReactionsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const reactions: any = {};

  reactions.add = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("reactions.add", args);
  };

  reactions.get = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("reactions.get", args);
  };

  reactions.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("reactions.list", args);
  };

  reactions.remove = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("reactions.remove", args);
  };

  return reactions as ReactionsAPIType;
};

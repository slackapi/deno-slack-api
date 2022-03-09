import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type CallsAPIType = {
  add: SlackAPIMethod;
  end: SlackAPIMethod;
  info: SlackAPIMethod;
  participants: {
    add: SlackAPIMethod;
    remove: SlackAPIMethod;
  };
  update: SlackAPIMethod;
};

export const CallsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const calls: any = {};

  calls.add = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("calls.add", args);
  };

  calls.end = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("calls.end", args);
  };

  calls.info = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("calls.info", args);
  };
  calls.participants = {};

  calls.participants.add = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("calls.participants.add", args);
  };

  calls.participants.remove = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("calls.participants.remove", args);
  };

  calls.update = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("calls.update", args);
  };

  return calls as CallsAPIType;
};

import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type PinsAPIType = {
  add: SlackAPIMethod;
  list: SlackAPIMethod;
  remove: SlackAPIMethod;
};

export const PinsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const pins: any = {};

  pins.add = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("pins.add", args);
  };

  pins.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("pins.list", args);
  };

  pins.remove = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("pins.remove", args);
  };

  return pins as PinsAPIType;
};

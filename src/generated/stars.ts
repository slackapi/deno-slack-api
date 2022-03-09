import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type StarsAPIType = {
  add: SlackAPIMethod;
  list: SlackAPIMethod;
  remove: SlackAPIMethod;
};

export const StarsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const stars: any = {};

  stars.add = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("stars.add", args);
  };

  stars.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("stars.list", args);
  };

  stars.remove = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("stars.remove", args);
  };

  return stars as StarsAPIType;
};

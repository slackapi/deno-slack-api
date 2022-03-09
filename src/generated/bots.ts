import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type BotsAPIType = {
  info: SlackAPIMethod;
};

export const BotsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const bots: any = {};

  bots.info = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("bots.info", args);
  };

  return bots as BotsAPIType;
};

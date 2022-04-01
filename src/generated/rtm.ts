import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type RtmAPIType = {
  connect: SlackAPIMethod;
};

export const RtmAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const rtm: any = {};

  rtm.connect = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("rtm.connect", args);
  };

  return rtm as RtmAPIType;
};

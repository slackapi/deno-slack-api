import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type ApiAPIType = {
  test: SlackAPIMethod;
};

export const ApiAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const api: any = {};

  api.test = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("api.test", args);
  };

  return api as ApiAPIType;
};

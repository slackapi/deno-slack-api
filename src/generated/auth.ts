import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type AuthAPIType = {
  revoke: SlackAPIMethod;
  test: SlackAPIMethod;
};

export const AuthAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const auth: any = {};

  auth.revoke = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("auth.revoke", args);
  };

  auth.test = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("auth.test", args);
  };

  return auth as AuthAPIType;
};

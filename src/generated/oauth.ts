import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type OauthAPIType = {
  access: SlackAPIMethod;
  token: SlackAPIMethod;
  v2: {
    access: SlackAPIMethod;
  };
};

export const OauthAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const oauth: any = {};

  oauth.access = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("oauth.access", args);
  };

  oauth.token = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("oauth.token", args);
  };
  oauth.v2 = {};

  oauth.v2.access = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("oauth.v2.access", args);
  };

  return oauth as OauthAPIType;
};

import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type TeamAPIType = {
  accessLogs: SlackAPIMethod;
  billableInfo: SlackAPIMethod;
  info: SlackAPIMethod;
  integrationLogs: SlackAPIMethod;
  profile: {
    get: SlackAPIMethod;
  };
};

export const TeamAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const team: any = {};

  team.accessLogs = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("team.accessLogs", args);
  };

  team.billableInfo = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("team.billableInfo", args);
  };

  team.info = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("team.info", args);
  };

  team.integrationLogs = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("team.integrationLogs", args);
  };
  team.profile = {};

  team.profile.get = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("team.profile.get", args);
  };

  return team as TeamAPIType;
};

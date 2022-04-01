import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type UsergroupsAPIType = {
  create: SlackAPIMethod;
  disable: SlackAPIMethod;
  enable: SlackAPIMethod;
  list: SlackAPIMethod;
  update: SlackAPIMethod;
  users: {
    list: SlackAPIMethod;
    update: SlackAPIMethod;
  };
};

export const UsergroupsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const usergroups: any = {};

  usergroups.create = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("usergroups.create", args);
  };

  usergroups.disable = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("usergroups.disable", args);
  };

  usergroups.enable = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("usergroups.enable", args);
  };

  usergroups.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("usergroups.list", args);
  };

  usergroups.update = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("usergroups.update", args);
  };
  usergroups.users = {};

  usergroups.users.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("usergroups.users.list", args);
  };

  usergroups.users.update = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("usergroups.users.update", args);
  };

  return usergroups as UsergroupsAPIType;
};

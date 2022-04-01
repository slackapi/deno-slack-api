import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type UsersAPIType = {
  conversations: SlackAPIMethod;
  deletePhoto: SlackAPIMethod;
  getPresence: SlackAPIMethod;
  identity: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPIMethod;
  lookupByEmail: SlackAPIMethod;
  profile: {
    get: SlackAPIMethod;
    set: SlackAPIMethod;
  };
  setActive: SlackAPIMethod;
  setPhoto: SlackAPIMethod;
  setPresence: SlackAPIMethod;
};

export const UsersAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const users: any = {};

  users.conversations = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("users.conversations", args);
  };

  users.deletePhoto = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("users.deletePhoto", args);
  };

  users.getPresence = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("users.getPresence", args);
  };

  users.identity = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("users.identity", args);
  };

  users.info = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("users.info", args);
  };

  users.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("users.list", args);
  };

  users.lookupByEmail = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("users.lookupByEmail", args);
  };
  users.profile = {};

  users.profile.get = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("users.profile.get", args);
  };

  users.profile.set = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("users.profile.set", args);
  };

  users.setActive = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("users.setActive", args);
  };

  users.setPhoto = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("users.setPhoto", args);
  };

  users.setPresence = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("users.setPresence", args);
  };

  return users as UsersAPIType;
};

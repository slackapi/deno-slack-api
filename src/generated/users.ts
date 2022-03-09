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
    return await client.call("users.conversations", args);
  };

  users.deletePhoto = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("users.deletePhoto", args);
  };

  users.getPresence = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("users.getPresence", args);
  };

  users.identity = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("users.identity", args);
  };

  users.info = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("users.info", args);
  };

  users.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("users.list", args);
  };

  users.lookupByEmail = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("users.lookupByEmail", args);
  };
  users.profile = {};

  users.profile.get = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("users.profile.get", args);
  };

  users.profile.set = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("users.profile.set", args);
  };

  users.setActive = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("users.setActive", args);
  };

  users.setPhoto = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("users.setPhoto", args);
  };

  users.setPresence = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("users.setPresence", args);
  };

  return users as UsersAPIType;
};

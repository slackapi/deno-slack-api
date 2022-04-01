import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type ConversationsAPIType = {
  archive: SlackAPIMethod;
  close: SlackAPIMethod;
  create: SlackAPIMethod;
  history: SlackAPIMethod;
  info: SlackAPIMethod;
  invite: SlackAPIMethod;
  join: SlackAPIMethod;
  kick: SlackAPIMethod;
  leave: SlackAPIMethod;
  list: SlackAPIMethod;
  mark: SlackAPIMethod;
  members: SlackAPIMethod;
  open: SlackAPIMethod;
  rename: SlackAPIMethod;
  replies: SlackAPIMethod;
  setPurpose: SlackAPIMethod;
  setTopic: SlackAPIMethod;
  unarchive: SlackAPIMethod;
};

export const ConversationsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const conversations: any = {};

  conversations.archive = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.archive", args);
  };

  conversations.close = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.close", args);
  };

  conversations.create = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.create", args);
  };

  conversations.history = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.history", args);
  };

  conversations.info = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.info", args);
  };

  conversations.invite = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.invite", args);
  };

  conversations.join = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.join", args);
  };

  conversations.kick = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.kick", args);
  };

  conversations.leave = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.leave", args);
  };

  conversations.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.list", args);
  };

  conversations.mark = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.mark", args);
  };

  conversations.members = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.members", args);
  };

  conversations.open = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.open", args);
  };

  conversations.rename = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.rename", args);
  };

  conversations.replies = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.replies", args);
  };

  conversations.setPurpose = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.setPurpose", args);
  };

  conversations.setTopic = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.setTopic", args);
  };

  conversations.unarchive = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("conversations.unarchive", args);
  };

  return conversations as ConversationsAPIType;
};

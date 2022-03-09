import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type ChatAPIType = {
  delete: SlackAPIMethod;
  deleteScheduledMessage: SlackAPIMethod;
  getPermalink: SlackAPIMethod;
  meMessage: SlackAPIMethod;
  postEphemeral: SlackAPIMethod;
  postMessage: SlackAPIMethod;
  scheduledMessages: {
    list: SlackAPIMethod;
  };
  scheduleMessage: SlackAPIMethod;
  unfurl: SlackAPIMethod;
  update: SlackAPIMethod;
};

export const ChatAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const chat: any = {};

  chat.delete = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("chat.delete", args);
  };

  chat.deleteScheduledMessage = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("chat.deleteScheduledMessage", args);
  };

  chat.getPermalink = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("chat.getPermalink", args);
  };

  chat.meMessage = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("chat.meMessage", args);
  };

  chat.postEphemeral = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("chat.postEphemeral", args);
  };

  chat.postMessage = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("chat.postMessage", args);
  };
  chat.scheduledMessages = {};

  chat.scheduledMessages.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("chat.scheduledMessages.list", args);
  };

  chat.scheduleMessage = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("chat.scheduleMessage", args);
  };

  chat.unfurl = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("chat.unfurl", args);
  };

  chat.update = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("chat.update", args);
  };

  return chat as ChatAPIType;
};

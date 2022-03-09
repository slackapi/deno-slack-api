import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type RemindersAPIType = {
  add: SlackAPIMethod;
  complete: SlackAPIMethod;
  delete: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPIMethod;
};

export const RemindersAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const reminders: any = {};

  reminders.add = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("reminders.add", args);
  };

  reminders.complete = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("reminders.complete", args);
  };

  reminders.delete = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("reminders.delete", args);
  };

  reminders.info = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("reminders.info", args);
  };

  reminders.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("reminders.list", args);
  };

  return reminders as RemindersAPIType;
};

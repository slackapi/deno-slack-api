import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type DndAPIType = {
  endDnd: SlackAPIMethod;
  endSnooze: SlackAPIMethod;
  info: SlackAPIMethod;
  setSnooze: SlackAPIMethod;
  teamInfo: SlackAPIMethod;
};

export const DndAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const dnd: any = {};

  dnd.endDnd = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("dnd.endDnd", args);
  };

  dnd.endSnooze = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("dnd.endSnooze", args);
  };

  dnd.info = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("dnd.info", args);
  };

  dnd.setSnooze = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("dnd.setSnooze", args);
  };

  dnd.teamInfo = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("dnd.teamInfo", args);
  };

  return dnd as DndAPIType;
};

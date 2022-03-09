import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type ViewsAPIType = {
  open: SlackAPIMethod;
  publish: SlackAPIMethod;
  push: SlackAPIMethod;
  update: SlackAPIMethod;
};

export const ViewsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const views: any = {};

  views.open = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("views.open", args);
  };

  views.publish = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("views.publish", args);
  };

  views.push = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("views.push", args);
  };

  views.update = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.call("views.update", args);
  };

  return views as ViewsAPIType;
};

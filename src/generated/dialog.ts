import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type DialogAPIType = {
  open: SlackAPIMethod;
};

export const DialogAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const dialog: any = {};

  dialog.open = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("dialog.open", args);
  };

  return dialog as DialogAPIType;
};

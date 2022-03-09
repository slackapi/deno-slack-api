import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type SearchAPIType = {
  messages: SlackAPIMethod;
};

export const SearchAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const search: any = {};

  search.messages = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("search.messages", args);
  };

  return search as SearchAPIType;
};

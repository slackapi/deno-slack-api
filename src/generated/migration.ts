import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type MigrationAPIType = {
  exchange: SlackAPIMethod;
};

export const MigrationAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const migration: any = {};

  migration.exchange = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("migration.exchange", args);
  };

  return migration as MigrationAPIType;
};

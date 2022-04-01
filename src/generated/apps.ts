import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type AppsAPIType = {
  event: {
    authorizations: {
      list: SlackAPIMethod;
    };
  };
  permissions: {
    info: SlackAPIMethod;
    request: SlackAPIMethod;
    resources: {
      list: SlackAPIMethod;
    };
    scopes: {
      list: SlackAPIMethod;
    };
  };
  uninstall: SlackAPIMethod;
};

export const AppsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const apps: any = {};
  apps.event = {};
  apps.event.authorizations = {};

  apps.event.authorizations.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("apps.event.authorizations.list", args);
  };
  apps.permissions = {};

  apps.permissions.info = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("apps.permissions.info", args);
  };

  apps.permissions.request = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("apps.permissions.request", args);
  };
  apps.permissions.resources = {};

  apps.permissions.resources.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("apps.permissions.resources.list", args);
  };
  apps.permissions.scopes = {};

  apps.permissions.scopes.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("apps.permissions.scopes.list", args);
  };

  apps.uninstall = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("apps.uninstall", args);
  };

  return apps as AppsAPIType;
};

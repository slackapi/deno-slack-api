import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type FilesAPIType = {
  comments: {
    delete: SlackAPIMethod;
  };
  delete: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPIMethod;
  remote: {
    add: SlackAPIMethod;
    info: SlackAPIMethod;
    list: SlackAPIMethod;
    remove: SlackAPIMethod;
    share: SlackAPIMethod;
    update: SlackAPIMethod;
  };
  revokePublicURL: SlackAPIMethod;
  sharedPublicURL: SlackAPIMethod;
  upload: SlackAPIMethod;
};

export const FilesAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const files: any = {};
  files.comments = {};

  files.comments.delete = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.comments.delete", args);
  };

  files.delete = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("files.delete", args);
  };

  files.info = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("files.info", args);
  };

  files.list = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("files.list", args);
  };
  files.remote = {};

  files.remote.add = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.remote.add", args);
  };

  files.remote.info = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.remote.info", args);
  };

  files.remote.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.remote.list", args);
  };

  files.remote.remove = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.remote.remove", args);
  };

  files.remote.share = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.remote.share", args);
  };

  files.remote.update = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.remote.update", args);
  };

  files.revokePublicURL = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.revokePublicURL", args);
  };

  files.sharedPublicURL = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("files.sharedPublicURL", args);
  };

  files.upload = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("files.upload", args);
  };

  return files as FilesAPIType;
};

import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type FilesAPIType = {
  comments: {
    delete: SlackAPIMethod;
  };
  completeUploadExternal: SlackAPIMethod;
  delete: SlackAPIMethod;
  getUploadURLExternal: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPICursorPaginatedMethod;
  remote: {
    add: SlackAPIMethod;
    info: SlackAPIMethod;
    list: SlackAPICursorPaginatedMethod;
    remove: SlackAPIMethod;
    share: SlackAPIMethod;
    update: SlackAPIMethod;
  };
  revokePublicURL: SlackAPIMethod;
  sharedPublicURL: SlackAPIMethod;
  upload: SlackAPIMethod;
};

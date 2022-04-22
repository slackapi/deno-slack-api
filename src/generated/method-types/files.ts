import { SlackAPIMethod } from "../../types.ts";

export type FilesAPIType = {
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

import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type FilesAPIType = {
  comments: {
    delete: SlackAPIMethod;
  };
  delete: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPIMethodCursorPaginated;
  remote: {
    add: SlackAPIMethod;
    info: SlackAPIMethod;
    list: SlackAPIMethodCursorPaginated;
    remove: SlackAPIMethod;
    share: SlackAPIMethod;
    update: SlackAPIMethod;
  };
  revokePublicURL: SlackAPIMethod;
  sharedPublicURL: SlackAPIMethod;
  upload: SlackAPIMethod;
};

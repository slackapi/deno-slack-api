import { SlackAPIMethod } from "../types.ts";

export type AppsAPIType = {
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
    users: {
      list: SlackAPIMethod;
      request: SlackAPIMethod;
    };
  };
  uninstall: SlackAPIMethod;
};

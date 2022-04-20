import { SlackAPIMethod } from "../../types.ts";

export type AppsAPIType = {
  connections: {
    open: SlackAPIMethod;
  };
  datastore: {
    delete: SlackAPIMethod;
    get: SlackAPIMethod;
    put: SlackAPIMethod;
    query: SlackAPIMethod;
  };
  event: {
    authorizations: {
      list: SlackAPIMethod;
    };
  };
  manifest: {
    create: SlackAPIMethod;
    delete: SlackAPIMethod;
    export: SlackAPIMethod;
    update: SlackAPIMethod;
    validate: SlackAPIMethod;
  };
  uninstall: SlackAPIMethod;
};

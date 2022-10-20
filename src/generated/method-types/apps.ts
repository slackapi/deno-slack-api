import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type AppsAPIType = {
  connections: {
    open: SlackAPIMethod;
  };
  event: {
    authorizations: {
      list: SlackAPIMethodCursorPaginated;
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

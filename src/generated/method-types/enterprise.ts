import type { SlackAPIMethod } from "../../types.ts";

export type EnterpriseAPIType = {
  auth: {
    idpconfig: {
      apply: SlackAPIMethod;
      get: SlackAPIMethod;
      list: SlackAPIMethod;
      remove: SlackAPIMethod;
      set: SlackAPIMethod;
    };
  };
};

import type { SlackAPIMethod } from "../../types.ts";

export type OauthAPIType = {
  access: SlackAPIMethod;
  v2: {
    access: SlackAPIMethod;
    exchange: SlackAPIMethod;
  };
};

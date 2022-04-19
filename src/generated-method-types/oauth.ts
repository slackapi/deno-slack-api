import { SlackAPIMethod } from "../types.ts";

export type OauthAPIType = {
  access: SlackAPIMethod;
  token: SlackAPIMethod;
  v2: {
    access: SlackAPIMethod;
  };
};

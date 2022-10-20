import type { SlackAPIMethod } from "../../types.ts";

export type OpenidAPIType = {
  connect: {
    token: SlackAPIMethod;
    userInfo: SlackAPIMethod;
  };
};

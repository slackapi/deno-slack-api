import type { SlackAPIMethod } from "../../types.ts";

export type CallsAPIType = {
  add: SlackAPIMethod;
  end: SlackAPIMethod;
  info: SlackAPIMethod;
  participants: {
    add: SlackAPIMethod;
    remove: SlackAPIMethod;
  };
  update: SlackAPIMethod;
};

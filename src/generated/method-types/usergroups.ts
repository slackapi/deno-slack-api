import { SlackAPIMethod } from "../../types.ts";

export type UsergroupsAPIType = {
  create: SlackAPIMethod;
  disable: SlackAPIMethod;
  enable: SlackAPIMethod;
  list: SlackAPIMethod;
  update: SlackAPIMethod;
  users: {
    list: SlackAPIMethod;
    update: SlackAPIMethod;
  };
};

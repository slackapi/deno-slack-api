import { SlackAPIMethod } from "../../types.ts";

export type UsersAPIType = {
  conversations: SlackAPIMethod;
  deletePhoto: SlackAPIMethod;
  getPresence: SlackAPIMethod;
  identity: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPIMethod;
  lookupByEmail: SlackAPIMethod;
  profile: {
    get: SlackAPIMethod;
    set: SlackAPIMethod;
  };
  setActive: SlackAPIMethod;
  setPhoto: SlackAPIMethod;
  setPresence: SlackAPIMethod;
};

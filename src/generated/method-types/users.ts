import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type UsersAPIType = {
  conversations: SlackAPIMethodCursorPaginated;
  deletePhoto: SlackAPIMethod;
  getPresence: SlackAPIMethod;
  identity: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPIMethodCursorPaginated;
  lookupByEmail: SlackAPIMethod;
  profile: {
    get: SlackAPIMethod;
    set: SlackAPIMethod;
  };
  setActive: SlackAPIMethod;
  setPhoto: SlackAPIMethod;
  setPresence: SlackAPIMethod;
};

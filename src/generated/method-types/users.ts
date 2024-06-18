import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type UsersAPIType = {
  conversations: SlackAPICursorPaginatedMethod;
  deletePhoto: SlackAPIMethod;
  discoverableContacts: {
    lookup: SlackAPIMethod;
  };
  getPresence: SlackAPIMethod;
  identity: SlackAPIMethod;
  info: SlackAPIMethod;
  list: SlackAPICursorPaginatedMethod;
  lookupByEmail: SlackAPIMethod;
  profile: {
    get: SlackAPIMethod;
    set: SlackAPIMethod;
  };
  setActive: SlackAPIMethod;
  setPhoto: SlackAPIMethod;
  setPresence: SlackAPIMethod;
};

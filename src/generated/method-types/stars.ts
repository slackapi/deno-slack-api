import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type StarsAPIType = {
  add: SlackAPIMethod;
  list: SlackAPICursorPaginatedMethod;
  remove: SlackAPIMethod;
};

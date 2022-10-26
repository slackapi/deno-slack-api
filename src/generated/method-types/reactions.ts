import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type ReactionsAPIType = {
  add: SlackAPIMethod;
  get: SlackAPIMethod;
  list: SlackAPICursorPaginatedMethod;
  remove: SlackAPIMethod;
};

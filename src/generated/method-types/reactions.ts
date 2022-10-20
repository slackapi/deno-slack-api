import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type ReactionsAPIType = {
  add: SlackAPIMethod;
  get: SlackAPIMethod;
  list: SlackAPIMethodCursorPaginated;
  remove: SlackAPIMethod;
};

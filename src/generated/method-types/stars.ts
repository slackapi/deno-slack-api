import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type StarsAPIType = {
  add: SlackAPIMethod;
  list: SlackAPIMethodCursorPaginated;
  remove: SlackAPIMethod;
};

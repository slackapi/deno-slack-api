import type { SlackAPIMethod } from "../../types.ts";

export type SearchAPIType = {
  all: SlackAPIMethod;
  files: SlackAPIMethod;
  messages: SlackAPIMethod;
};

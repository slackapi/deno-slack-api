import type { SlackAPIMethod } from "../../types.ts";

export type ViewsAPIType = {
  open: SlackAPIMethod;
  publish: SlackAPIMethod;
  push: SlackAPIMethod;
  update: SlackAPIMethod;
};

import type { SlackAPIMethod } from "../../types.ts";

export type RtmAPIType = {
  connect: SlackAPIMethod;
  start: SlackAPIMethod;
};

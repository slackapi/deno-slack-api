import { SlackAPIMethod } from "../../types.ts";

export type DndAPIType = {
  endDnd: SlackAPIMethod;
  endSnooze: SlackAPIMethod;
  info: SlackAPIMethod;
  setSnooze: SlackAPIMethod;
  teamInfo: SlackAPIMethod;
};

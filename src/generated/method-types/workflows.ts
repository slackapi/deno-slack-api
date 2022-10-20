import type { SlackAPIMethod } from "../../types.ts";

export type WorkflowsAPIType = {
  stepCompleted: SlackAPIMethod;
  stepFailed: SlackAPIMethod;
  updateStep: SlackAPIMethod;
};

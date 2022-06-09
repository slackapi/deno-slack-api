import { SlackAPIMethod } from "../../types.ts";

export type WorkflowsAPIType = {
  stepCompleted: SlackAPIMethod;
  stepFailed: SlackAPIMethod;
  triggers: {
    create: SlackAPIMethod;
  };
  updateStep: SlackAPIMethod;
};

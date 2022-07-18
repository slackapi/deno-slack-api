import { SlackAPIMethod } from "../../types.ts";

export type WorkflowsAPIType = {
  stepCompleted: SlackAPIMethod;
  stepFailed: SlackAPIMethod;
  triggers: {
    delete: SlackAPIMethod;
    update: SlackAPIMethod;
  };
  updateStep: SlackAPIMethod;
};

import { SlackAPIMethod } from "../../types.ts";

export type WorkflowsAPIType = {
  stepCompleted: SlackAPIMethod;
  stepFailed: SlackAPIMethod;
  triggers: {
    create: SlackAPIMethod;
    delete: SlackAPIMethod;
    update: SlackAPIMethod;
  };
  updateStep: SlackAPIMethod;
};

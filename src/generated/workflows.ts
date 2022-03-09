import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type WorkflowsAPIType = {
  stepCompleted: SlackAPIMethod;
  stepFailed: SlackAPIMethod;
  updateStep: SlackAPIMethod;
};

export const WorkflowsAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const workflows: any = {};

  workflows.stepCompleted = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("workflows.stepCompleted", args);
  };

  workflows.stepFailed = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("workflows.stepFailed", args);
  };

  workflows.updateStep = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.call("workflows.updateStep", args);
  };

  return workflows as WorkflowsAPIType;
};

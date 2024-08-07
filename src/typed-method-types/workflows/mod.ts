import type { TypedWorkflowsTriggersMethodTypes } from "./triggers/mod.ts";

export type TypedWorkflowsMethodTypes = {
  workflows: {
    triggers: TypedWorkflowsTriggersMethodTypes;
  };
};

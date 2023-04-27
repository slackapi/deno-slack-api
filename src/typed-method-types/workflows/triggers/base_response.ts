import { BaseTrigger, WorkflowSchema } from "./mod.ts";

export type BaseTriggerResponse<
  WorkflowDefinition extends WorkflowSchema,
> =
  & Pick<BaseTrigger<WorkflowDefinition>, "name" | "type" | "description">
  & {
    /** @description The trigger's internal uid */
    id: string;
    /** @description The metadata for the workflow */
    workflow: {
      /** @description the workflow function's internal uid */
      id: string;
      /** @description the workflow's internal uid */
      workflow_id: string;
      /** @description the workflow's callback_id */
      callback_id: string;
      /** @description the workflow's title */
      title: string;
      /** @description the workflow's description */
      description: string;
      /** @default "workflow" */
      type: string;
      /** @description the workflow's input parameters */
      input_parameters: {
        type: string;
        name: string;
        title: string;
        description?: string;
        is_required: boolean;
      }[];
      /** @description the workflow's output parameters */
      // deno-lint-ignore no-explicit-any
      output_parameters: Record<string, any>[];
      /** @description the app_id that the workflow belongs to */
      app_id: string;
      /** @description the app metadata that the workflow belongs to */
      app: {
        id: string;
        name: string;
        icons: {
          image_32: string;
          image_48: string;
          image_64: string;
          image_72: string;
          // deno-lint-ignore no-explicit-any
          [otherOptions: string]: any;
        };
        is_workflow_app: boolean;
        // deno-lint-ignore no-explicit-any
        [otherOptions: string]: any;
      };
      /** @description A timestamp of when the workflow was created */
      date_created: number;
      /** @description A timestamp of when the workflow was last updated */
      date_updated: number;
      /** @description A timestamp of when the workflow was deleted; this property can be 0 when it's not yet deleted. */
      date_deleted: number;
      // deno-lint-ignore no-explicit-any
      [otherOptions: string]: any;
    };
    /** @description The inputs provided to the workflow */
    inputs: {
      [key: string]: {
        value: string;
        locked: boolean;
        hidden: boolean;
      };
    };
    outputs: {
      [key: string]: {
        type: string;
        name: string;
        title: string;
        enum?: string[];
        is_hidden?: boolean;
        nullable?: boolean;
        is_required: boolean;
        description: string;
      };
    };
    available_data: {
      [key: string]: {
        type: string;
        name: string;
        title: string;
        enum?: string[];
        is_hidden?: boolean;
        nullable?: boolean;
        is_required: boolean;
        description: string;
      };
    };
    owning_team_id: string;
    /** @description A timestamp of when the trigger was created */
    date_created: number;
    /** @description A timestamp of when the workflow was last updated */
    date_updated: number;
    // deno-lint-ignore no-explicit-any
    [otherOptions: string]: any;
  };

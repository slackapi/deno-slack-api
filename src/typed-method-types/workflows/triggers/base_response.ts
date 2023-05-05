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
      // deno-lint-ignore no-explicit-any
      input_parameters: Record<string, any>[];
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
        // deno-lint-ignore no-explicit-any
        [otherOptions: string]: any;
      };
      /** @description A UNIX timestamp of when the workflow was created */
      date_created: number;
      /** @description A UNIX timestamp of when the workflow was last updated */
      date_updated: number;
      /** @description A UNIX timestamp of when the workflow was deleted; this property can be 0 when it's not yet deleted. */
      date_deleted: number;
      // deno-lint-ignore no-explicit-any
      [otherOptions: string]: any;
    };
    /** @description The inputs provided to the workflow */
    inputs: {
      // deno-lint-ignore no-explicit-any
      [key: string]: Record<string, any>;
    };
    /** @deprecated Trigger outputs will be removed. Use `available_data` instead */
    outputs: {
      [key: string]: {
        type: string;
        title: string;
        description: string;
        is_required: boolean;
        name: string;
        // deno-lint-ignore no-explicit-any
        [otherOptions: string]: any;
      };
    };
    available_data: {
      // deno-lint-ignore no-explicit-any
      [key: string]: Record<string, any>;
    };
    /** @description A timestamp of when the trigger was created */
    date_created: number;
    /** @description A timestamp of when the workflow was last updated */
    date_updated: number;
    // deno-lint-ignore no-explicit-any
    [otherOptions: string]: any;
  };

export type BaseTriggerResponse = {
  /** @description The trigger's internal uid */
  id: string;
  /** @description The metadata for the workflow */
  function: {
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
    // TODO: Add generic for inputs
    /** @description the workflow's input parameters */
    input_parameters: {
      // deno-lint-ignore no-explicit-any
      [key: string]: any;
    }[];
    // TODO: Add generic for outputs
    /** @description the workflow's output parameters */
    output_parameters: {
      // deno-lint-ignore no-explicit-any
      [key: string]: any;
    }[];
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
      };
    };
    /** @description A timestamp of when the workflow was last updated */
    date_updated: number;
  };
  // TODO: Type this based on a generic
  /** @description The inputs provided to the workflow */
  inputs: {
    [key: string]: {
      value: unknown;
      locked: boolean;
      hidden: boolean;
    };
  };
  outputs: {
    [key: string]: {
      type: string;
      title: string;
      description: string;
      is_required: boolean;
      name: string;
    };
  };
  /** @description A timestamp of when the trigger was created */
  date_created: number;
  /** @description A timestamp of when the workflow was last updated */
  date_updated: number;
};

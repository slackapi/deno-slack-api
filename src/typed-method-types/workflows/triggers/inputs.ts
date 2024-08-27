import type { NO_GENERIC_TITLE, WorkflowSchema } from "./mod.ts";

// deno-lint-ignore no-explicit-any
type EmptyObject = Record<any, never>;

/** The structure we expect that input parameters abide by */
export type InputParameterSchema = {
  // deno-lint-ignore no-explicit-any
  properties: Record<string, Record<string, any>>;
  required: (string | number)[];
};

interface BaseWorkflowInputs {
  /** @description The value of the workflow input parameter during workflow execution. Template variables may be used here. */
  value?: unknown;
  /** @description Set to `true` to allow the input parameter to be customizable, meaning its value is provided separately from the trigger. */
  customizable?: true;
}

type WorkflowInputValue = BaseWorkflowInputs & {
  // deno-lint-ignore no-explicit-any
  value: any;
  customizable?: never;
};

type WorkflowInputCustomizableValue = BaseWorkflowInputs & {
  customizable: true;
  value?: never;
};

/** The structure that must be provided to the workflow input to pass a value */
type WorkflowInput = WorkflowInputValue | WorkflowInputCustomizableValue;

/** The structure for when inputs are empty */
type EmptyInputs = {
  /** @description The inputs provided to the workflow */
  inputs?: never | EmptyObject;
};

/** The structure for when inputs are populated */
type PopulatedInputs<Params extends InputParameterSchema> = {
  /** @description The inputs provided to the workflow */
  inputs?: InputSchema<Params>;
};

/**
 * Determines which input parameters are required, and which are optional
 * Returns an object where any string can be set to a valid WorkflowInput value
 */
type InputSchema<Params extends InputParameterSchema> = Params extends
  InputParameterSchema ?
    & { [k in keyof Params["properties"]]?: WorkflowInput }
    & { [k in Params["required"][number]]: WorkflowInput }
  : Record<string, WorkflowInput>;

/**
 * Determines if the input object itself is required to pass to the trigger or not.
 * Returns an object where the input object is either required or optional.
 */
type WorkflowInputsType<Params extends InputParameterSchema> =
  // This intentionally avoids Distributive Conditional Types, so be careful removing any of the following square brackets
  // See https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types for more details
  [keyof Params["properties"]] extends [string]
    // Since never extends string, must check for no properties
    ? [keyof Params["properties"]] extends [never] ? EmptyInputs
    : Params["required"] extends Array<infer T> ? [T] extends [never]
        // If there are no required properties, inputs are optional
        ? PopulatedInputs<Params>
        // If there are required params, inputs are required
      : Required<PopulatedInputs<Params>>
      // If there are no inputs, don't allow them to be set
    : EmptyInputs
    : EmptyInputs;

/**
 * Determines whether or not a valid value was passed to the generic.
 * Returns an object where the input object is either required or optional.
 */
export type WorkflowInputs<WorkflowDefinition extends WorkflowSchema> =
  WorkflowDefinition["title"] extends NO_GENERIC_TITLE ? {
      /** @description The inputs provided to the workflow. Either `value` or `customizable` should be provided, but not both. */
      inputs?: Record<string, WorkflowInput>;
    }
    // This also intentionally avoids Distributive Conditional Types, so be careful removing the following square brackets
    : [keyof WorkflowDefinition["input_parameters"]] extends [string]
      ? WorkflowInputsType<NonNullable<WorkflowDefinition["input_parameters"]>>
    : EmptyInputs;

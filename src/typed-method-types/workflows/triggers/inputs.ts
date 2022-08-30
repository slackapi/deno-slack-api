import { NO_GENERIC_TITLE, WorkflowSchema } from "./mod.ts";

// deno-lint-ignore no-explicit-any
type EmptyObject = Record<any, never>;

/** This is the structure we expect that input parameters abide by */
export type InputParameterSchema = {
  // deno-lint-ignore no-explicit-any
  properties: Record<string, Record<string, any>>;
  required: (string | number)[];
};

/** This is the structure that must be provided to the workflow input to pass a value */
type WorkflowInput = {
  // deno-lint-ignore no-explicit-any
  value: any;
};

/** This is the structure for when inputs are empty */
type EmptyInputs = { inputs?: never | EmptyObject };

/** This is the structure for when inputs are populated */
type PopulatedInputs<Params extends InputParameterSchema> = {
  /** @description */
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
 * Determines if inputs are required to pass to the trigger or not.
 * Returns an object where inputs are either required or optional.
 */

type WorkflowInputsType<Params extends InputParameterSchema> =
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
 * Returns an object where inputs are either required or optional.
 */

export type WorkflowInputs<WorkflowDefinition extends WorkflowSchema> =
  WorkflowDefinition["title"] extends NO_GENERIC_TITLE
    ? { inputs?: Record<string, WorkflowInput> }
    : [keyof WorkflowDefinition["input_parameters"]] extends [string]
      ? WorkflowInputsType<NonNullable<WorkflowDefinition["input_parameters"]>>
    : EmptyInputs;

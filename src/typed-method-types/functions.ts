import type { BaseResponse } from "../types.ts";

type FunctionCompleteSuccessArgs = {
  // deno-lint-ignore no-explicit-any
  outputs: Record<string, any>;
  function_execution_id: string;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

type FunctionCompleteErrorArgs = {
  error: string;
  function_execution_id: string;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

type FunctionCompleteError = {
  (args: FunctionCompleteErrorArgs): Promise<BaseResponse>;
};

type FunctionCompleteSuccess = {
  (args: FunctionCompleteSuccessArgs): Promise<BaseResponse>;
};

export type TypedFunctionMethodTypes = {
  functions: {
    completeError: FunctionCompleteError;
    completeSuccess: FunctionCompleteSuccess;
  };
};

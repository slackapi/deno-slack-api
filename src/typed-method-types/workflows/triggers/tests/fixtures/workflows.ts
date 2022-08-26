export type ExampleWorkflow = {
  callback_id: "example";
  title: "Example";
};

export type NoInputWorkflow = ExampleWorkflow & {
  input_parameters: {
    properties: Record<never, never>;
    required: never[];
  };
};

export type OptionalInputWorkflow = ExampleWorkflow & {
  input_parameters: {
    properties: {
      optional: {
        type: "string";
      };
    };
    required: [];
  };
};

export type RequiredInputWorkflow = ExampleWorkflow & {
  input_parameters: {
    properties: {
      required: {
        type: "string";
      };
    };
    required: ["required"];
  };
};

export type MixedInputWorkflow = ExampleWorkflow & {
  input_parameters: {
    properties: {
      required: {
        type: "string";
      };
      optional: {
        type: "string";
      };
    };
    required: ["required"];
  };
};

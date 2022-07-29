export const TriggerFilterOperatorType = {
  AND: "AND",
  OR: "OR",
  NOT: "NOT",
} as const;

export type FilterType = {
  /** @example 1 */
  version: number;
  root: TriggerFilterDefinition;
};

type TriggerFilterDefinition =
  | TriggerFilterBooleanLogic
  | TriggerFilterComparator;

// Boolean Logic

type TriggerFilterBooleanLogic = {
  /**
   * @description The logical operator to run against your filter inputs
   * @example "AND" */
  operator: TriggerFilterOperatorTypeValues;
  /**  @description The filter inputs that contain filter statement definitions */
  inputs: [TriggerFilterDefinition, ...TriggerFilterDefinition[]];
  statement?: never;
};

type TriggerFilterOperatorTypeValues =
  typeof TriggerFilterOperatorType[keyof typeof TriggerFilterOperatorType];

// Comparator

type TriggerFilterComparator = {
  /** @description Comparison of values */
  statement: string;
  operator?: never;
  inputs?: never;
};

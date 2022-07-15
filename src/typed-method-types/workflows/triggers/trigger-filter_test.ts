import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { FilterType, TriggerFilterOperatorType } from "./trigger-filter.ts";

Deno.test("Trigger Filters can use a single statement", () => {
  const filter: FilterType = {
    root: {
      statement: "1 === 1",
    },
  };
  assertEquals(filter.root.statement, "1 === 1");
});

Deno.test("Trigger Filters can use simple logical operators", () => {
  const filter: FilterType = {
    root: {
      operator: "OR",
      inputs: [{
        statement: "1 === 2",
      }, {
        statement: "2 === 2",
      }],
    },
  };
  assertEquals(filter.root.operator, TriggerFilterOperatorType.OR);
  assertEquals(filter.root.inputs?.length, 2);
  filter.root.inputs?.forEach((input) => {
    assertExists(input.statement);
  });
});

Deno.test("Trigger Filters can use nested logical operators", () => {
  const filter: FilterType = {
    root: {
      operator: TriggerFilterOperatorType.OR,
      inputs: [{
        statement: "1 === 2",
      }, {
        statement: "2 === 3",
      }, {
        operator: "AND",
        inputs: [{
          statement: "3 === 3",
        }, {
          operator: "OR",
          inputs: [{
            statement: "3 === 4",
          }, {
            statement: "4 === 4",
          }],
        }],
      }],
    },
  };
  assertEquals(filter.root.operator, TriggerFilterOperatorType.OR);
  filter.root.inputs?.forEach((input) => {
    assertExists(input.statement || (input.operator && input.inputs));
    input.inputs?.forEach((nestedInput) => {
      assertExists(
        nestedInput.statement || (nestedInput.operator && nestedInput.inputs),
      );
    });
  });
});

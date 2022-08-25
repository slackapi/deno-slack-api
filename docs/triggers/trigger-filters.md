## Trigger Filters

A trigger filter is an object that can be added to a trigger on creation that will define the condition in which a trigger should execute its associated workflow. A trigger filter contains two parameters:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| version         | Yes           | the version of the filter as a number                                |
| root            | Yes           | A combination of boolean logic and comparator values                 |

The root parameter can contain a combination of BooleanLogic and Comparator objects with the following attributes:

Booleanlogic:

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| operator         | Yes           | The logical operator to run against your filter inputs (AND, OR, NOT)  |
| inputs            | Yes          | The filter inputs that contain filter statement definitions              |

Comparator: 

| Parameter name  | Required?     | Description                                                          |
| ----------------|:-------------:| ---------------------------------------------------------------------|
| statement         | Yes         | Comparison of values         |

## Usage Examples

A Trigger filter can use a single statement, which will execute when the statement is true

### Single Statement
A Trigger filter can use a single statement, which will execute when the statement is true
```ts
{
    version: 1,
    root: {
      statement: "1 === 1",
    },
}
```

### Logical Operators
A Trigger filter can also use simple logical operators to compare multiple statements and evaluate their outcome
```ts 
{
    version: 1,
    root: {
      operator: "OR",
      inputs: [{
        statement: "1 === 2",
      }, {
        statement: "2 === 2",
      }],
    },
  }
```

### Nested Logical Operators
A Trigger filter can make use of nested logical operators and statements for more complicated conditional evaluations
```ts
{
    version: 1,
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
  }
```


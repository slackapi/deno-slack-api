## Trigger filters

A trigger filter is an object that can be added to a trigger on creation that
will define the condition in which a trigger should execute its associated
workflow. A trigger filter contains two parameters:

| Parameter name | Required? | Description                                          |
| -------------- | :-------: | ---------------------------------------------------- |
| `version`      |    Yes    | The version of the filter as a number                |
| `root`         |    Yes    | A combination of boolean logic and comparator values |

The root parameter can contain a combination of `Boolean logic` and
`Conditional Expression` objects with the following attributes:

### `Boolean Logic`

| Parameter name | Required? | Description                                                                             |
| -------------- | :-------: | --------------------------------------------------------------------------------------- |
| `operator`     |    Yes    | The logical operator to run against your filter inputs (AND, OR, NOT) as a string value |
| `inputs`       |    Yes    | The filter inputs that contain filter statement definitions                             |

### `Conditional expressions`

| Parameter name | Required? | Description                                                                      |
| -------------- | :-------: | -------------------------------------------------------------------------------- |
| `statement`    |    Yes    | Comparison of values (uses one of the following operators: ">", "<", "==", "!= ) |

## Usage examples

Trigger filters can be composed of a single statement, or combine multiple
statements using different logical comparators. Follow along to see different
examples that build upon each other.

### Single statement

A trigger filter can use a single statement, which will execute when the
statement is true.

```ts
{
    version: 1,
    root: {
      statement: "{{data.value}} > 3",
    },
}
```

### Logical operators

A trigger filter can also use simple logical operators to compare multiple
statements and evaluate their outcome.

```ts
{
    version: 1,
    root: {
      operator: "OR",
      inputs: [{
        statement: "{{data.value}} == apple",
      }, {
        statement: "{{data.value}} != banana",
      }],
    },
  }
```

```ts
{
    version: 1,
    root: {
      operator: "AND",
      inputs: [{
        statement: "{{data.value}} > 2",
      }, {
        statement: "{{data.value}} < 5",
      }],
    },
  }
```

### Nested logical operators

A trigger filter can make use of nested logical operators and statements for
more complicated conditional evaluations.

```ts
{
    version: 1,
    root: {
      operator: TriggerFilterOperatorType.OR,
      inputs: [{
        statement: "{{data.user_id}} == User1",
      }, {
        statement: "{{data.user_id}} == User2",
      }, {
        operator: "AND",
        inputs: [{
          statement: "{{data.user_id}} != 3",
        }, {
          operator: "OR",
          inputs: [{
            statement: "{{data.value}} < 4",
          }, {
            statement: "{{data.value}} > 10",
          }],
        }],
      }],
    },
  }
```

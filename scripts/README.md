# Code Generation

A majority of the API client code in this project is generated from code in this directory.

For details, please read through the code under `scripts/src/generate.ts`, but a rough overview of how this works is:

1. `scripts/src/public-api-methods.ts` contains a list of API methods that code will be generated for.
2. API methods follow a dot-notation "node"-based format that can be interpreted as a kind of tree, e.g. `admin.apps.approve` or `admin.apps.requests.list`. Each word, separated by a period, in the full API "path" name can be considered as a node with zero or more child nodes. For example, building off the previous two API name examples provided, `admin` is a node with a child node `apps`, and `apps` is a node with two child nodes `approve` and `requests`. `approve` is a leaf node that is an API method, whereas `requests` is a node which itself has one further child node `list`; finally, `list` is a leaf node that is an invokable API method. In this way, we model the API using a recursive, node-based construct.
3. `scripts/src/api-method-nodes.ts` contains the code modeling this recursive node-based approach. This file also contains a hard-coded list of API method leaf node names that map to API methods that return lists of objects. In a majority of cases, these API methods support cursor-based pagination (however, there are a few exceptions to this rule, which is also hard-coded). In this way we are able to mix in different types that enhance or expand on the API method parameters and response properties to account for different patterns of using the APIs (such as cursor-based pagination). In the future, this approach can be used to model other kinds of generic patterns of use of Slack's APIs.

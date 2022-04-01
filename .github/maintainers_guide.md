# Maintainers Guide

This document describes tools, tasks and workflow that one needs to be familiar with in order to effectively maintain
this project. If you use this package within your own software as is but don't plan on modifying it, this guide is
**not** for you.

## Tools (optional)

All you need to work on this project is a recent version of [Deno](https://deno.land/)

## Tasks

### Building

* The majority of this library (`src/generated`) is generated code based off of a slack api spec file. Updating the web apis based off a new spec file can be done by getting the latest spec file from https://api.slack.com/web#spec or via the [slack-api-specs](https://github.com/slackapi/slack-api-specs) repo directly. 
* Place that file at `scripts/api_spec.json`, as the generation script currently expects it to live there on the file system.
* Run the command to regenerate the api methods code. Unit tests verifying every api method has a corresponding function created for it are also generated in this step.

Run this from the root of the project

```
./scripts/generate
```

### Testing

Test can be run directly with Deno.

```
deno test src
```


### Releasing

* Releases for this library are triggered off of tags. You should create a new GitHub Release, and use a new version that adheres to semantic versioning based on what's being release. Version tags should match the following pattern: `1.0.1` (no `v` preceding the number).
* Once the release has been created, a corresponding version will be avaliable on https://deno.land/x/deno_slack_api.

## Workflow

### Versioning and Tags

This project is versioned using [Semantic Versioning](http://semver.org/).

### Branches

> Describe any specific branching workflow. For example:
> `main` is where active development occurs.
> Long running branches named feature branches are occasionally created for collaboration on a feature that has a large scope (because everyone cannot push commits to another person's open Pull Request)

### Issue Management

Labels are used to run issues through an organized workflow. Here are the basic definitions:

*  `bug`: A confirmed bug report. A bug is considered confirmed when reproduction steps have been
   documented and the issue has been reproduced.
*  `enhancement`: A feature request for something this package might not already do.
*  `docs`: An issue that is purely about documentation work.
*  `tests`: An issue that is purely about testing work.
*  `needs feedback`: An issue that may have claimed to be a bug but was not reproducible, or was otherwise missing some information.
*  `discussion`: An issue that is purely meant to hold a discussion. Typically the maintainers are looking for feedback in this issues.
*  `question`: An issue that is like a support request because the user's usage was not correct.
*  `semver:major|minor|patch`: Metadata about how resolving this issue would affect the version number.
*  `security`: An issue that has special consideration for security reasons.
*  `good first contribution`: An issue that has a well-defined relatively-small scope, with clear expectations. It helps when the testing approach is also known.
*  `duplicate`: An issue that is functionally the same as another issue. Apply this only if you've linked the other issue by number.


**Triage** is the process of taking new issues that aren't yet "seen" and marking them with a basic
level of information with labels. An issue should have **one** of the following labels applied:
`bug`, `enhancement`, `question`, `needs feedback`, `docs`, `tests`, or `discussion`.

Issues are closed when a resolution has been reached. If for any reason a closed issue seems
relevant once again, reopening is great and better than creating a duplicate issue.

## Everything else

When in doubt, find the other maintainers and ask.

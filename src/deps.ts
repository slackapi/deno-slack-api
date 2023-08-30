// When changing std versions, ensure to check this list's `cli_to_std` section: https://raw.githubusercontent.com/denoland/dotland/main/versions.json
// Whatever minimum deno version we are recommending to users should be used to index into the above list to determine the maximum version of std
// we should use in our libraries.
// TODO: can the above be done automatically?

// Current recommended deno version: 1.31.1 (version of deno used by Run on Slack)
// Recommended stdlib version to use with above deno version: <= 0.178.0
export {
  createHttpError,
  HttpError,
} from "https://deno.land/std@0.178.0/http/http_errors.ts";

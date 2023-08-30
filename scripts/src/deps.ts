// These dependencies are for internal use only, for generation of API types.
// Maintainers generally run these scripts using recent versions of deno
// As a result, using the latest `std` lib version is generally OK.
export { pascalCase } from "https://deno.land/x/case@v2.1.0/mod.ts";
export { emptyDir, ensureDir } from "https://deno.land/std@0.185.0/fs/mod.ts";
export { parse } from "https://deno.land/std@0.185.0/flags/mod.ts";
export {
  createHttpError,
  HttpError,
} from "https://deno.land/std@0.185.0/http/http_errors.ts";

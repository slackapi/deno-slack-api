import { parseArgs } from "@std/cli/parse-args";
import { createHttpError } from "@std/http/http-errors";

// Regex for https://deno.land/x/deno_slack_api@x.x.x/
const API_REGEX =
  /(https:\/\/deno.land\/x\/deno_slack_api@[0-9]+\.[0-9]+\.[0-9]+\/)/g;

async function main() {
  const flags = parseArgs(Deno.args, {
    string: ["import-map", "api"],
    default: {
      "import-map": `${Deno.cwd()}/import_map.json`,
      "api": "../deno-slack-api/src/",
    },
  });

  const importMapJsonIn = await Deno.readTextFile(flags["import-map"]);
  console.log("`import_map.json` in content:", importMapJsonIn);

  const importMap = JSON.parse(importMapJsonIn);
  const denoSlackSdkValue = importMap["imports"]["deno-slack-sdk/"];

  const apiDepsInSdk = await apiDepsIn(denoSlackSdkValue);

  importMap["imports"]["deno-slack-api/"] = flags.api;
  importMap["scopes"] = {
    [denoSlackSdkValue]: [...apiDepsInSdk].reduce(
      (sdkScopes: Record<string, string>, apiDep: string) => {
        return {
          ...sdkScopes,
          [apiDep]: flags.api,
        };
      },
      {},
    ),
  };

  const importMapJsonOut = JSON.stringify(importMap);
  console.log("`import_map.json` out content:", importMapJsonOut);

  await Deno.writeTextFile(flags["import-map"], importMapJsonOut);
}

export async function apiDepsIn(moduleUrl: string): Promise<Set<string>> {
  const fileUrl = moduleUrl.endsWith("/")
    ? `${moduleUrl}deps.ts?source,file`
    : `${moduleUrl}/deps.ts?source,file`;
  const response = await fetch(fileUrl);

  if (!response.ok) {
    const err = createHttpError(response.status, await response.text(), {
      expose: true,
      headers: response.headers,
    });
    console.error(err);
    throw err;
  }

  const depsTs = await response.text();
  return new Set(depsTs.match(API_REGEX));
}

if (import.meta.main) main();

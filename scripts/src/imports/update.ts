import { parseArgs } from "@std/cli/parse-args";
import { createHttpError } from "@std/http/http-errors";
import { dirname, join, relative } from "@std/path";

// Regex for https://deno.land/x/deno_slack_api@x.x.x/
const API_REGEX =
  /(https:\/\/deno.land\/x\/deno_slack_api@[0-9]\.[0-9]+\.[0-9]+\/)/g;

async function main() {
  const flags = parseArgs(Deno.args, {
    string: ["import-file", "api"],
    default: {
      "import-file": `${Deno.cwd()}/import_map.json`,
      "api": "../deno-slack-api",
    },
  });

  const importFilePath = await Deno.realPath(flags["import-file"]);
  const importFileDir = dirname(importFilePath);
  const apiDir = await Deno.realPath(flags.api);

  const importFileJsonIn = await Deno.readTextFile(importFilePath);
  console.log("`import_map.json` in content:", importFileJsonIn);

  const importFile = JSON.parse(importFileJsonIn);
  const denoSlackSdkValue = importFile["imports"]["deno-slack-sdk/"];

  const apiDepsInSdk = await apiDepsIn(denoSlackSdkValue);

  const apiPackageSpecifier = join(
    relative(importFileDir, apiDir),
    "/src/",
  );

  importFile["imports"]["deno-slack-api/"] = apiPackageSpecifier;
  importFile["scopes"] = {
    [denoSlackSdkValue]: [...apiDepsInSdk].reduce(
      (sdkScopes: Record<string, string>, apiDep: string) => {
        return {
          ...sdkScopes,
          [apiDep]: apiPackageSpecifier,
        };
      },
      {},
    ),
  };

  const parentFileJsonIn = await Deno.readTextFile(
    join(apiDir, "/deno.jsonc"),
  );
  console.log("parent `import file` in content:", parentFileJsonIn);
  const parentImportFile = JSON.parse(parentFileJsonIn);
  for (const entry of Object.entries(parentImportFile["imports"])) {
    importFile["imports"][entry[0]] = entry[1];
  }

  const importMapJsonOut = JSON.stringify(importFile, null, 2);
  console.log("`import file` out content:", importMapJsonOut);

  await Deno.writeTextFile(flags["import-file"], importMapJsonOut);
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

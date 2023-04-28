import { parse } from "https://deno.land/std/flags/mod.ts";

const flags = parse(Deno.args, {
  string: ["import-map", "api"],
  default: {
    "import-map": `${Deno.cwd()}/import_map.json`,
    "api": "../deno-slack-api/src/",
  },
});

const importMap = JSON.parse(await Deno.readTextFile(flags["import-map"]));
importMap["imports"]["deno-slack-api/"] = flags.api;
importMap["scopes"] = {
  "https://deno.land/x/deno-slack-sdk/": {
    "deno-slack-api/": flags.api
  }
}
await Deno.writeTextFile(flags["import-map"], JSON.stringify(importMap));

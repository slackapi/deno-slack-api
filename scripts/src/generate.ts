import { pascalCase } from "https://deno.land/x/case@v2.1.0/mod.ts";
import { APIMethodNode } from "./api-method-node.ts";

const SPEC_FILE_URL =
  "https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2_without_examples.json";

const run = async () => {
  const response = await fetch(SPEC_FILE_URL);
  const spec = await response.json();

  // Root node
  const api = new APIMethodNode("", false, "", true);

  const methods = Object.keys(spec.paths).map((path) => path.substring(1));
  methods.sort((a, b) => a.localeCompare(b));

  for (const method of methods) {
    // Start with the root api node
    let currentNode = api;

    const parts = method.split(".");

    parts.forEach((partName, idx) => {
      let partNode = currentNode.findChildByName(partName);
      if (!partNode) {
        // If this is the last part, then it's the method
        const isMethod = idx === parts.length - 1;
        const nodePath = parts.slice(0, idx + 1).join(".");

        partNode = new APIMethodNode(partName, isMethod, nodePath, idx === 0);
        currentNode.addChild(partNode);
      }

      currentNode = partNode;
    });
  }

  // Cycle through each top level api group
  for (const groupNode of api.childNodes) {
    // Generate the code for this group api
    const groupCode = getGroupCode(groupNode);
    // write the code to a group-specific file
    await Deno.writeTextFile(
      `./src/generated-method-types/${groupNode.name}.ts`,
      groupCode,
    );
    console.log(`wrote api file: ${groupNode.name}`);
  }

  // Write top level file that builds api
  const mainAPITypeCode = getMainAPICode(api);
  await Deno.writeTextFile(
    "./src/generated-method-types/mod.ts",
    mainAPITypeCode,
  );
  console.log("wrote main api file: mod.ts");

  // Write generated test file to verify all methods are accounted for
  const testCode = getTestCode(api);
  await Deno.writeTextFile(
    "./src/generated-method-types/api_method_types_test.ts",
    testCode,
  );
  console.log("wrote api test code: api_method_types_test.ts");
};

run();

const getMainAPICode = (api: APIMethodNode): string => {
  const imports = api.childNodes.map((node) => {
    const groupAPITypeName = `${pascalCase(node.name)}APIType`;
    return `import { type ${groupAPITypeName} } from "./${node.name}.ts";`;
  }).join("\n");

  const apiTypeMixins = api.childNodes.map((node) => {
    const groupAPIName = pascalCase(node.name);
    return `${node.name}: ${groupAPIName}APIType,`;
  }).join("\n");

  return `
${imports}

export type SlackAPIMethodsType = {
  ${apiTypeMixins}
};
`;
};

const getGroupCode = (groupNode: APIMethodNode) => {
  const groupCode = `
  import { SlackAPIMethod } from "../types.ts";

  ${groupNode.getTypesCode()}
`;

  return groupCode;
};

const getTestCode = (api: APIMethodNode) => {
  let assertions = "";
  const visitMethodNodes = (node: APIMethodNode) => {
    if (node.isMethod) {
      assertions +=
        `assertEquals(typeof client.${node.nodePath}, "function");\n`;
    }
    for (const child of node.childNodes) {
      visitMethodNodes(child);
    }
  };

  visitMethodNodes(api);

  return `
import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { SlackAPI } from "../mod.ts";

Deno.test("SlackAPIMethodsType generated types", () => {
  const client = SlackAPI("test-token");

  ${assertions}
});

`;
};

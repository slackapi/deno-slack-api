import { toPascalCase } from "@std/text/to-pascal-case";
import { emptyDir, ensureDir } from "@std/fs";
import { APIMethodNode } from "./api-method-node.ts";
import { getPublicAPIMethods } from "./public-api-methods.ts";

const run = async () => {
  const methods = getPublicAPIMethods();

  // Root node
  const api = new APIMethodNode("", false, "", true);

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

  const outputDir = "./src/generated/method-types/";

  await ensureDir(outputDir);
  await emptyDir(outputDir);

  // Cycle through each top level api group
  for (const groupNode of api.childNodes) {
    // Generate the code for this group api
    const groupCode = getGroupCode(groupNode);
    // write the code to a group-specific file
    await Deno.writeTextFile(
      `${outputDir}${groupNode.name}.ts`,
      groupCode,
    );
    console.log(`wrote api file: ${groupNode.name}`);
  }

  // Write top level file that builds api
  const mainAPITypeCode = getMainAPICode(api);
  await Deno.writeTextFile(
    `${outputDir}mod.ts`,
    mainAPITypeCode,
  );
  console.log("wrote main api file: mod.ts");

  // Write generated test file to verify all methods are accounted for
  const testCode = getTestCode(api);
  await Deno.writeTextFile(
    `${outputDir}/api_method_types_test.ts`,
    testCode,
  );
  console.log("wrote api test code: api_method_types_test.ts");
};

run();

const getMainAPICode = (api: APIMethodNode): string => {
  const imports = api.childNodes.map((node) => {
    const groupAPITypeName = `${toPascalCase(node.name)}APIType`;
    return `import { type ${groupAPITypeName} } from "./${node.name}.ts";`;
  }).join("\n");

  const apiTypeMixins = api.childNodes.map((node) => {
    const groupAPIName = toPascalCase(node.name);
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
  let imports = null;
  const groupCode = `
  ${groupNode.getTypesCode()}
`;
  if (groupCode.match(/SlackAPIMethod[,;]/)) {
    imports = "{ SlackAPIMethod";
  }
  if (groupCode.match(/SlackAPICursorPaginatedMethod[,;]/)) {
    if (imports !== null) {
      imports += ", SlackAPICursorPaginatedMethod";
    } else {
      imports = "{ SlackAPICursorPaginatedMethod";
    }
  }
  imports += " }";

  return `import type ${imports} from "../../types.ts";\n${groupCode}`;
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
import { assertEquals } from "@std/testing/assert";
import { SlackAPI } from "../../mod.ts";

Deno.test("SlackAPIMethodsType generated types", () => {
  const client = SlackAPI("test-token");

  ${assertions}
});

`;
};

import { pascalCase } from "https://deno.land/x/case@v2.1.0/mod.ts";
import { APIMethodNode } from "./api-method-node.ts";

const run = async () => {
  const text = await Deno.readTextFile("./scripts/api_spec.json");
  const spec = JSON.parse(text);

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
    await Deno.writeTextFile(`./src/generated/${groupNode.name}.ts`, groupCode);
    console.log(`wrote api file: ${groupNode.name}`);
  }

  // Write top level file that builds api
  const mainAPICode = getMainAPICode(api);
  await Deno.writeTextFile("./src/generated/mod.ts", mainAPICode);
  console.log("wrote main api file: mod.ts");

  // Write generated test file to verify all methods are accounted for
  const testCode = getTestCode(api);
  await Deno.writeTextFile("./src/generated/api_test.ts", testCode);
  console.log("wrote api test code: api_test.ts");
};

run();

const getMainAPICode = (api: APIMethodNode): string => {
  const imports = api.childNodes.map((node) => {
    const groupAPIName = pascalCase(node.name);
    return `import { ${groupAPIName}API } from "./${node.name}.ts";`;
  }).join("\n");

  const apiMixins = api.childNodes.map((node) => {
    const groupAPIName = pascalCase(node.name);
    return `${node.name}: ${groupAPIName}API(client),`;
  }).join("\n");

  return `
import { BaseSlackAPIClient } from "../base-client.ts";
import { SlackAPIOptions } from "../types.ts";
${imports}

export const SlackAPI = (token?: string, options: SlackAPIOptions = {}) => {
  const client = new BaseSlackAPIClient(token, options);

  return {
    apiCall: client.apiCall.bind(client),
    response: client.response.bind(client),
    ${apiMixins}
  };
};
`;
};

const getNodeMethodsCode = (node: APIMethodNode) => {
  let code = "";

  function walkNodes(node: APIMethodNode) {
    code += `${node.getGeneratedCode()}\n`;
    node.childNodes.forEach(walkNodes);
  }

  walkNodes(node);

  return code;
};

const getGroupCode = (groupNode: APIMethodNode) => {
  const groupApiName = pascalCase(groupNode.name);
  const groupTypeName = `${groupApiName}APIType`;

  const groupType = groupNode.getTypesCode();
  const methodsCode = getNodeMethodsCode(groupNode);

  const groupCode = `
  import { BaseSlackAPIClient } from "../base-client.ts";
  import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

  ${groupType}

  export const ${groupApiName}API = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  ${methodsCode}

  return ${groupNode.name} as ${groupTypeName};
  };
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

Deno.test("SlackAPI", () => {
  const client = SlackAPI();

  ${assertions}
});

`;
};

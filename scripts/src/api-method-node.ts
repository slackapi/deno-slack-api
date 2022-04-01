import { pascalCase } from "https://deno.land/x/case@v2.1.0/mod.ts";

export class APIMethodNode {
  name = "";
  childNodes: APIMethodNode[] = [];
  isMethod = false;
  nodePath = "";
  isRootNode = false;

  constructor(
    name: string,
    isMethod: boolean,
    nodePath: string,
    isRootNode: boolean,
  ) {
    this.name = name;
    this.isMethod = isMethod;
    this.nodePath = nodePath;
    this.isRootNode = isRootNode;
  }

  findChildByName(name: string) {
    return this.childNodes.find((node) => {
      return node.name === name;
    });
  }

  addChild(node: APIMethodNode) {
    this.childNodes.push(node);
  }

  // Generates the API Type definition code - should be called at the top level api group level
  getTypesCode(): string {
    let code = "";
    if (this.isRootNode) {
      const typeName = `${pascalCase(this.name)}APIType`;
      code += `type ${typeName} = {\n`;
    }

    // api method with no child nodes
    if (this.isMethod && this.childNodes.length === 0) {
      code += `${this.name}: SlackAPIMethod,\n`;
    }

    // api method with child nodes
    if (this.isMethod && this.childNodes.length > 0) {
      code += `${this.name}: SlackAPIMethod & {\n`;
    }

    // api node that is not a method, but has child nodes
    if (!this.isMethod && this.childNodes.length > 0 && !this.isRootNode) {
      code += `${this.name}: {\n`;
    }

    for (const child of this.childNodes) {
      code += child.getTypesCode();
    }

    // api method with child nodes
    if (this.isMethod && this.childNodes.length > 0) {
      code += `};\n`;
    }

    // api node that is not a method, but has child nodes
    if (!this.isMethod && this.childNodes.length > 0 && !this.isRootNode) {
      code += `};\n`;
    }

    if (this.isRootNode) {
      code += "};\n";
    }

    return code;
  }

  getGeneratedCode = () => {
    // Handle case of the root api node
    if (!this.nodePath || !this.name) {
      return;
    }

    if (!this.isMethod) {
      if (this.isRootNode) {
        return `const ${this.nodePath}: any = {};`;
      }

      return `${this.nodePath} = {};`;
    }

    return `
${this.nodePath} = async ( args: SlackAPIMethodArgs ): Promise<BaseResponse> => {
  return await client.apiCall("${this.nodePath}", args);
};`;
  };
}

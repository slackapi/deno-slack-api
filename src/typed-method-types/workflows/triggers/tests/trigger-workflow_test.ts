import { SlackAPI } from "../../../../mod.ts";
import {
  type _format,
  assert,
  assertEquals,
} from "https://deno.land/std@0.99.0/testing/asserts.ts";
import type {
  CustomizableInputWorkflow,
  ExampleWorkflow,
  MixedInputWorkflow,
  NoInputWorkflow,
  OptionalCustomizableInputWorkflow,
  OptionalInputWorkflow,
  RequiredInputWorkflow,
} from "./fixtures/workflows.ts";
import * as mf from "https://deno.land/x/mock_fetch@0.3.0/mod.ts";
import { shortcut_response } from "./fixtures/sample_responses.ts";
import type { Trigger } from "../../../../types.ts";

Deno.test("Trigger inputs are powered by generics", async (t) => {
  const client = SlackAPI("");
  mf.install();
  mf.mock("POST@/api/workflows.triggers.create", (req: Request) => {
    assertEquals(
      req.url,
      "https://slack.com/api/workflows.triggers.create",
    );
    return new Response(JSON.stringify(shortcut_response));
  });
  mf.mock("POST@/api/workflows.triggers.update", (req: Request) => {
    assertEquals(
      req.url,
      "https://slack.com/api/workflows.triggers.update",
    );
    return new Response(JSON.stringify(shortcut_response));
  });

  await t.step("no generics required", async (t) => {
    await t.step("catches invalid workflow strings", async () => {
      const _trigger: Trigger = {
        name: "TEST",
        type: "shortcut",
        //@ts-expect-error invalid workflow string
        workflow: "example",
      };
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        //@ts-expect-error invalid workflow string
        workflow: "example",
      });
      assert(true);
    });

    await t.step("allows no inputs to be set", async () => {
      const _: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
      };
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
      });
      assert(true);
    });

    await t.step("allows empty inputs to be set", async () => {
      const _: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: {},
      };
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: {},
      });

      assert(true);
    });

    await t.step("allows populated inputs to be set", async () => {
      const _: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: { sample: { value: "test" } },
      };
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: { sample: { value: "test" } },
      });

      assert(true);
    });

    await t.step("catches error if inputs are wrong", async () => {
      const _: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        // @ts-expect-error sample cant be set to a string
        inputs: { sample: "test" },
      };
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        // @ts-expect-error sample cant be set to a string
        inputs: { sample: "test" },
      });

      assert(true);
    });

    await t.step("with trigger update", async () => {
      const _: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        trigger_id: "example",
      };
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        trigger_id: "example",
      });

      assert(true);
    });
  });

  await t.step("with workflow generic", async (t) => {
    await t.step("catches invalid workflow string", async () => {
      const _: Trigger<ExampleWorkflow> = {
        name: "TEST",
        type: "shortcut",
        // @ts-expect-error invalid workflow string
        workflow: "example",
      };
      await client.workflows.triggers.create<ExampleWorkflow>({
        name: "TEST",
        type: "shortcut",
        // @ts-expect-error invalid workflow string
        workflow: "example",
      });

      assert(true);
    });

    await t.step("handles workflow with no defined input params", async (t) => {
      await t.step("allows no inputs to be set", async () => {
        const _: Trigger<ExampleWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        };
        await client.workflows.triggers.create<ExampleWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        });

        assert(true);
      });

      await t.step("allows empty inputs to be set", async () => {
        const _: Trigger<ExampleWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        };
        await client.workflows.triggers.create<ExampleWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        });

        assert(true);
      });

      await t.step("catches populated inputs being passed", async () => {
        const _: Trigger<ExampleWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error inputs shouldn't be set
          inputs: { sample: { value: "test" } },
        };
        await client.workflows.triggers.create<ExampleWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error inputs shouldn't be set
          inputs: { sample: { value: "test" } },
        });

        assert(true);
      });
    });

    await t.step("handles workflow with no defined properties", async (t) => {
      await t.step("allows no inputs to be set", async () => {
        const _: Trigger<NoInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        };
        await client.workflows.triggers.create<NoInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        });

        assert(true);
      });

      await t.step("allows empty inputs to be set", async () => {
        const _: Trigger<NoInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        };
        await client.workflows.triggers.create<NoInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        });

        assert(true);
      });

      await t.step("catches populated inputs being passed", async () => {
        const _: Trigger<NoInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error inputs shouldn't be set
          inputs: { sample: { value: "test" } },
        };
        await client.workflows.triggers.create<NoInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error inputs shouldn't be set
          inputs: { sample: { value: "test" } },
        });

        assert(true);
      });
    });

    await t.step("handles workflow with only optional inputs", async (t) => {
      await t.step("allows no inputs to be set", async () => {
        const _: Trigger<OptionalInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        };
        await client.workflows.triggers.create<OptionalInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        });

        assert(true);
      });

      await t.step("allows empty inputs to be set", async () => {
        const _: Trigger<OptionalInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        };
        await client.workflows.triggers.create<OptionalInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        });

        assert(true);
      });

      await t.step("allows optional inputs to be set", async () => {
        const _: Trigger<OptionalInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { optional: { value: "test" } },
        };
        await client.workflows.triggers.create<OptionalInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { optional: { value: "test" } },
        });

        assert(true);
      });

      await t.step("catches error if inputs are wrong", async () => {
        const _: Trigger<OptionalInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error sample cant be set to a string
          inputs: { sample: "test" },
        };
        await client.workflows.triggers.create<OptionalInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error sample cant be set to a string
          inputs: { sample: "test" },
        });

        assert(true);
      });
    });

    await t.step("handles workflow with only required inputs", async (t) => {
      await t.step("requires inputs to be set", async () => {
        const _: Trigger<RequiredInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        };
        await client.workflows.triggers.create<RequiredInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        });

        assert(true);
      });

      await t.step("catches empty inputs being set", async () => {
        const _: Trigger<RequiredInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          //@ts-expect-error cant pass empty object
          inputs: {},
        };
        await client.workflows.triggers.create<RequiredInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          //@ts-expect-error cant pass empty object
          inputs: {},
        });

        assert(true);
      });

      await t.step("allows required inputs to be set", async () => {
        const _: Trigger<RequiredInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        };
        await client.workflows.triggers.create<RequiredInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        });

        assert(true);
      });
    });

    await t.step("handles workflow with customizable inputs", async (t) => {
      await t.step("allows customizable input to be set", async () => {
        const _: Trigger<CustomizableInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { customizable: { customizable: true } },
        };
        await client.workflows.triggers.create<CustomizableInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { customizable: { customizable: true } },
        });
        assert(true);
      });

      await t.step("allows optional customizable input to be set", async () => {
        const _: Trigger<CustomizableInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { customizable: { customizable: true } },
        };
        await client.workflows.triggers.create<CustomizableInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { customizable: { customizable: true } },
        });
        assert(true);
      });

      await t.step(
        "allows empty optional customizable inputs to be set",
        async () => {
          const _: Trigger<OptionalCustomizableInputWorkflow> = {
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {},
          };
          await client.workflows.triggers.create<
            OptionalCustomizableInputWorkflow
          >({
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {},
          });
          assert(true);
        },
      );

      await t.step(
        "catches if customizable and value are set",
        async () => {
          const _: Trigger<CustomizableInputWorkflow> = {
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              //@ts-expect-error invalid WorkflowInput type
              customizable: { value: "string", customizable: true },
            },
          };
          await client.workflows.triggers.create<CustomizableInputWorkflow>({
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              //@ts-expect-error invalid WorkflowInput type
              customizable: { value: "string", customizable: true },
            },
          });
          assert(true);
        },
      );

      await t.step(
        "catches if customizable is not a boolean",
        async () => {
          const _: Trigger<CustomizableInputWorkflow> = {
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              //@ts-expect-error customizable must be a boolean
              customizable: { customizable: "incorrect type" },
            },
          };
          await client.workflows.triggers.create<CustomizableInputWorkflow>({
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              //@ts-expect-error customizable must be a boolean
              customizable: { customizable: "incorrect type" },
            },
          });
          assert(true);
        },
      );

      await t.step(
        "catches if customizable is false",
        async () => {
          const _: Trigger<CustomizableInputWorkflow> = {
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              //@ts-expect-error customizable must be true
              customizable: { customizable: false },
            },
          };
          await client.workflows.triggers.create<CustomizableInputWorkflow>({
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              //@ts-expect-error customizable must be true
              customizable: { customizable: false },
            },
          });
          assert(true);
        },
      );
    });

    await t.step("handles workflow with a mix of inputs", async (t) => {
      await t.step("requires inputs to be set", async () => {
        const _: Trigger<MixedInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        };
        await client.workflows.triggers.create<MixedInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        });
        assert(true);
      });

      await t.step("catches empty inputs being set", async () => {
        const _: Trigger<MixedInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          //@ts-expect-error cant pass empty object
          inputs: {},
        };
        await client.workflows.triggers.create<MixedInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          //@ts-expect-error cant pass empty object
          inputs: {},
        });

        assert(true);
      });

      await t.step("allows required inputs to be set", async () => {
        const _: Trigger<MixedInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        };
        await client.workflows.triggers.create<MixedInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        });

        assert(true);
      });

      await t.step(
        "allows required and optional inputs to be set",
        async () => {
          const _: Trigger<MixedInputWorkflow> = {
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              required: { value: "test" },
              optional: { value: "test2" },
            },
          };
          await client.workflows.triggers.create<MixedInputWorkflow>({
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              required: { value: "test" },
              optional: { value: "test2" },
            },
          });
          assert(true);
        },
      );
    });

    await t.step("with trigger update", async () => {
      await client.workflows.triggers.update<ExampleWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        trigger_id: "example",
      });
      assert(true);
    });
  });
  mf.reset();
});

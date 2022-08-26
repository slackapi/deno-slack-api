import { SlackAPI } from "../../../../mod.ts";
import {
  _format,
  assert,
  assertEquals,
} from "https://deno.land/std@0.99.0/testing/asserts.ts";
import type {
  ExampleWorkflow,
  MixedInputWorkflow,
  NoInputWorkflow,
  OptionalInputWorkflow,
  RequiredInputWorkflow,
} from "./fixtures/workflows.ts";
import * as mf from "https://deno.land/x/mock_fetch@0.3.0/mod.ts";
import { shortcut_response } from "./fixtures/sample_responses.ts";
import { Trigger } from "../../../../types.ts";

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
      const trigger: Trigger = {
        name: "TEST",
        type: "shortcut",
        //@ts-expect-error invalid workflow string
        workflow: "example",
      };
      await client.workflows.triggers.create(trigger);
      assert(true);
    });

    await t.step("allows no inputs to be set", async () => {
      const trigger: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
      };
      await client.workflows.triggers.create(trigger);
      assert(true);
    });

    await t.step("allows empty inputs to be set", async () => {
      const trigger: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: {},
      };
      await client.workflows.triggers.create(trigger);

      assert(true);
    });

    await t.step("allows populated inputs to be set", async () => {
      const trigger: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: { sample: { value: "test" } },
      };
      await client.workflows.triggers.create(trigger);

      assert(true);
    });

    await t.step("catches error if inputs are wrong", async () => {
      const trigger: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        // @ts-expect-error sample cant be set to a string
        inputs: { sample: "test" },
      };
      await client.workflows.triggers.create(trigger);

      assert(true);
    });

    await t.step("with trigger update", async () => {
      const trigger: Trigger = {
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        trigger_id: "example",
      };
      await client.workflows.triggers.create(trigger);

      assert(true);
    });
  });

  await t.step("with workflow generic", async (t) => {
    await t.step("catches invalid workflow string", async () => {
      const trigger: Trigger<ExampleWorkflow> = {
        name: "TEST",
        type: "shortcut",
        // @ts-expect-error invalid workflow string
        workflow: "example",
      };
      await client.workflows.triggers.create<ExampleWorkflow>(trigger);

      assert(true);
    });

    await t.step("handles workflow with no defined input params", async (t) => {
      await t.step("allows no inputs to be set", async () => {
        const trigger: Trigger<ExampleWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        };
        await client.workflows.triggers.create<ExampleWorkflow>(trigger);

        assert(true);
      });

      await t.step("allows empty inputs to be set", async () => {
        const trigger: Trigger<ExampleWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        };
        await client.workflows.triggers.create<ExampleWorkflow>(trigger);

        assert(true);
      });

      await t.step("catches populated inputs being passed", async () => {
        const trigger: Trigger<ExampleWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error inputs shouldn't be set
          inputs: { sample: { value: "test" } },
        };
        await client.workflows.triggers.create<ExampleWorkflow>(trigger);

        assert(true);
      });
    });

    await t.step("handles workflow with no defined properties", async (t) => {
      await t.step("allows no inputs to be set", async () => {
        const trigger: Trigger<NoInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        };
        await client.workflows.triggers.create<NoInputWorkflow>(trigger);

        assert(true);
      });

      await t.step("allows empty inputs to be set", async () => {
        const trigger: Trigger<NoInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        };
        await client.workflows.triggers.create<NoInputWorkflow>(trigger);

        assert(true);
      });

      await t.step("catches populated inputs being passed", async () => {
        const trigger: Trigger<NoInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error inputs shouldn't be set
          inputs: { sample: { value: "test" } },
        };
        await client.workflows.triggers.create<NoInputWorkflow>(trigger);

        assert(true);
      });
    });

    await t.step("handles workflow with only optional inputs", async (t) => {
      await t.step("allows no inputs to be set", async () => {
        const trigger: Trigger<OptionalInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        };
        await client.workflows.triggers.create<OptionalInputWorkflow>(trigger);

        assert(true);
      });

      await t.step("allows empty inputs to be set", async () => {
        const trigger: Trigger<OptionalInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: {},
        };
        await client.workflows.triggers.create<OptionalInputWorkflow>(trigger);

        assert(true);
      });

      await t.step("allows optional inputs to be set", async () => {
        const trigger: Trigger<OptionalInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { optional: { value: "test" } },
        };
        await client.workflows.triggers.create<OptionalInputWorkflow>(trigger);

        assert(true);
      });

      await t.step("catches error if inputs are wrong", async () => {
        const trigger: Trigger<OptionalInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error sample cant be set to a string
          inputs: { sample: "test" },
        };
        await client.workflows.triggers.create<OptionalInputWorkflow>(trigger);

        assert(true);
      });
    });

    await t.step("handles workflow with only required inputs", async (t) => {
      await t.step("requires inputs to be set", async () => {
        const trigger: Trigger<RequiredInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        };
        await client.workflows.triggers.create<RequiredInputWorkflow>(trigger);

        assert(true);
      });

      await t.step("catches empty inputs being set", async () => {
        const trigger: Trigger<RequiredInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          //@ts-expect-error cant pass empty object
          inputs: {},
        };
        await client.workflows.triggers.create<RequiredInputWorkflow>(trigger);

        assert(true);
      });

      await t.step("allows required inputs to be set", async () => {
        const trigger: Trigger<RequiredInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        };
        await client.workflows.triggers.create<RequiredInputWorkflow>(trigger);

        assert(true);
      });
    });

    await t.step("handles workflow with a mix of inputs", async (t) => {
      await t.step("requires inputs to be set", async () => {
        const trigger: Trigger<MixedInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        };
        await client.workflows.triggers.create<MixedInputWorkflow>(trigger);
        assert(true);
      });

      await t.step("catches empty inputs being set", async () => {
        const trigger: Trigger<MixedInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          //@ts-expect-error cant pass empty object
          inputs: {},
        };
        await client.workflows.triggers.create<MixedInputWorkflow>(trigger);

        assert(true);
      });

      await t.step("allows required inputs to be set", async () => {
        const trigger: Trigger<MixedInputWorkflow> = {
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          inputs: { required: { value: "test" } },
        };
        await client.workflows.triggers.create<MixedInputWorkflow>(trigger);

        assert(true);
      });

      await t.step(
        "allows required and optional inputs to be set",
        async () => {
          const trigger: Trigger<MixedInputWorkflow> = {
            name: "TEST",
            type: "shortcut",
            workflow: "#/workflows/example",
            inputs: {
              required: { value: "test" },
              optional: { value: "test2" },
            },
          };
          await client.workflows.triggers.create<MixedInputWorkflow>(trigger);
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

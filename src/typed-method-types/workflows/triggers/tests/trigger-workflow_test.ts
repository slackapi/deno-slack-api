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

Deno.test("Trigger inputs are powered by generics", async (t) => {
  mf.install(); // mock out calls to `fetch`
  const client = SlackAPI("");
  mf.mock("POST@/api/workflows.triggers.create", (req: Request) => {
    assertEquals(
      req.url,
      "https://slack.com/api/workflows.triggers.create",
    );
    return new Response(JSON.stringify(shortcut_response));
  });

  await t.step("no generics required", async (t) => {
    await t.step("allows no inputs to be set", async () => {
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
      });
      assert(true);
    });

    await t.step("allows empty inputs to be set", async () => {
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: {},
      });
      assert(true);
    });

    await t.step("allows populated inputs to be set", async () => {
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: { sample: { value: "test" } },
      });
      assert(true);
    });

    await t.step("catches error if inputs are wrong", async () => {
      await client.workflows.triggers.create({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        // @ts-expect-error sample cant be set to a string
        inputs: { sample: "test" },
      });
      assert(true);
    });
  });

  await t.step(
    "handles workflow with no defined input params",
    async (t) => {
      await t.step("allows no inputs to be set", async () => {
        await client.workflows.triggers.create<ExampleWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        });
        assert(true);
      });

      await t.step("allows empty inputs to be set", async () => {
        await client.workflows.triggers.create<ExampleWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // TODO:
          // @ts-expect-error this is a failing test
          inputs: {},
        });
        assert(true);
      });

      await t.step("doesn't allow populated inputs to be set", async () => {
        await client.workflows.triggers.create<ExampleWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
          // @ts-expect-error inputs shouldn't be set
          inputs: { sample: { value: "test" } },
        });
        assert(true);
      });
    },
  );

  await t.step("handles workflow with no defined properties", async (t) => {
    await t.step("allows no inputs to be set", async () => {
      await client.workflows.triggers.create<NoInputWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
      });
      assert(true);
    });

    await t.step("allows empty inputs to be set", async () => {
      await client.workflows.triggers.create<NoInputWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: {},
      });
      assert(true);
    });

    await t.step("doesn't allow populated inputs to be set", async () => {
      await client.workflows.triggers.create<NoInputWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        // TODO: this test should be failing
        inputs: { sample: { value: "test" } },
      });
      assert(true);
    });
  });

  await t.step("handles workflow with only optional inputs", async (t) => {
    await t.step("allows no inputs to be set", async () => {
      await client.workflows.triggers.create<OptionalInputWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
      });
      assert(true);
    });

    await t.step("allows empty inputs to be set", async () => {
      await client.workflows.triggers.create<OptionalInputWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: {},
      });
      assert(true);
    });

    await t.step("allows optional inputs to be set", async () => {
      await client.workflows.triggers.create<OptionalInputWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: { optional: { value: "test" } },
      });
      assert(true);
    });

    await t.step("catches error if inputs are wrong", async () => {
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
    await t.step("doesn't allow no inputs to be set", async () => {
      // @ts-expect-error needs inputs object
      await client.workflows.triggers.create<RequiredInputWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
      });
      assert(true);
    });

    await t.step("doesn't allows empty inputs to be set", async () => {
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
      await client.workflows.triggers.create<RequiredInputWorkflow>({
        name: "TEST",
        type: "shortcut",
        workflow: "#/workflows/example",
        inputs: { required: { value: "test" } },
      });
      assert(true);
    });
  });

  await t.step(
    "handles workflow with a mix of optional and required inputs",
    async (t) => {
      await t.step("doesn't allow no inputs to be set", async () => {
        //@ts-expect-error needs inputs object
        await client.workflows.triggers.create<MixedInputWorkflow>({
          name: "TEST",
          type: "shortcut",
          workflow: "#/workflows/example",
        });
        assert(true);
      });

      await t.step("doesn't allows empty inputs to be set", async () => {
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
    },
  );
  mf.reset();
});

import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { _internals } from "./base-client.ts";
import { assertSpyCalls, stub } from "./dev_deps.ts";

Deno.test(_internals.getModuleVersion.name, async (t) => {
  await t.step(
    "should return the version if the module is sourced from deno.land",
    () => {
      const getModuleUrlStub = stub(_internals, "getModuleUrl", () => {
        return new URL("https://deno.land/x/deno_slack_api@2.1.0/mod.ts)");
      });

      try {
        const moduleVersion = _internals.getModuleVersion();

        assertSpyCalls(getModuleUrlStub, 1);
        assertEquals(moduleVersion, "2.1.0");
      } finally {
        getModuleUrlStub.restore();
      }
    },
  );

  await t.step(
    "should return the unknown if the module is not sourced from deno.land",
    () => {
      const getModuleUrlStub = stub(_internals, "getModuleUrl", () => {
        return new URL("file:///hello/world.ts)");
      });
      try {
        const moduleVersion = _internals.getModuleVersion();

        assertSpyCalls(getModuleUrlStub, 1);
        assertEquals(moduleVersion, "unknown");
      } finally {
        getModuleUrlStub.restore();
      }
    },
  );

  await t.step(
    "should return the unknown if the module version is invalid",
    () => {
      const getModuleUrlStub = stub(_internals, "getModuleUrl", () => {
        return new URL("https://deno.land/x/deno_slack_sdk@2.1.0/mod.ts)");
      });
      try {
        const moduleVersion = _internals.getModuleVersion();

        assertSpyCalls(getModuleUrlStub, 1);
        assertEquals(moduleVersion, "unknown");
      } finally {
        getModuleUrlStub.restore();
      }
    },
  );
});

Deno.test(_internals.getUserAgent.name, async (t) => {
  await t.step(
    "should return the user agent with expected output",
    () => {
      const expectedVersion = "unknown";
      const getModuleUrlStub = stub(_internals, "getModuleVersion", () => {
        return expectedVersion;
      });

      try {
        const userAgent = _internals.getUserAgent();

        assertSpyCalls(getModuleUrlStub, 1);
        assertEquals(
          userAgent,
          `Deno/${Deno.version.deno} OS/${Deno.build.os} deno-slack-api/${expectedVersion}`,
        );
      } finally {
        getModuleUrlStub.restore();
      }
    },
  );

  await t.step(
    "should return the user agent with module version",
    () => {
      const expectedVersion = "2.1.0";
      const getModuleUrlStub = stub(_internals, "getModuleUrl", () => {
        return new URL(
          `https://deno.land/x/deno_slack_api@${expectedVersion}/mod.ts)`,
        );
      });

      try {
        const userAgent = _internals.getUserAgent();

        assertSpyCalls(getModuleUrlStub, 1);
        assertEquals(
          userAgent,
          `Deno/${Deno.version.deno} OS/${Deno.build.os} deno-slack-api/${expectedVersion}`,
        );
      } finally {
        getModuleUrlStub.restore();
      }
    },
  );
});

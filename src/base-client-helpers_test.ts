import { assertEquals } from "@std/assert";
import {
  _internals,
  getUserAgent,
  serializeData,
} from "./base-client-helpers.ts";
import { assertSpyCalls, stub } from "@std/testing/mock";

Deno.test(`base-client-helpers.${_internals.getModuleVersion.name}`, async (t) => {
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
    "should return undefined if the module is not sourced from deno.land",
    () => {
      const getModuleUrlStub = stub(_internals, "getModuleUrl", () => {
        return new URL("file:///hello/world.ts)");
      });
      try {
        const moduleVersion = _internals.getModuleVersion();

        assertSpyCalls(getModuleUrlStub, 1);
        assertEquals(moduleVersion, undefined);
      } finally {
        getModuleUrlStub.restore();
      }
    },
  );

  await t.step(
    "should return undefined if the regex used to parse deno_slack_api@x.x.x fails",
    () => {
      const getModuleUrlStub = stub(_internals, "getModuleUrl", () => {
        return new URL("https://deno.land/x/deno_slack_sdk@2.1.0/mod.ts)");
      });
      try {
        const moduleVersion = _internals.getModuleVersion();

        assertSpyCalls(getModuleUrlStub, 1);
        assertEquals(moduleVersion, undefined);
      } finally {
        getModuleUrlStub.restore();
      }
    },
  );
});

Deno.test(`base-client-helpers.${getUserAgent.name}`, async (t) => {
  await t.step(
    "should return the user agent with deno version, OS name and undefined deno-slack-api version",
    () => {
      const expectedVersion = undefined;
      const getModuleUrlStub = stub(_internals, "getModuleVersion", () => {
        return expectedVersion;
      });

      try {
        const userAgent = getUserAgent();

        assertSpyCalls(getModuleUrlStub, 1);
        assertEquals(
          userAgent,
          `Deno/${Deno.version.deno} OS/${Deno.build.os} deno-slack-api/undefined`,
        );
      } finally {
        getModuleUrlStub.restore();
      }
    },
  );

  await t.step(
    "should return the user agent with deno version, OS name and deno-slack-api version",
    () => {
      const expectedVersion = "2.1.0";
      const getModuleUrlStub = stub(_internals, "getModuleUrl", () => {
        return new URL(
          `https://deno.land/x/deno_slack_api@${expectedVersion}/mod.ts)`,
        );
      });

      try {
        const userAgent = getUserAgent();

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

Deno.test(`${serializeData.name} helper function`, async (t) => {
  await t.step(
    "should serialize string values as strings and return a URLSearchParams object",
    () => {
      assertEquals(
        serializeData({ "batman": "robin" }).toString(),
        "batman=robin",
      );
    },
  );
  await t.step(
    "should serialize non-string values as JSON-encoded strings and return a URLSearchParams object",
    () => {
      assertEquals(
        serializeData({ "hockey": { "good": true, "awesome": "yes" } })
          .toString(),
        "hockey=%7B%22good%22%3Atrue%2C%22awesome%22%3A%22yes%22%7D",
      );
    },
  );
  await t.step(
    "should not serialize undefined values",
    () => {
      assertEquals(
        serializeData({
          "hockey": { "good": true, "awesome": "yes" },
          "baseball": undefined,
        })
          .toString(),
        "hockey=%7B%22good%22%3Atrue%2C%22awesome%22%3A%22yes%22%7D",
      );
    },
  );
});

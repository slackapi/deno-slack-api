import { assertEquals } from "@std/assert";
import { TriggerContextData } from "../mod.ts";

Deno.test("TriggerContextData Objects allow property access or string references", async (t) => {
  const { Shortcut, Event } = TriggerContextData;

  await t.step("Shortcut Triggers", async (tt) => {
    const { interactivity } = Shortcut;

    await tt.step(
      "support string references for objects when stringifying JSON",
      () => {
        assertEquals(
          JSON.stringify(interactivity),
          `"{{data.interactivity}}"`,
        );
        assertEquals(
          JSON.stringify(interactivity.interactor),
          `"{{data.interactivity.interactor}}"`,
        );
      },
    );
    await tt.step("support property references for objects", () => {
      assertEquals(
        JSON.stringify(interactivity.interactor.id),
        `"{{data.interactivity.interactor.id}}"`,
      );
    });
  });

  await t.step("Event Triggers", async (tt) => {
    const {
      DndUpdated,
      SharedChannelInviteAccepted,
      SharedChannelInviteApproved,
      SharedChannelInviteDeclined,
      UserJoinedTeam,
    } = Event;
    await tt.step(
      "support string references for objects when stringifying JSON",
      () => {
        assertEquals(
          JSON.stringify(DndUpdated.dnd_status),
          `"{{data.dnd_status}}"`,
        );
        assertEquals(
          JSON.stringify(SharedChannelInviteAccepted.accepting_user),
          `"{{data.accepting_user}}"`,
        );
        assertEquals(
          JSON.stringify(SharedChannelInviteApproved.approving_user),
          `"{{data.approving_user}}"`,
        );
        assertEquals(
          JSON.stringify(SharedChannelInviteDeclined.declining_user),
          `"{{data.declining_user}}"`,
        );
        assertEquals(
          JSON.stringify(UserJoinedTeam.user),
          `"{{data.user}}"`,
        );
        assertEquals(
          JSON.stringify(SharedChannelInviteAccepted.invite),
          `"{{data.invite}}"`,
        );
        assertEquals(
          JSON.stringify(SharedChannelInviteAccepted.invite.inviting_team),
          `"{{data.invite.inviting_team}}"`,
        );
        assertEquals(
          JSON.stringify(SharedChannelInviteAccepted.invite.inviting_team.icon),
          `"{{data.invite.inviting_team.icon}}"`,
        );
        assertEquals(
          JSON.stringify(SharedChannelInviteAccepted.invite.inviting_user),
          `"{{data.invite.inviting_user}}"`,
        );
      },
    );
    await tt.step("support property references for objects", () => {
      assertEquals(
        JSON.stringify(DndUpdated.dnd_status.dnd_enabled),
        `"{{data.dnd_status.dnd_enabled}}"`,
      );
      assertEquals(
        JSON.stringify(SharedChannelInviteApproved.approving_user.id),
        `"{{data.approving_user.id}}"`,
      );
      assertEquals(
        JSON.stringify(SharedChannelInviteDeclined.declining_user.name),
        `"{{data.declining_user.name}}"`,
      );
      assertEquals(
        JSON.stringify(UserJoinedTeam.user.real_name),
        `"{{data.user.real_name}}"`,
      );
      assertEquals(
        JSON.stringify(SharedChannelInviteAccepted.invite.inviting_team.domain),
        `"{{data.invite.inviting_team.domain}}"`,
      );
    });
  });
});

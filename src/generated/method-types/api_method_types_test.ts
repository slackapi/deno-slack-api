import { assertEquals } from "@std/assert";
import { SlackAPI } from "../../mod.ts";

Deno.test("SlackAPIMethodsType generated types", () => {
  const client = SlackAPI("test-token");

  assertEquals(typeof client.admin.analytics.getFile, "function");
  assertEquals(typeof client.admin.apps.approve, "function");
  assertEquals(typeof client.admin.apps.approved.list, "function");
  assertEquals(typeof client.admin.apps.clearResolution, "function");
  assertEquals(typeof client.admin.apps.requests.cancel, "function");
  assertEquals(typeof client.admin.apps.requests.list, "function");
  assertEquals(typeof client.admin.apps.restrict, "function");
  assertEquals(typeof client.admin.apps.restricted.list, "function");
  assertEquals(typeof client.admin.apps.uninstall, "function");
  assertEquals(typeof client.admin.auth.policy.assignEntities, "function");
  assertEquals(typeof client.admin.auth.policy.getEntities, "function");
  assertEquals(typeof client.admin.auth.policy.removeEntities, "function");
  assertEquals(typeof client.admin.barriers.create, "function");
  assertEquals(typeof client.admin.barriers.delete, "function");
  assertEquals(typeof client.admin.barriers.list, "function");
  assertEquals(typeof client.admin.barriers.update, "function");
  assertEquals(typeof client.admin.conversations.archive, "function");
  assertEquals(typeof client.admin.conversations.convertToPrivate, "function");
  assertEquals(typeof client.admin.conversations.create, "function");
  assertEquals(typeof client.admin.conversations.delete, "function");
  assertEquals(typeof client.admin.conversations.disconnectShared, "function");
  assertEquals(
    typeof client.admin.conversations.ekm.listOriginalConnectedChannelInfo,
    "function",
  );
  assertEquals(
    typeof client.admin.conversations.getConversationPrefs,
    "function",
  );
  assertEquals(
    typeof client.admin.conversations.getCustomRetention,
    "function",
  );
  assertEquals(typeof client.admin.conversations.getTeams, "function");
  assertEquals(typeof client.admin.conversations.invite, "function");
  assertEquals(
    typeof client.admin.conversations.removeCustomRetention,
    "function",
  );
  assertEquals(typeof client.admin.conversations.rename, "function");
  assertEquals(
    typeof client.admin.conversations.restrictAccess.addGroup,
    "function",
  );
  assertEquals(
    typeof client.admin.conversations.restrictAccess.listGroups,
    "function",
  );
  assertEquals(
    typeof client.admin.conversations.restrictAccess.removeGroup,
    "function",
  );
  assertEquals(typeof client.admin.conversations.search, "function");
  assertEquals(
    typeof client.admin.conversations.setConversationPrefs,
    "function",
  );
  assertEquals(
    typeof client.admin.conversations.setCustomRetention,
    "function",
  );
  assertEquals(typeof client.admin.conversations.setTeams, "function");
  assertEquals(typeof client.admin.conversations.unarchive, "function");
  assertEquals(typeof client.admin.emoji.add, "function");
  assertEquals(typeof client.admin.emoji.addAlias, "function");
  assertEquals(typeof client.admin.emoji.list, "function");
  assertEquals(typeof client.admin.emoji.remove, "function");
  assertEquals(typeof client.admin.emoji.rename, "function");
  assertEquals(typeof client.admin.inviteRequests.approve, "function");
  assertEquals(typeof client.admin.inviteRequests.approved.list, "function");
  assertEquals(typeof client.admin.inviteRequests.denied.list, "function");
  assertEquals(typeof client.admin.inviteRequests.deny, "function");
  assertEquals(typeof client.admin.inviteRequests.list, "function");
  assertEquals(typeof client.admin.teams.admins.list, "function");
  assertEquals(typeof client.admin.teams.create, "function");
  assertEquals(typeof client.admin.teams.list, "function");
  assertEquals(typeof client.admin.teams.owners.list, "function");
  assertEquals(typeof client.admin.teams.settings.info, "function");
  assertEquals(
    typeof client.admin.teams.settings.setDefaultChannels,
    "function",
  );
  assertEquals(typeof client.admin.teams.settings.setDescription, "function");
  assertEquals(
    typeof client.admin.teams.settings.setDiscoverability,
    "function",
  );
  assertEquals(typeof client.admin.teams.settings.setIcon, "function");
  assertEquals(typeof client.admin.teams.settings.setName, "function");
  assertEquals(typeof client.admin.usergroups.addChannels, "function");
  assertEquals(typeof client.admin.usergroups.addTeams, "function");
  assertEquals(typeof client.admin.usergroups.listChannels, "function");
  assertEquals(typeof client.admin.usergroups.removeChannels, "function");
  assertEquals(typeof client.admin.users.assign, "function");
  assertEquals(typeof client.admin.users.invite, "function");
  assertEquals(typeof client.admin.users.list, "function");
  assertEquals(typeof client.admin.users.remove, "function");
  assertEquals(typeof client.admin.users.session.clearSettings, "function");
  assertEquals(typeof client.admin.users.session.getSettings, "function");
  assertEquals(typeof client.admin.users.session.invalidate, "function");
  assertEquals(typeof client.admin.users.session.list, "function");
  assertEquals(typeof client.admin.users.session.reset, "function");
  assertEquals(typeof client.admin.users.session.resetBulk, "function");
  assertEquals(typeof client.admin.users.session.setSettings, "function");
  assertEquals(typeof client.admin.users.setAdmin, "function");
  assertEquals(typeof client.admin.users.setExpiration, "function");
  assertEquals(typeof client.admin.users.setOwner, "function");
  assertEquals(typeof client.admin.users.setRegular, "function");
  assertEquals(
    typeof client.admin.users.unsupportedVersions.export,
    "function",
  );
  assertEquals(typeof client.api.test, "function");
  assertEquals(typeof client.apps.connections.open, "function");
  assertEquals(typeof client.apps.event.authorizations.list, "function");
  assertEquals(typeof client.apps.manifest.create, "function");
  assertEquals(typeof client.apps.manifest.delete, "function");
  assertEquals(typeof client.apps.manifest.export, "function");
  assertEquals(typeof client.apps.manifest.update, "function");
  assertEquals(typeof client.apps.manifest.validate, "function");
  assertEquals(typeof client.apps.uninstall, "function");
  assertEquals(typeof client.auth.revoke, "function");
  assertEquals(typeof client.auth.teams.list, "function");
  assertEquals(typeof client.auth.test, "function");
  assertEquals(typeof client.bookmarks.add, "function");
  assertEquals(typeof client.bookmarks.edit, "function");
  assertEquals(typeof client.bookmarks.list, "function");
  assertEquals(typeof client.bookmarks.remove, "function");
  assertEquals(typeof client.bots.info, "function");
  assertEquals(typeof client.calls.add, "function");
  assertEquals(typeof client.calls.end, "function");
  assertEquals(typeof client.calls.info, "function");
  assertEquals(typeof client.calls.participants.add, "function");
  assertEquals(typeof client.calls.participants.remove, "function");
  assertEquals(typeof client.calls.update, "function");
  assertEquals(typeof client.canvases.access.delete, "function");
  assertEquals(typeof client.canvases.access.set, "function");
  assertEquals(typeof client.canvases.create, "function");
  assertEquals(typeof client.canvases.delete, "function");
  assertEquals(typeof client.canvases.edit, "function");
  assertEquals(typeof client.canvases.sections.lookup, "function");
  assertEquals(typeof client.chat.delete, "function");
  assertEquals(typeof client.chat.deleteScheduledMessage, "function");
  assertEquals(typeof client.chat.getPermalink, "function");
  assertEquals(typeof client.chat.meMessage, "function");
  assertEquals(typeof client.chat.postEphemeral, "function");
  assertEquals(typeof client.chat.scheduledMessages.list, "function");
  assertEquals(typeof client.chat.scheduleMessage, "function");
  assertEquals(typeof client.chat.unfurl, "function");
  assertEquals(typeof client.chat.update, "function");
  assertEquals(typeof client.conversations.acceptSharedInvite, "function");
  assertEquals(typeof client.conversations.approveSharedInvite, "function");
  assertEquals(typeof client.conversations.archive, "function");
  assertEquals(typeof client.conversations.canvases.create, "function");
  assertEquals(typeof client.conversations.close, "function");
  assertEquals(typeof client.conversations.create, "function");
  assertEquals(typeof client.conversations.declineSharedInvite, "function");
  assertEquals(
    typeof client.conversations.externalInvitePermissions.set,
    "function",
  );
  assertEquals(typeof client.conversations.history, "function");
  assertEquals(typeof client.conversations.info, "function");
  assertEquals(typeof client.conversations.invite, "function");
  assertEquals(typeof client.conversations.inviteShared, "function");
  assertEquals(typeof client.conversations.join, "function");
  assertEquals(typeof client.conversations.kick, "function");
  assertEquals(typeof client.conversations.leave, "function");
  assertEquals(typeof client.conversations.list, "function");
  assertEquals(typeof client.conversations.listConnectInvites, "function");
  assertEquals(typeof client.conversations.mark, "function");
  assertEquals(typeof client.conversations.members, "function");
  assertEquals(typeof client.conversations.open, "function");
  assertEquals(typeof client.conversations.rename, "function");
  assertEquals(typeof client.conversations.replies, "function");
  assertEquals(typeof client.conversations.setPurpose, "function");
  assertEquals(typeof client.conversations.setTopic, "function");
  assertEquals(typeof client.conversations.unarchive, "function");
  assertEquals(typeof client.dialog.open, "function");
  assertEquals(typeof client.dnd.endDnd, "function");
  assertEquals(typeof client.dnd.endSnooze, "function");
  assertEquals(typeof client.dnd.info, "function");
  assertEquals(typeof client.dnd.setSnooze, "function");
  assertEquals(typeof client.dnd.teamInfo, "function");
  assertEquals(typeof client.emoji.list, "function");
  assertEquals(typeof client.enterprise.auth.idpconfig.apply, "function");
  assertEquals(typeof client.enterprise.auth.idpconfig.get, "function");
  assertEquals(typeof client.enterprise.auth.idpconfig.list, "function");
  assertEquals(typeof client.enterprise.auth.idpconfig.remove, "function");
  assertEquals(typeof client.enterprise.auth.idpconfig.set, "function");
  assertEquals(typeof client.files.comments.delete, "function");
  assertEquals(typeof client.files.delete, "function");
  assertEquals(typeof client.files.info, "function");
  assertEquals(typeof client.files.list, "function");
  assertEquals(typeof client.files.remote.add, "function");
  assertEquals(typeof client.files.remote.info, "function");
  assertEquals(typeof client.files.remote.list, "function");
  assertEquals(typeof client.files.remote.remove, "function");
  assertEquals(typeof client.files.remote.share, "function");
  assertEquals(typeof client.files.remote.update, "function");
  assertEquals(typeof client.files.revokePublicURL, "function");
  assertEquals(typeof client.files.sharedPublicURL, "function");
  assertEquals(typeof client.files.upload, "function");
  assertEquals(typeof client.migration.exchange, "function");
  assertEquals(typeof client.oauth.access, "function");
  assertEquals(typeof client.oauth.v2.access, "function");
  assertEquals(typeof client.oauth.v2.exchange, "function");
  assertEquals(typeof client.openid.connect.token, "function");
  assertEquals(typeof client.openid.connect.userInfo, "function");
  assertEquals(typeof client.pins.add, "function");
  assertEquals(typeof client.pins.list, "function");
  assertEquals(typeof client.pins.remove, "function");
  assertEquals(typeof client.reactions.add, "function");
  assertEquals(typeof client.reactions.get, "function");
  assertEquals(typeof client.reactions.list, "function");
  assertEquals(typeof client.reactions.remove, "function");
  assertEquals(typeof client.reminders.add, "function");
  assertEquals(typeof client.reminders.complete, "function");
  assertEquals(typeof client.reminders.delete, "function");
  assertEquals(typeof client.reminders.info, "function");
  assertEquals(typeof client.reminders.list, "function");
  assertEquals(typeof client.rtm.connect, "function");
  assertEquals(typeof client.rtm.start, "function");
  assertEquals(typeof client.search.all, "function");
  assertEquals(typeof client.search.files, "function");
  assertEquals(typeof client.search.messages, "function");
  assertEquals(typeof client.stars.add, "function");
  assertEquals(typeof client.stars.list, "function");
  assertEquals(typeof client.stars.remove, "function");
  assertEquals(typeof client.team.accessLogs, "function");
  assertEquals(typeof client.team.billableInfo, "function");
  assertEquals(typeof client.team.billing.info, "function");
  assertEquals(typeof client.team.externalTeams.disconnect, "function");
  assertEquals(typeof client.team.externalTeams.list, "function");
  assertEquals(typeof client.team.info, "function");
  assertEquals(typeof client.team.integrationLogs, "function");
  assertEquals(typeof client.team.preferences.list, "function");
  assertEquals(typeof client.team.profile.get, "function");
  assertEquals(typeof client.tooling.tokens.rotate, "function");
  assertEquals(typeof client.usergroups.create, "function");
  assertEquals(typeof client.usergroups.disable, "function");
  assertEquals(typeof client.usergroups.enable, "function");
  assertEquals(typeof client.usergroups.list, "function");
  assertEquals(typeof client.usergroups.update, "function");
  assertEquals(typeof client.usergroups.users.list, "function");
  assertEquals(typeof client.usergroups.users.update, "function");
  assertEquals(typeof client.users.conversations, "function");
  assertEquals(typeof client.users.deletePhoto, "function");
  assertEquals(typeof client.users.discoverableContacts.lookup, "function");
  assertEquals(typeof client.users.getPresence, "function");
  assertEquals(typeof client.users.identity, "function");
  assertEquals(typeof client.users.info, "function");
  assertEquals(typeof client.users.list, "function");
  assertEquals(typeof client.users.lookupByEmail, "function");
  assertEquals(typeof client.users.profile.get, "function");
  assertEquals(typeof client.users.profile.set, "function");
  assertEquals(typeof client.users.setActive, "function");
  assertEquals(typeof client.users.setPhoto, "function");
  assertEquals(typeof client.users.setPresence, "function");
  assertEquals(typeof client.views.open, "function");
  assertEquals(typeof client.views.publish, "function");
  assertEquals(typeof client.views.push, "function");
  assertEquals(typeof client.views.update, "function");
  assertEquals(typeof client.workflows.stepCompleted, "function");
  assertEquals(typeof client.workflows.stepFailed, "function");
  assertEquals(typeof client.workflows.updateStep, "function");
});

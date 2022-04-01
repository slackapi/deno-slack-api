import { BaseSlackAPIClient } from "../base-client.ts";
import { BaseResponse, SlackAPIMethod, SlackAPIMethodArgs } from "../types.ts";

type AdminAPIType = {
  apps: {
    approve: SlackAPIMethod;
    approved: {
      list: SlackAPIMethod;
    };
    requests: {
      list: SlackAPIMethod;
    };
    restrict: SlackAPIMethod;
    restricted: {
      list: SlackAPIMethod;
    };
  };
  conversations: {
    archive: SlackAPIMethod;
    convertToPrivate: SlackAPIMethod;
    create: SlackAPIMethod;
    delete: SlackAPIMethod;
    disconnectShared: SlackAPIMethod;
    ekm: {
      listOriginalConnectedChannelInfo: SlackAPIMethod;
    };
    getConversationPrefs: SlackAPIMethod;
    getTeams: SlackAPIMethod;
    invite: SlackAPIMethod;
    rename: SlackAPIMethod;
    restrictAccess: {
      addGroup: SlackAPIMethod;
      listGroups: SlackAPIMethod;
      removeGroup: SlackAPIMethod;
    };
    search: SlackAPIMethod;
    setConversationPrefs: SlackAPIMethod;
    setTeams: SlackAPIMethod;
    unarchive: SlackAPIMethod;
  };
  emoji: {
    add: SlackAPIMethod;
    addAlias: SlackAPIMethod;
    list: SlackAPIMethod;
    remove: SlackAPIMethod;
    rename: SlackAPIMethod;
  };
  inviteRequests: {
    approve: SlackAPIMethod;
    approved: {
      list: SlackAPIMethod;
    };
    denied: {
      list: SlackAPIMethod;
    };
    deny: SlackAPIMethod;
    list: SlackAPIMethod;
  };
  teams: {
    admins: {
      list: SlackAPIMethod;
    };
    create: SlackAPIMethod;
    list: SlackAPIMethod;
    owners: {
      list: SlackAPIMethod;
    };
    settings: {
      info: SlackAPIMethod;
      setDefaultChannels: SlackAPIMethod;
      setDescription: SlackAPIMethod;
      setDiscoverability: SlackAPIMethod;
      setIcon: SlackAPIMethod;
      setName: SlackAPIMethod;
    };
  };
  usergroups: {
    addChannels: SlackAPIMethod;
    addTeams: SlackAPIMethod;
    listChannels: SlackAPIMethod;
    removeChannels: SlackAPIMethod;
  };
  users: {
    assign: SlackAPIMethod;
    invite: SlackAPIMethod;
    list: SlackAPIMethod;
    remove: SlackAPIMethod;
    session: {
      invalidate: SlackAPIMethod;
      reset: SlackAPIMethod;
    };
    setAdmin: SlackAPIMethod;
    setExpiration: SlackAPIMethod;
    setOwner: SlackAPIMethod;
    setRegular: SlackAPIMethod;
  };
};

export const AdminAPI = (client: BaseSlackAPIClient) => {
  // deno-lint-ignore no-explicit-any
  const admin: any = {};
  admin.apps = {};

  admin.apps.approve = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.apps.approve", args);
  };
  admin.apps.approved = {};

  admin.apps.approved.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.apps.approved.list", args);
  };
  admin.apps.requests = {};

  admin.apps.requests.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.apps.requests.list", args);
  };

  admin.apps.restrict = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.apps.restrict", args);
  };
  admin.apps.restricted = {};

  admin.apps.restricted.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.apps.restricted.list", args);
  };
  admin.conversations = {};

  admin.conversations.archive = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.archive", args);
  };

  admin.conversations.convertToPrivate = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.convertToPrivate", args);
  };

  admin.conversations.create = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.create", args);
  };

  admin.conversations.delete = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.delete", args);
  };

  admin.conversations.disconnectShared = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.disconnectShared", args);
  };
  admin.conversations.ekm = {};

  admin.conversations.ekm.listOriginalConnectedChannelInfo = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall(
      "admin.conversations.ekm.listOriginalConnectedChannelInfo",
      args,
    );
  };

  admin.conversations.getConversationPrefs = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall(
      "admin.conversations.getConversationPrefs",
      args,
    );
  };

  admin.conversations.getTeams = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.getTeams", args);
  };

  admin.conversations.invite = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.invite", args);
  };

  admin.conversations.rename = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.rename", args);
  };
  admin.conversations.restrictAccess = {};

  admin.conversations.restrictAccess.addGroup = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall(
      "admin.conversations.restrictAccess.addGroup",
      args,
    );
  };

  admin.conversations.restrictAccess.listGroups = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall(
      "admin.conversations.restrictAccess.listGroups",
      args,
    );
  };

  admin.conversations.restrictAccess.removeGroup = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall(
      "admin.conversations.restrictAccess.removeGroup",
      args,
    );
  };

  admin.conversations.search = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.search", args);
  };

  admin.conversations.setConversationPrefs = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall(
      "admin.conversations.setConversationPrefs",
      args,
    );
  };

  admin.conversations.setTeams = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.setTeams", args);
  };

  admin.conversations.unarchive = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.conversations.unarchive", args);
  };
  admin.emoji = {};

  admin.emoji.add = async (args: SlackAPIMethodArgs): Promise<BaseResponse> => {
    return await client.apiCall("admin.emoji.add", args);
  };

  admin.emoji.addAlias = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.emoji.addAlias", args);
  };

  admin.emoji.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.emoji.list", args);
  };

  admin.emoji.remove = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.emoji.remove", args);
  };

  admin.emoji.rename = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.emoji.rename", args);
  };
  admin.inviteRequests = {};

  admin.inviteRequests.approve = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.inviteRequests.approve", args);
  };
  admin.inviteRequests.approved = {};

  admin.inviteRequests.approved.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.inviteRequests.approved.list", args);
  };
  admin.inviteRequests.denied = {};

  admin.inviteRequests.denied.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.inviteRequests.denied.list", args);
  };

  admin.inviteRequests.deny = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.inviteRequests.deny", args);
  };

  admin.inviteRequests.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.inviteRequests.list", args);
  };
  admin.teams = {};
  admin.teams.admins = {};

  admin.teams.admins.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.teams.admins.list", args);
  };

  admin.teams.create = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.teams.create", args);
  };

  admin.teams.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.teams.list", args);
  };
  admin.teams.owners = {};

  admin.teams.owners.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.teams.owners.list", args);
  };
  admin.teams.settings = {};

  admin.teams.settings.info = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.teams.settings.info", args);
  };

  admin.teams.settings.setDefaultChannels = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall(
      "admin.teams.settings.setDefaultChannels",
      args,
    );
  };

  admin.teams.settings.setDescription = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.teams.settings.setDescription", args);
  };

  admin.teams.settings.setDiscoverability = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall(
      "admin.teams.settings.setDiscoverability",
      args,
    );
  };

  admin.teams.settings.setIcon = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.teams.settings.setIcon", args);
  };

  admin.teams.settings.setName = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.teams.settings.setName", args);
  };
  admin.usergroups = {};

  admin.usergroups.addChannels = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.usergroups.addChannels", args);
  };

  admin.usergroups.addTeams = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.usergroups.addTeams", args);
  };

  admin.usergroups.listChannels = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.usergroups.listChannels", args);
  };

  admin.usergroups.removeChannels = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.usergroups.removeChannels", args);
  };
  admin.users = {};

  admin.users.assign = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.assign", args);
  };

  admin.users.invite = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.invite", args);
  };

  admin.users.list = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.list", args);
  };

  admin.users.remove = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.remove", args);
  };
  admin.users.session = {};

  admin.users.session.invalidate = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.session.invalidate", args);
  };

  admin.users.session.reset = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.session.reset", args);
  };

  admin.users.setAdmin = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.setAdmin", args);
  };

  admin.users.setExpiration = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.setExpiration", args);
  };

  admin.users.setOwner = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.setOwner", args);
  };

  admin.users.setRegular = async (
    args: SlackAPIMethodArgs,
  ): Promise<BaseResponse> => {
    return await client.apiCall("admin.users.setRegular", args);
  };

  return admin as AdminAPIType;
};

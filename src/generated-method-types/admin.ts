import { SlackAPIMethod } from "../types.ts";

export type AdminAPIType = {
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

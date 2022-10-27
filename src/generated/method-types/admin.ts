import type {
  SlackAPICursorPaginatedMethod,
  SlackAPIMethod,
} from "../../types.ts";

export type AdminAPIType = {
  analytics: {
    getFile: SlackAPIMethod;
  };
  apps: {
    approve: SlackAPIMethod;
    approved: {
      list: SlackAPICursorPaginatedMethod;
    };
    clearResolution: SlackAPIMethod;
    requests: {
      cancel: SlackAPIMethod;
      list: SlackAPICursorPaginatedMethod;
    };
    restrict: SlackAPIMethod;
    restricted: {
      list: SlackAPICursorPaginatedMethod;
    };
    uninstall: SlackAPIMethod;
  };
  auth: {
    policy: {
      assignEntities: SlackAPIMethod;
      getEntities: SlackAPICursorPaginatedMethod;
      removeEntities: SlackAPIMethod;
    };
  };
  barriers: {
    create: SlackAPIMethod;
    delete: SlackAPIMethod;
    list: SlackAPICursorPaginatedMethod;
    update: SlackAPIMethod;
  };
  conversations: {
    archive: SlackAPIMethod;
    convertToPrivate: SlackAPIMethod;
    create: SlackAPIMethod;
    delete: SlackAPIMethod;
    disconnectShared: SlackAPIMethod;
    ekm: {
      listOriginalConnectedChannelInfo: SlackAPICursorPaginatedMethod;
    };
    getConversationPrefs: SlackAPIMethod;
    getCustomRetention: SlackAPIMethod;
    getTeams: SlackAPICursorPaginatedMethod;
    invite: SlackAPIMethod;
    removeCustomRetention: SlackAPIMethod;
    rename: SlackAPIMethod;
    restrictAccess: {
      addGroup: SlackAPIMethod;
      listGroups: SlackAPIMethod;
      removeGroup: SlackAPIMethod;
    };
    search: SlackAPICursorPaginatedMethod;
    setConversationPrefs: SlackAPIMethod;
    setCustomRetention: SlackAPIMethod;
    setTeams: SlackAPIMethod;
    unarchive: SlackAPIMethod;
  };
  emoji: {
    add: SlackAPIMethod;
    addAlias: SlackAPIMethod;
    list: SlackAPICursorPaginatedMethod;
    remove: SlackAPIMethod;
    rename: SlackAPIMethod;
  };
  inviteRequests: {
    approve: SlackAPIMethod;
    approved: {
      list: SlackAPICursorPaginatedMethod;
    };
    denied: {
      list: SlackAPICursorPaginatedMethod;
    };
    deny: SlackAPIMethod;
    list: SlackAPICursorPaginatedMethod;
  };
  teams: {
    admins: {
      list: SlackAPICursorPaginatedMethod;
    };
    create: SlackAPIMethod;
    list: SlackAPICursorPaginatedMethod;
    owners: {
      list: SlackAPICursorPaginatedMethod;
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
    list: SlackAPICursorPaginatedMethod;
    remove: SlackAPIMethod;
    session: {
      clearSettings: SlackAPIMethod;
      getSettings: SlackAPIMethod;
      invalidate: SlackAPIMethod;
      list: SlackAPICursorPaginatedMethod;
      reset: SlackAPIMethod;
      resetBulk: SlackAPIMethod;
      setSettings: SlackAPIMethod;
    };
    setAdmin: SlackAPIMethod;
    setExpiration: SlackAPIMethod;
    setOwner: SlackAPIMethod;
    setRegular: SlackAPIMethod;
    unsupportedVersions: {
      export: SlackAPIMethod;
    };
  };
};

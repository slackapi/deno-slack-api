import type {
  SlackAPIMethod,
  SlackAPIMethodCursorPaginated,
} from "../../types.ts";

export type AdminAPIType = {
  analytics: {
    getFile: SlackAPIMethod;
  };
  apps: {
    approve: SlackAPIMethod;
    approved: {
      list: SlackAPIMethodCursorPaginated;
    };
    clearResolution: SlackAPIMethod;
    requests: {
      cancel: SlackAPIMethod;
      list: SlackAPIMethodCursorPaginated;
    };
    restrict: SlackAPIMethod;
    restricted: {
      list: SlackAPIMethodCursorPaginated;
    };
    uninstall: SlackAPIMethod;
  };
  auth: {
    policy: {
      assignEntities: SlackAPIMethod;
      getEntities: SlackAPIMethodCursorPaginated;
      removeEntities: SlackAPIMethod;
    };
  };
  barriers: {
    create: SlackAPIMethod;
    delete: SlackAPIMethod;
    list: SlackAPIMethodCursorPaginated;
    update: SlackAPIMethod;
  };
  conversations: {
    archive: SlackAPIMethod;
    convertToPrivate: SlackAPIMethod;
    create: SlackAPIMethod;
    delete: SlackAPIMethod;
    disconnectShared: SlackAPIMethod;
    ekm: {
      listOriginalConnectedChannelInfo: SlackAPIMethodCursorPaginated;
    };
    getConversationPrefs: SlackAPIMethod;
    getCustomRetention: SlackAPIMethod;
    getTeams: SlackAPIMethodCursorPaginated;
    invite: SlackAPIMethod;
    removeCustomRetention: SlackAPIMethod;
    rename: SlackAPIMethod;
    restrictAccess: {
      addGroup: SlackAPIMethod;
      listGroups: SlackAPIMethod;
      removeGroup: SlackAPIMethod;
    };
    search: SlackAPIMethodCursorPaginated;
    setConversationPrefs: SlackAPIMethod;
    setCustomRetention: SlackAPIMethod;
    setTeams: SlackAPIMethod;
    unarchive: SlackAPIMethod;
  };
  emoji: {
    add: SlackAPIMethod;
    addAlias: SlackAPIMethod;
    list: SlackAPIMethodCursorPaginated;
    remove: SlackAPIMethod;
    rename: SlackAPIMethod;
  };
  inviteRequests: {
    approve: SlackAPIMethod;
    approved: {
      list: SlackAPIMethodCursorPaginated;
    };
    denied: {
      list: SlackAPIMethodCursorPaginated;
    };
    deny: SlackAPIMethod;
    list: SlackAPIMethodCursorPaginated;
  };
  teams: {
    admins: {
      list: SlackAPIMethodCursorPaginated;
    };
    create: SlackAPIMethod;
    list: SlackAPIMethodCursorPaginated;
    owners: {
      list: SlackAPIMethodCursorPaginated;
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
    list: SlackAPIMethodCursorPaginated;
    remove: SlackAPIMethod;
    session: {
      clearSettings: SlackAPIMethod;
      getSettings: SlackAPIMethod;
      invalidate: SlackAPIMethod;
      list: SlackAPIMethodCursorPaginated;
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

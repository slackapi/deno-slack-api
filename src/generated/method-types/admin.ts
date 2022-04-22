import { SlackAPIMethod } from "../../types.ts";

export type AdminAPIType = {
  analytics: {
    getFile: SlackAPIMethod;
  };
  apps: {
    approve: SlackAPIMethod;
    approved: {
      list: SlackAPIMethod;
    };
    clearResolution: SlackAPIMethod;
    requests: {
      cancel: SlackAPIMethod;
      list: SlackAPIMethod;
    };
    restrict: SlackAPIMethod;
    restricted: {
      list: SlackAPIMethod;
    };
    uninstall: SlackAPIMethod;
  };
  auth: {
    policy: {
      assignEntities: SlackAPIMethod;
      getEntities: SlackAPIMethod;
      removeEntities: SlackAPIMethod;
    };
  };
  barriers: {
    create: SlackAPIMethod;
    delete: SlackAPIMethod;
    list: SlackAPIMethod;
    update: SlackAPIMethod;
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
    getCustomRetention: SlackAPIMethod;
    getTeams: SlackAPIMethod;
    invite: SlackAPIMethod;
    removeCustomRetention: SlackAPIMethod;
    rename: SlackAPIMethod;
    restrictAccess: {
      addGroup: SlackAPIMethod;
      listGroups: SlackAPIMethod;
      removeGroup: SlackAPIMethod;
    };
    search: SlackAPIMethod;
    setConversationPrefs: SlackAPIMethod;
    setCustomRetention: SlackAPIMethod;
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
      clearSettings: SlackAPIMethod;
      getSettings: SlackAPIMethod;
      invalidate: SlackAPIMethod;
      list: SlackAPIMethod;
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

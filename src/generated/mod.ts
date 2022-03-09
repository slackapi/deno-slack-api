import { BaseSlackAPIClient } from "../base-client.ts";
import { SlackAPIOptions } from "../types.ts";
import { AdminAPI } from "./admin.ts";
import { ApiAPI } from "./api.ts";
import { AppsAPI } from "./apps.ts";
import { AuthAPI } from "./auth.ts";
import { BotsAPI } from "./bots.ts";
import { CallsAPI } from "./calls.ts";
import { ChatAPI } from "./chat.ts";
import { ConversationsAPI } from "./conversations.ts";
import { DialogAPI } from "./dialog.ts";
import { DndAPI } from "./dnd.ts";
import { EmojiAPI } from "./emoji.ts";
import { FilesAPI } from "./files.ts";
import { MigrationAPI } from "./migration.ts";
import { OauthAPI } from "./oauth.ts";
import { PinsAPI } from "./pins.ts";
import { ReactionsAPI } from "./reactions.ts";
import { RemindersAPI } from "./reminders.ts";
import { RtmAPI } from "./rtm.ts";
import { SearchAPI } from "./search.ts";
import { StarsAPI } from "./stars.ts";
import { TeamAPI } from "./team.ts";
import { UsergroupsAPI } from "./usergroups.ts";
import { UsersAPI } from "./users.ts";
import { ViewsAPI } from "./views.ts";
import { WorkflowsAPI } from "./workflows.ts";

export const SlackAPI = (token?: string, options: SlackAPIOptions = {}) => {
  const client = new BaseSlackAPIClient(token, options);

  return {
    apiCall: client.apiCall.bind(client),
    response: client.response.bind(client),
    admin: AdminAPI(client),
    api: ApiAPI(client),
    apps: AppsAPI(client),
    auth: AuthAPI(client),
    bots: BotsAPI(client),
    calls: CallsAPI(client),
    chat: ChatAPI(client),
    conversations: ConversationsAPI(client),
    dialog: DialogAPI(client),
    dnd: DndAPI(client),
    emoji: EmojiAPI(client),
    files: FilesAPI(client),
    migration: MigrationAPI(client),
    oauth: OauthAPI(client),
    pins: PinsAPI(client),
    reactions: ReactionsAPI(client),
    reminders: RemindersAPI(client),
    rtm: RtmAPI(client),
    search: SearchAPI(client),
    stars: StarsAPI(client),
    team: TeamAPI(client),
    usergroups: UsergroupsAPI(client),
    users: UsersAPI(client),
    views: ViewsAPI(client),
    workflows: WorkflowsAPI(client),
  };
};

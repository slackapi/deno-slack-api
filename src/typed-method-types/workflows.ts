import { BaseMethodArgs, BaseResponse } from "../types.ts";

const VALID_TRIGGERS = {
  event: "event",
  scheduled: "scheduled",
  shortcut: "shortcut",
  webhook: "webhook",
} as const;

type BaseTrigger = {
  workflow: string;
  // workflow_app_id?: string;
  inputs: Record<string, unknown>;
};

type EventTrigger = BaseTrigger & {
  type: typeof VALID_TRIGGERS.event;
  event: { [key: string]: unknown };
};

const SCHEDULE_FREQUENCY = {
  daily: "daily",
  weekly: "weekly",
  monthly: "monthly",
  yearly: "yearly",
} as const;

const WEEKDAYS = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
} as const;

type Frequency = keyof typeof SCHEDULE_FREQUENCY;

type BaseFrequencyType = {
  type: Exclude<Frequency, typeof SCHEDULE_FREQUENCY.daily>;
  on_days?: (typeof WEEKDAYS[keyof typeof WEEKDAYS])[];
  repeats_every?: number;
  on_week_num?: number;
};

type DailyFrequencyType = {
  type: typeof SCHEDULE_FREQUENCY.daily;
  on_days: never;
  repeats_every: never;
  on_week_num: never;
};

type FrequencyType = BaseFrequencyType | DailyFrequencyType;

type ScheduledTrigger = BaseTrigger & {
  type: typeof VALID_TRIGGERS.scheduled;
  schedule: {
    start_time: string;
    end_time?: string;
    timezone?: string;
    occurence_count?: number;
    frequency?: FrequencyType;
  };
};

const t: ScheduledTrigger = {
  type: "scheduled",
  workflow: "",
  inputs: {},
  schedule: {
    start_time: "",
    frequency: { type: "monthly", repeats_every: 1 },
  },
};

type ShortcutTrigger = BaseTrigger & {
  type: typeof VALID_TRIGGERS.shortcut;
  shortcut: {
    name: string;
    description?: string;
    channel_ids?: string[];
    team_ids?: string[];
  };
};

type Trigger = ShortcutTrigger | ScheduledTrigger;

// Because this is too specific, we only ever get typeahead for the SlackAPIMethodsType
// This works for apps method types because that requires a generic to be passed

export type TypedWorkflowsMethodTypes = {
  workflows: {
    triggers: {
      create: (
        args: BaseMethodArgs & Trigger,
      ) => Promise<BaseResponse>;
    };
  };
};

import { BaseTrigger, RequiredInputs, TriggerTypes } from "./mod.ts";

export const SCHEDULE_FREQUENCY = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
  Yearly: "yearly",
} as const;

export const WEEKDAYS = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
} as const;

type FrequencyUnion =
  typeof SCHEDULE_FREQUENCY[keyof typeof SCHEDULE_FREQUENCY];
type WeekdayUnion = typeof WEEKDAYS[keyof typeof WEEKDAYS];

type BaseFrequencyType = {
  /** @description How often the trigger will activate */
  type: FrequencyUnion;
  /** @description The days of the week the trigger should activate on (not available for daily triggers) */
  on_days?: WeekdayUnion[];
  /** @description How often the trigger will repeat, respective to the frequency type */
  repeats_every?: number;
  /**
   * @description The nth week of the chosen frequency type (not available for daily, weekly, or yearly triggers)
   * @example 3 — The 3rd week of the month
   * @example -1 — The last week of the month */
  on_week_num?: 1 | 2 | 3 | 4 | -1;
};

type DailyFrequencyType =
  & {
    /** @description How often the trigger will activate */
    type: typeof SCHEDULE_FREQUENCY.Daily;
  }
  & Pick<BaseFrequencyType, "repeats_every">;

type WeeklyFrequencyType = {
  /** @description How often the trigger will activate */
  type: typeof SCHEDULE_FREQUENCY.Weekly;
} & Pick<BaseFrequencyType, "on_days" | "repeats_every">;

type MonthlyFrequencyType = {
  /** @description How often the trigger will activate */
  type: typeof SCHEDULE_FREQUENCY.Monthly;
  /** @description The days of the week the trigger should activate on (not available for daily triggers) */
  on_days?: [WeekdayUnion];
} & Pick<BaseFrequencyType, "repeats_every" | "on_week_num">;

type YearlyFrequencyType = {
  /** @description How often the trigger will activate */
  type: typeof SCHEDULE_FREQUENCY.Yearly;
} & Pick<BaseFrequencyType, "repeats_every">;

type FrequencyType =
  | DailyFrequencyType
  | WeeklyFrequencyType
  | MonthlyFrequencyType
  | YearlyFrequencyType;

type BaseTriggerSchedule = {
  /**
   * @description An ISO 8601 date string of when this scheduled trigger should first occur
   * @example "2022-03-01T14:00:00Z"
   */
  start_time: string;
  /**
   *  @description A timezone string to use for scheduling
   *  @default "UTC"
   */
  timezone?: string;
};

type SingleOccurrenceTriggerSchedule = BaseTriggerSchedule & {
  frequency?: never;
  end_time?: never;
  occurrence_count?: never;
};

type RecurringTriggerSchedule =
  & BaseTriggerSchedule
  & {
    /** @description If set, this trigger will not run past the provided date string  */
    end_time?: string;
    /** @description The maximum number of times the trigger may run */
    occurrence_count?: number;
    /** @description The configurable frequency of which this trigger will activate  */
    frequency: FrequencyType;
  };

type TriggerSchedule =
  | RecurringTriggerSchedule
  | SingleOccurrenceTriggerSchedule;

export type ScheduledTrigger = BaseTrigger & RequiredInputs & {
  type: typeof TriggerTypes.Scheduled;
  schedule: TriggerSchedule;
};

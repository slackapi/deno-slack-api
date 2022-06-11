import { BaseTrigger, RequiredInputs, VALID_TRIGGERS } from "./mod.ts";

// Should we export these consts or just rely on typing?
const SCHEDULE_FREQUENCY = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
  Yearly: "yearly",
} as const;

const WEEKDAYS = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
} as const;

type Frequency = typeof SCHEDULE_FREQUENCY[keyof typeof SCHEDULE_FREQUENCY];

// TODO: Can we share this description somehow?
type BaseFrequencyType = {
  /** @description How often the trigger will activate */
  type: Frequency;
  // type: Frequency;
  /** @description The days of the week the trigger should activate on (not available for daily triggers) */
  on_days?: (typeof WEEKDAYS[keyof typeof WEEKDAYS])[];
  /** @description How often the trigger will repeat, respective to the frequency type */
  repeats_every?: number;
  // TODO: Can we improve this description?
  /**
   * @description The nth week of the chosen frequency type (not available for daily or weekly triggers)
   * @example The 3rd week of the month */
  on_week_num?: number;
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

type MonthlyOrYearlyFrequencyType = {
  /** @description How often the trigger will activate */
  type: Extract<
    Frequency,
    typeof SCHEDULE_FREQUENCY.Monthly | typeof SCHEDULE_FREQUENCY.Yearly
  >;
} & Omit<BaseFrequencyType, "type">;

type FrequencyType =
  | MonthlyOrYearlyFrequencyType
  | DailyFrequencyType
  | WeeklyFrequencyType;

export type ScheduledTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof VALID_TRIGGERS.scheduled;
    schedule: {
      /** @description A date string of when this scheduled trigger should first occur */
      start_time: string;
      /** @description If set, this trigger will not run past the provided date string  */
      end_time?: string;
      /**
       *  @description A timezone string to use for scheduling
       *  @default "UTC"
       */
      timezone?: string;
      /** @description The maximum number of times the trigger may run */
      occurence_count?: number;
      /** @description The configurable frequency of which this trigger will activate  */
      frequency?: FrequencyType;
    };
  };

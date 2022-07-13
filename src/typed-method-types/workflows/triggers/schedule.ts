import { BaseTrigger, RequiredInputs, TriggerTypes } from "./mod.ts";
type BaseFrequencyType = {
  /** @description How often the trigger will activate */
  type: string;
  /** @description The days of the week the trigger should activate on (not available for daily triggers) */
  on_days?: string;
  /** @description How often the trigger will repeat, respective to the frequency type */
  repeats_every?: number;
  /**
   * @description The nth week of the chosen frequency type (not available for daily or weekly triggers)
   * @example The 3rd week of the month */
  on_week_num?: number;
};

type FrequencyType = BaseFrequencyType;

export type ScheduledTrigger =
  & BaseTrigger
  & RequiredInputs
  & {
    type: typeof TriggerTypes.Scheduled;
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

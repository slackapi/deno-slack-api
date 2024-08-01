import base_trigger_data from "./event-data/common-objects/all_triggers.ts";

/**
 * Scheduled-trigger-specific input values that contain information about the scheduled trigger.
 */
export const ScheduledTriggerContextData = {
  ...base_trigger_data,
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} who created the trigger.
   */
  user_id: "{{data.user_id}}",
} as const;

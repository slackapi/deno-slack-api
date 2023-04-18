/**
 * Scheduled-trigger-specific input values that contain information about the scheduled trigger.
 */
export const ScheduledTriggerData = {
  /**
   * A unique identifier for the Slack user who created the trigger.
   */
  user_id: "{{data.user_id}}",
} as const;
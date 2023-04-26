const DndStatus = {
  /**
   * Whether Do Not Disturb is enabled or not.
   */
  dnd_enabled: "{{data.dnd_status.dnd_enabled}}",
  /**
   * A UNIX timestamp representing the next Do Not Disturb window end time.
   */
  next_dnd_end_ts: "{{data.dnd_status.next_dnd_end_ts}}",
  /**
   * A UNIX timestamp representing the next Do Not Disturb window start time.
   */
  next_dnd_start_ts: "{{data.dnd_status.next_dnd_start_ts}}",
};

Object.defineProperty(DndStatus, "toJSON", {
  value: () => "{{data.dnd_status}}",
});

export const DndUpdated = {
  /**
   * Do Not Disturb object containing all DND-related data.
   */
  dnd_status: DndStatus,
  /**
   * The event type being invoked. At runtime will always be "slack#/events/dnd_updated".
   */
  event_type: "{{data.event_type}}",
  /**
   * A unique identifier for the {@link https://api.slack.com/automation/types#userid Slack user} whose DND status was updated.
   */
  user_id: "{{data.user_id}}",
} as const;

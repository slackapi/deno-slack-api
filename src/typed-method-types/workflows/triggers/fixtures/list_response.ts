export const list_response = {
  "ok": true,
  "triggers": [
      {
          "id": "Ft013ZQM1HJ7",
          "type": "shortcut",
          "workflow": {
              "id": "Fn013Z0KQU9Y",
              "callback_id": "getGif",
              "title": "getGif",
              "description": "retrieve a random gif",
              "type": "app",
              "input_parameters": [
                  {
                      "type": "slack#/types/channel_id",
                      "name": "channel",
                      "title": "Channel",
                      "description": "The channel to post to",
                      "is_required": false
                  },
                  {
                      "type": "string",
                      "name": "gifTag",
                      "title": "Gif Tag",
                      "description": "The tag to search",
                      "is_required": true
                  }
              ],
              "output_parameters": [
                  {
                      "type": "string",
                      "name": "gifURL",
                      "title": "Gif Url",
                      "description": "The GIF URL",
                      "is_required": true
                  }
              ],
              "app_id": "A013ZQM1HHR",
              "app": {
                  "id": "A013ZQM1HHR",
                  "name": "test-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-06-16/1135019846098_4ac49cc1c30da8e6fb2c_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-06-16/1135019846098_4ac49cc1c30da8e6fb2c_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-06-16/1135019846098_4ac49cc1c30da8e6fb2c_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-06-16/1135019846098_4ac49cc1c30da8e6fb2c_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1655412137
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1655412137,
          "date_updated": 1655412137,
          "name": "getGif",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A013ZQM1HHR/shortcut/Ft013ZQM1HJ7"
      },
      {
          "id": "Ft01412HB55Y",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXDT19",
              "callback_id": "triggers",
              "title": "Triggers",
              "description": "Run through triggers for create/update/delete",
              "type": "app",
              "input_parameters": [],
              "output_parameters": [
                  {
                      "type": "string",
                      "name": "results",
                      "title": "Results",
                      "is_required": true
                  }
              ],
              "app_id": "A0141SXDT0T",
              "app": {
                  "id": "A0141SXDT0T",
                  "name": "my-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919702
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1657919702,
          "date_updated": 1657919702,
          "name": "Triggers",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A0141SXDT0T/shortcut/Ft01412HB55Y"
      },
      {
          "id": "Ft01412HH68J",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUBV",
              "callback_id": "reverse",
              "title": "Reverse",
              "description": "Takes a string and reverses it",
              "type": "app",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "stringToReverse",
                      "title": "String To Reverse",
                      "description": "The string to reverse",
                      "is_required": true
                  }
              ],
              "output_parameters": [
                  {
                      "type": "string",
                      "name": "reverseString",
                      "title": "Reverse String",
                      "description": "The string in reverse",
                      "is_required": true
                  }
              ],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1657919747,
          "date_updated": 1659046228,
          "name": "Reverse",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft01412HH68J"
      },
      {
          "id": "Ft01412HH69Y",
          "type": "shortcut",
          "workflow": {
              "id": "Fn01412HH674",
              "callback_id": "triggers",
              "title": "Triggers",
              "description": "Run through triggers for create/update/delete",
              "type": "app",
              "input_parameters": [],
              "output_parameters": [
                  {
                      "type": "string",
                      "name": "results",
                      "title": "Results",
                      "is_required": true
                  }
              ],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1657919747,
          "date_updated": 1659046228,
          "name": "Triggers",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft01412HH69Y"
      },
      {
          "id": "Ft0141BC3F2N",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658339927,
          "date_updated": 1658339927,
          "name": "",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138216190675/e0e4260e88c0896ed7b67bdced43b051"
      },
      {
          "id": "Ft0141BC7ETC",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658339998,
          "date_updated": 1658339998,
          "name": "",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata"
          }
      },
      {
          "id": "Ft0141BC7FEW",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658339998,
          "date_updated": 1658339998,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft0141BC7FEW"
      },
      {
          "id": "Ft0141BC7G90",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658339999,
          "date_updated": 1658339999,
          "name": "",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138216328195/dcb5512f61b999dd78551e8dbe67823f"
      },
      {
          "id": "Ft0141BDFNTC",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658340680,
          "date_updated": 1658340680,
          "name": "",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138217606595/1dc70c08b443278916ca8ec11716a0a2"
      },
      {
          "id": "Ft0141D1NBAN",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658362993,
          "date_updated": 1658362993,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft0141D1NBAN"
      },
      {
          "id": "Ft0141D1NBDG",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658362993,
          "date_updated": 1658362993,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138273838595/bc2bec2f813b0342587678bcec2684a7"
      },
      {
          "id": "Ft0141D1NGAE",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658363048,
          "date_updated": 1658363048,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft0141D1NGAE"
      },
      {
          "id": "Ft0141D1NGCA",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658363048,
          "date_updated": 1658363048,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft0141EEHRHQ",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658427878,
          "date_updated": 1658427878,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft0141EEJ3NW",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658427896,
          "date_updated": 1658427896,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft0141EER21G",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658428077,
          "date_updated": 1658428077,
          "name": "TEST",
          "description": "",
          "event_type": "user_joined_channel"
      },
      {
          "id": "Ft0141EETV18",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658428170,
          "date_updated": 1658428170,
          "name": "TEST",
          "description": "",
          "event_type": "user_joined_team"
      },
      {
          "id": "Ft0141G0J0PL",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658448437,
          "date_updated": 1658448438,
          "name": "TEST",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata",
              "frequency": {
                  "type": "weekly",
                  "on_days": [
                      "Monday",
                      "Wednesday",
                      "Friday"
                  ],
                  "repeats_every": 2
              }
          }
      },
      {
          "id": "Ft0141G0J15Y",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658448437,
          "date_updated": 1658448438,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft0141G0J15Y"
      },
      {
          "id": "Ft0141G0J1GS",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658448438,
          "date_updated": 1658448438,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft0141RETY10",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658871774,
          "date_updated": 1658871775,
          "name": "TEST",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata",
              "frequency": {
                  "type": "weekly",
                  "on_days": [
                      "Monday",
                      "Wednesday",
                      "Friday"
                  ],
                  "repeats_every": 2
              }
          }
      },
      {
          "id": "Ft0141RETYCA",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658871774,
          "date_updated": 1658871775,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft0141RETYCA"
      },
      {
          "id": "Ft0141RK5JP4",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658873581,
          "date_updated": 1658873581,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft0141RK5JP4"
      },
      {
          "id": "Ft0141RL0E8J",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658874002,
          "date_updated": 1658874003,
          "name": "TEST",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata",
              "frequency": {
                  "type": "weekly",
                  "on_days": [
                      "Monday",
                      "Wednesday",
                      "Friday"
                  ],
                  "repeats_every": 2
              }
          }
      },
      {
          "id": "Ft0141RL0EGJ",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658874003,
          "date_updated": 1658874003,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft0141RL0EGJ"
      },
      {
          "id": "Ft0141RL0ERY",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658874003,
          "date_updated": 1658874004,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft0141SXC0QK",
          "type": "shortcut",
          "workflow": {
              "id": "Fn01412H9CCS",
              "callback_id": "reverse",
              "title": "Reverse",
              "description": "Takes a string and reverses it",
              "type": "app",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "stringToReverse",
                      "title": "String To Reverse",
                      "description": "The string to reverse",
                      "is_required": true
                  }
              ],
              "output_parameters": [
                  {
                      "type": "string",
                      "name": "reverseString",
                      "title": "Reverse String",
                      "description": "The string in reverse",
                      "is_required": true
                  }
              ],
              "app_id": "A0141SXC0HZ",
              "app": {
                  "id": "A0141SXC0HZ",
                  "name": "epic-sheep-123 (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919678
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1657919678,
          "date_updated": 1657919678,
          "name": "Reverse",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A0141SXC0HZ/shortcut/Ft0141SXC0QK"
      },
      {
          "id": "Ft0141SXDT3M",
          "type": "shortcut",
          "workflow": {
              "id": "Fn01412HB534",
              "callback_id": "reverse",
              "title": "Reverse",
              "description": "Takes a string and reverses it",
              "type": "app",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "stringToReverse",
                      "title": "String To Reverse",
                      "description": "The string to reverse",
                      "is_required": true
                  }
              ],
              "output_parameters": [
                  {
                      "type": "string",
                      "name": "reverseString",
                      "title": "Reverse String",
                      "description": "The string in reverse",
                      "is_required": true
                  }
              ],
              "app_id": "A0141SXDT0T",
              "app": {
                  "id": "A0141SXDT0T",
                  "name": "my-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919702
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1657919702,
          "date_updated": 1657919702,
          "name": "Reverse",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A0141SXDT0T/shortcut/Ft0141SXDT3M"
      },
      {
          "id": "Ft01422L5P5Y",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659046318,
          "date_updated": 1659046318,
          "name": "TEST",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata",
              "frequency": {
                  "type": "weekly",
                  "on_days": [
                      "Monday",
                      "Wednesday",
                      "Friday"
                  ],
                  "repeats_every": 2
              }
          }
      },
      {
          "id": "Ft01422L5PMY",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1659046318,
          "date_updated": 1659046318,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft01422L5PMY"
      },
      {
          "id": "Ft01422L5Q90",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659046319,
          "date_updated": 1659046319,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft01422L5QNN",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659046319,
          "date_updated": 1659046319,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138918293379/63e930fb02194e77c7a24a99bd7d4898"
      },
      {
          "id": "Ft01425CPG82",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659126703,
          "date_updated": 1659126703,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft01425CPHPU",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659126704,
          "date_updated": 1659126704,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1139012895875/2a862acf57132757b6f431c3bba293b8"
      },
      {
          "id": "Ft01425DHG3U",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659126797,
          "date_updated": 1659126797,
          "name": "TEST",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata",
              "frequency": {
                  "type": "weekly",
                  "on_days": [
                      "Monday",
                      "Wednesday",
                      "Friday"
                  ],
                  "repeats_every": 2
              }
          }
      },
      {
          "id": "Ft01425DHHQA",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1659126797,
          "date_updated": 1659126797,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft01425DHHQA"
      },
      {
          "id": "Ft01425DHK6E",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659126797,
          "date_updated": 1659126797,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft01425DHLRY",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659126797,
          "date_updated": 1659126797,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1139013694899/25fd1f8c3656323597e786cc7e1c2199"
      },
      {
          "id": "Ft01425DRU3U",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXDTFD",
              "workflow_id": "Wf01412HB5M0",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": true
                  }
              ],
              "output_parameters": [],
              "app_id": "A0141SXDT0T",
              "app": {
                  "id": "A0141SXDT0T",
                  "name": "my-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919702
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659126836,
          "date_updated": 1659126836,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1139013973795/fab6378c2f099adcafe3fdd8f5580f40"
      },
      {
          "id": "Ft01425FGAAE",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXDTFD",
              "workflow_id": "Wf01412HB5M0",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": true
                  }
              ],
              "output_parameters": [],
              "app_id": "A0141SXDT0T",
              "app": {
                  "id": "A0141SXDT0T",
                  "name": "my-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919702
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659127109,
          "date_updated": 1659127109,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1139015650547/040ffd75fb0f8b7cf4ca72d60ee47101"
      },
      {
          "id": "Ft01425N5N02",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXDTFD",
              "workflow_id": "Wf01412HB5M0",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": true
                  }
              ],
              "output_parameters": [],
              "app_id": "A0141SXDT0T",
              "app": {
                  "id": "A0141SXDT0T",
                  "name": "my-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919702
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659129214,
          "date_updated": 1659129214,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1139022286963/88b8d3500097ee6d9d10c8aabe2e6928"
      },
      {
          "id": "Ft01426C5L83",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658339926,
          "date_updated": 1658339926,
          "name": "",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata"
          }
      },
      {
          "id": "Ft01426C5LG3",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658339927,
          "date_updated": 1658339927,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft01426C5LG3"
      },
      {
          "id": "Ft01426CMD5H",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658340188,
          "date_updated": 1658340188,
          "name": "",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata"
          }
      },
      {
          "id": "Ft01426CMDKM",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658340188,
          "date_updated": 1658340188,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft01426CMDKM"
      },
      {
          "id": "Ft01426CMEBV",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658340188,
          "date_updated": 1658340188,
          "name": "",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1137386653842/a966c16c7c1957139f57c7a8c0005468"
      },
      {
          "id": "Ft01426DHU3D",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658340679,
          "date_updated": 1658340679,
          "name": "",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata"
          }
      },
      {
          "id": "Ft01426DHU7M",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1658340679,
          "date_updated": 1658340679,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft01426DHU7M"
      },
      {
          "id": "Ft01426DHUAF",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658340679,
          "date_updated": 1658340679,
          "name": "",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft014281QNF5",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658362993,
          "date_updated": 1658362993,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft014281QTA7",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658363048,
          "date_updated": 1658363048,
          "name": "TEST",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata",
              "frequency": {
                  "type": "weekly",
                  "on_days": [
                      "Monday",
                      "Wednesday",
                      "Friday"
                  ],
                  "repeats_every": 2
              }
          }
      },
      {
          "id": "Ft014281QTGB",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658363048,
          "date_updated": 1658363048,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1137443764434/fee633eeef5270e50558f20dbe2c107a"
      },
      {
          "id": "Ft01429EPSRZ",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658427986,
          "date_updated": 1658427986,
          "name": "TEST",
          "description": "",
          "event_type": "channel_created"
      },
      {
          "id": "Ft01429ERYNP",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658428033,
          "date_updated": 1658428033,
          "name": "TEST",
          "description": "",
          "event_type": "dnd_updated"
      },
      {
          "id": "Ft0142LF0WTD",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658871775,
          "date_updated": 1658871775,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft0142LK7XT5",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658873580,
          "date_updated": 1658873581,
          "name": "TEST",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata",
              "frequency": {
                  "type": "weekly",
                  "on_days": [
                      "Monday",
                      "Wednesday",
                      "Friday"
                  ],
                  "repeats_every": 2
              }
          }
      },
      {
          "id": "Ft0142LK7YKV",
          "type": "event",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1658873581,
          "date_updated": 1658873582,
          "name": "TEST",
          "description": "",
          "event_type": "reaction_added"
      },
      {
          "id": "Ft0142LKMPFV",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXDTFD",
              "workflow_id": "Wf01412HB5M0",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": true
                  }
              ],
              "output_parameters": [],
              "app_id": "A0141SXDT0T",
              "app": {
                  "id": "A0141SXDT0T",
                  "name": "my-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919702
          },
          "inputs": {},
          "outputs": {},
          "date_created": 1658873818,
          "date_updated": 1658873818,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1137869655538/69624e5b499ed8cb844d44c4b219ba4d"
      },
      {
          "id": "Ft0142T0JHA7",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXDTFD",
              "workflow_id": "Wf01412HB5M0",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": true
                  }
              ],
              "output_parameters": [],
              "app_id": "A0141SXDT0T",
              "app": {
                  "id": "A0141SXDT0T",
                  "name": "my-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919702
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1659046467,
          "date_updated": 1659046467,
          "name": "Triggers",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A0141SXDT0T/shortcut/Ft0142T0JHA7"
      },
      {
          "id": "Ft01430CPU3V",
          "type": "webhook",
          "workflow": {
              "id": "Fn0141SXDTFD",
              "workflow_id": "Wf01412HB5M0",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": true
                  }
              ],
              "output_parameters": [],
              "app_id": "A0141SXDT0T",
              "app": {
                  "id": "A0141SXDT0T",
                  "name": "my-app",
                  "icons": {
                      "image_32": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
                      "image_48": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
                      "image_64": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
                      "image_72": "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1657919702
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659126688,
          "date_updated": 1659126688,
          "name": "TEST",
          "description": "",
          "webhook_url": "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138182714210/b9426240fecaa1e93dbcc1c430b8c6cd"
      },
      {
          "id": "Ft01430CS7NF",
          "type": "scheduled",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {
              "a_string": {
                  "value": "string",
                  "locked": false,
                  "hidden": false
              }
          },
          "outputs": {},
          "date_created": 1659126703,
          "date_updated": 1659126703,
          "name": "TEST",
          "description": "",
          "schedule": {
              "start_time": "2099-11-17T07:35:03Z",
              "timezone": "Asia/Kolkata",
              "frequency": {
                  "type": "weekly",
                  "on_days": [
                      "Monday",
                      "Wednesday",
                      "Friday"
                  ],
                  "repeats_every": 2
              }
          }
      },
      {
          "id": "Ft01430CS8R1",
          "type": "shortcut",
          "workflow": {
              "id": "Fn0141SXKUHZ",
              "workflow_id": "Wf0141SXKULB",
              "callback_id": "reverse_workflow",
              "title": "Reverse Workflow",
              "description": "A sample workflow",
              "type": "workflow",
              "input_parameters": [
                  {
                      "type": "string",
                      "name": "a_string",
                      "title": "A String",
                      "is_required": true
                  },
                  {
                      "type": "string",
                      "name": "b_string",
                      "title": "B String",
                      "is_required": false
                  },
                  {
                      "type": "slack#/types/channel_id",
                      "name": "a_channel",
                      "title": "A Channel",
                      "is_required": false
                  }
              ],
              "output_parameters": [],
              "app_id": "A01412HH666",
              "app": {
                  "id": "A01412HH666",
                  "name": "my-app (dev)",
                  "icons": {
                      "image_32": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_48": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_64": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
                      "image_72": "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png"
                  },
                  "is_workflow_app": false
              },
              "date_updated": 1659046228
          },
          "inputs": {},
          "outputs": {
              "{{data.trigger_ts}}": {
                  "type": "slack#/types/timestamp",
                  "title": "Time when workflow started",
                  "description": "Time when workflow started",
                  "is_required": true,
                  "name": "trigger_ts"
              },
              "{{data.user_id}}": {
                  "type": "slack#/types/user_id",
                  "title": "Person who ran this shortcut",
                  "description": "Person who clicked the shortcut link or run button in Slack",
                  "is_required": true,
                  "name": "user_id"
              },
              "{{data.channel_id}}": {
                  "type": "slack#/types/channel_id",
                  "title": "Channel where the shortcut was run",
                  "description": "Channel where the shortcut was run, if available",
                  "is_required": false,
                  "name": "channel_id"
              }
          },
          "date_created": 1659126703,
          "date_updated": 1659126703,
          "name": "TEST",
          "description": "",
          "shortcut_url": "https://app.slack.com/app/A01412HH666/shortcut/Ft01430CS8R1"
      }
  ]
}
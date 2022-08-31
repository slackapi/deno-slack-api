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
            "is_required": false,
          },
          {
            "type": "string",
            "name": "gifTag",
            "title": "Gif Tag",
            "description": "The tag to search",
            "is_required": true,
          },
        ],
        "output_parameters": [
          {
            "type": "string",
            "name": "gifURL",
            "title": "Gif Url",
            "description": "The GIF URL",
            "is_required": true,
          },
        ],
        "app_id": "A013ZQM1HHR",
        "app": {
          "id": "A013ZQM1HHR",
          "name": "test-app",
          "icons": {
            "image_32":
              "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-06-16/1135019846098_4ac49cc1c30da8e6fb2c_32.png",
            "image_48":
              "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-06-16/1135019846098_4ac49cc1c30da8e6fb2c_48.png",
            "image_64":
              "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-06-16/1135019846098_4ac49cc1c30da8e6fb2c_64.png",
            "image_72":
              "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-06-16/1135019846098_4ac49cc1c30da8e6fb2c_72.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1655412137,
      },
      "inputs": {},
      "outputs": {
        "{{data.trigger_ts}}": {
          "type": "slack#/types/timestamp",
          "title": "Time when workflow started",
          "description": "Time when workflow started",
          "is_required": true,
          "name": "trigger_ts",
        },
        "{{data.user_id}}": {
          "type": "slack#/types/user_id",
          "title": "Person who ran this shortcut",
          "description":
            "Person who clicked the shortcut link or run button in Slack",
          "is_required": true,
          "name": "user_id",
        },
        "{{data.channel_id}}": {
          "type": "slack#/types/channel_id",
          "title": "Channel where the shortcut was run",
          "description": "Channel where the shortcut was run, if available",
          "is_required": false,
          "name": "channel_id",
        },
      },
      "date_created": 1655412137,
      "date_updated": 1655412137,
      "name": "getGif",
      "description": "",
      "shortcut_url":
        "https://app.slack.com/app/A013ZQM1HHR/shortcut/Ft013ZQM1HJ7",
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
            "is_required": true,
          },
        ],
        "app_id": "A0141SXDT0T",
        "app": {
          "id": "A0141SXDT0T",
          "name": "my-app",
          "icons": {
            "image_32":
              "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_32.png",
            "image_48":
              "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_48.png",
            "image_64":
              "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_64.png",
            "image_72":
              "https://s3-us-west-2.amazonaws.com/slack-files-dev2/avatars/2022-07-15/1137915474803_30072a5a05ff040a2f1e_72.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1657919702,
      },
      "inputs": {},
      "outputs": {
        "{{data.trigger_ts}}": {
          "type": "slack#/types/timestamp",
          "title": "Time when workflow started",
          "description": "Time when workflow started",
          "is_required": true,
          "name": "trigger_ts",
        },
        "{{data.user_id}}": {
          "type": "slack#/types/user_id",
          "title": "Person who ran this shortcut",
          "description":
            "Person who clicked the shortcut link or run button in Slack",
          "is_required": true,
          "name": "user_id",
        },
        "{{data.channel_id}}": {
          "type": "slack#/types/channel_id",
          "title": "Channel where the shortcut was run",
          "description": "Channel where the shortcut was run, if available",
          "is_required": false,
          "name": "channel_id",
        },
      },
      "date_created": 1657919702,
      "date_updated": 1657919702,
      "name": "Triggers",
      "description": "",
      "shortcut_url":
        "https://app.slack.com/app/A0141SXDT0T/shortcut/Ft01412HB55Y",
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
            "is_required": true,
          },
        ],
        "output_parameters": [
          {
            "type": "string",
            "name": "reverseString",
            "title": "Reverse String",
            "description": "The string in reverse",
            "is_required": true,
          },
        ],
        "app_id": "A01412HH666",
        "app": {
          "id": "A01412HH666",
          "name": "my-app (dev)",
          "icons": {
            "image_32":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_48":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_64":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_72":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1659046228,
      },
      "inputs": {},
      "outputs": {
        "{{data.trigger_ts}}": {
          "type": "slack#/types/timestamp",
          "title": "Time when workflow started",
          "description": "Time when workflow started",
          "is_required": true,
          "name": "trigger_ts",
        },
        "{{data.user_id}}": {
          "type": "slack#/types/user_id",
          "title": "Person who ran this shortcut",
          "description":
            "Person who clicked the shortcut link or run button in Slack",
          "is_required": true,
          "name": "user_id",
        },
        "{{data.channel_id}}": {
          "type": "slack#/types/channel_id",
          "title": "Channel where the shortcut was run",
          "description": "Channel where the shortcut was run, if available",
          "is_required": false,
          "name": "channel_id",
        },
      },
      "date_created": 1657919747,
      "date_updated": 1659046228,
      "name": "Reverse",
      "description": "",
      "shortcut_url":
        "https://app.slack.com/app/A01412HH666/shortcut/Ft01412HH68J",
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
            "is_required": true,
          },
        ],
        "app_id": "A01412HH666",
        "app": {
          "id": "A01412HH666",
          "name": "my-app (dev)",
          "icons": {
            "image_32":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_48":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_64":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_72":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1659046228,
      },
      "inputs": {},
      "outputs": {
        "{{data.trigger_ts}}": {
          "type": "slack#/types/timestamp",
          "title": "Time when workflow started",
          "description": "Time when workflow started",
          "is_required": true,
          "name": "trigger_ts",
        },
        "{{data.user_id}}": {
          "type": "slack#/types/user_id",
          "title": "Person who ran this shortcut",
          "description":
            "Person who clicked the shortcut link or run button in Slack",
          "is_required": true,
          "name": "user_id",
        },
        "{{data.channel_id}}": {
          "type": "slack#/types/channel_id",
          "title": "Channel where the shortcut was run",
          "description": "Channel where the shortcut was run, if available",
          "is_required": false,
          "name": "channel_id",
        },
      },
      "date_created": 1657919747,
      "date_updated": 1659046228,
      "name": "Triggers",
      "description": "",
      "shortcut_url":
        "https://app.slack.com/app/A01412HH666/shortcut/Ft01412HH69Y",
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
            "is_required": true,
          },
          {
            "type": "string",
            "name": "b_string",
            "title": "B String",
            "is_required": false,
          },
          {
            "type": "slack#/types/channel_id",
            "name": "a_channel",
            "title": "A Channel",
            "is_required": false,
          },
        ],
        "output_parameters": [],
        "app_id": "A01412HH666",
        "app": {
          "id": "A01412HH666",
          "name": "my-app (dev)",
          "icons": {
            "image_32":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_48":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_64":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_72":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1659046228,
      },
      "inputs": {
        "a_string": {
          "value": "string",
          "locked": false,
          "hidden": false,
        },
      },
      "outputs": {},
      "date_created": 1658339927,
      "date_updated": 1658339927,
      "name": "",
      "description": "",
      "webhook_url":
        "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138216190675/e0e4260e88c0896ed7b67bdced43b051",
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
            "is_required": true,
          },
          {
            "type": "string",
            "name": "b_string",
            "title": "B String",
            "is_required": false,
          },
          {
            "type": "slack#/types/channel_id",
            "name": "a_channel",
            "title": "A Channel",
            "is_required": false,
          },
        ],
        "output_parameters": [],
        "app_id": "A01412HH666",
        "app": {
          "id": "A01412HH666",
          "name": "my-app (dev)",
          "icons": {
            "image_32":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_48":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_64":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_72":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1659046228,
      },
      "inputs": {
        "a_string": {
          "value": "string",
          "locked": false,
          "hidden": false,
        },
      },
      "outputs": {},
      "date_created": 1658339998,
      "date_updated": 1658339998,
      "name": "",
      "description": "",
      "schedule": {
        "start_time": "2099-11-17T07:35:03Z",
        "timezone": "Asia/Kolkata",
      },
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
            "is_required": true,
          },
          {
            "type": "string",
            "name": "b_string",
            "title": "B String",
            "is_required": false,
          },
          {
            "type": "slack#/types/channel_id",
            "name": "a_channel",
            "title": "A Channel",
            "is_required": false,
          },
        ],
        "output_parameters": [],
        "app_id": "A01412HH666",
        "app": {
          "id": "A01412HH666",
          "name": "my-app (dev)",
          "icons": {
            "image_32":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_48":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_64":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_72":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1659046228,
      },
      "inputs": {},
      "outputs": {
        "{{data.trigger_ts}}": {
          "type": "slack#/types/timestamp",
          "title": "Time when workflow started",
          "description": "Time when workflow started",
          "is_required": true,
          "name": "trigger_ts",
        },
        "{{data.user_id}}": {
          "type": "slack#/types/user_id",
          "title": "Person who ran this shortcut",
          "description":
            "Person who clicked the shortcut link or run button in Slack",
          "is_required": true,
          "name": "user_id",
        },
        "{{data.channel_id}}": {
          "type": "slack#/types/channel_id",
          "title": "Channel where the shortcut was run",
          "description": "Channel where the shortcut was run, if available",
          "is_required": false,
          "name": "channel_id",
        },
      },
      "date_created": 1658339998,
      "date_updated": 1658339998,
      "name": "TEST",
      "description": "",
      "shortcut_url":
        "https://app.slack.com/app/A01412HH666/shortcut/Ft0141BC7FEW",
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
            "is_required": true,
          },
          {
            "type": "string",
            "name": "b_string",
            "title": "B String",
            "is_required": false,
          },
          {
            "type": "slack#/types/channel_id",
            "name": "a_channel",
            "title": "A Channel",
            "is_required": false,
          },
        ],
        "output_parameters": [],
        "app_id": "A01412HH666",
        "app": {
          "id": "A01412HH666",
          "name": "my-app (dev)",
          "icons": {
            "image_32":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_48":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_64":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_72":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1659046228,
      },
      "inputs": {
        "a_string": {
          "value": "string",
          "locked": false,
          "hidden": false,
        },
      },
      "outputs": {},
      "date_created": 1658339999,
      "date_updated": 1658339999,
      "name": "",
      "description": "",
      "webhook_url":
        "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138216328195/dcb5512f61b999dd78551e8dbe67823f",
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
            "is_required": true,
          },
          {
            "type": "string",
            "name": "b_string",
            "title": "B String",
            "is_required": false,
          },
          {
            "type": "slack#/types/channel_id",
            "name": "a_channel",
            "title": "A Channel",
            "is_required": false,
          },
        ],
        "output_parameters": [],
        "app_id": "A01412HH666",
        "app": {
          "id": "A01412HH666",
          "name": "my-app (dev)",
          "icons": {
            "image_32":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_48":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_64":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_72":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1659046228,
      },
      "inputs": {
        "a_string": {
          "value": "string",
          "locked": false,
          "hidden": false,
        },
      },
      "outputs": {},
      "date_created": 1658340680,
      "date_updated": 1658340680,
      "name": "",
      "description": "",
      "webhook_url":
        "https://hooks.dev.slack.com/triggers/T013ZG3K1QT/1138217606595/1dc70c08b443278916ca8ec11716a0a2",
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
            "is_required": true,
          },
          {
            "type": "string",
            "name": "b_string",
            "title": "B String",
            "is_required": false,
          },
          {
            "type": "slack#/types/channel_id",
            "name": "a_channel",
            "title": "A Channel",
            "is_required": false,
          },
        ],
        "output_parameters": [],
        "app_id": "A01412HH666",
        "app": {
          "id": "A01412HH666",
          "name": "my-app (dev)",
          "icons": {
            "image_32":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_48":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_64":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
            "image_72":
              "https://slack-pantry.dev.slack.com/8058857/img/apps/default_new_app_icon.png",
          },
          "is_workflow_app": false,
        },
        "date_updated": 1659046228,
      },
      "inputs": {},
      "outputs": {
        "{{data.trigger_ts}}": {
          "type": "slack#/types/timestamp",
          "title": "Time when workflow started",
          "description": "Time when workflow started",
          "is_required": true,
          "name": "trigger_ts",
        },
        "{{data.user_id}}": {
          "type": "slack#/types/user_id",
          "title": "Person who ran this shortcut",
          "description":
            "Person who clicked the shortcut link or run button in Slack",
          "is_required": true,
          "name": "user_id",
        },
        "{{data.channel_id}}": {
          "type": "slack#/types/channel_id",
          "title": "Channel where the shortcut was run",
          "description": "Channel where the shortcut was run, if available",
          "is_required": false,
          "name": "channel_id",
        },
      },
      "date_created": 1658362993,
      "date_updated": 1658362993,
      "name": "TEST",
      "description": "",
      "shortcut_url":
        "https://app.slack.com/app/A01412HH666/shortcut/Ft0141D1NBAN",
    },
  ],
};

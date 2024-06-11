import type { SlackAPIMethod } from "../../types.ts";

export type CanvasesAPIType = {
  access: {
    delete: SlackAPIMethod;
    set: SlackAPIMethod;
  };
  create: SlackAPIMethod;
  delete: SlackAPIMethod;
  edit: SlackAPIMethod;
  sections: {
    lookup: SlackAPIMethod;
  };
};

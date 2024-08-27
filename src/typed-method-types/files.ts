import type { BaseResponse } from "../types.ts";

interface FileUpload {
  /** @description Comma-separated list of channel names or IDs where the file will be shared. */
  channels?: string;
  /** @description If omitting this parameter, you must provide a file. */
  content?: string;
  /** @description A file type identifier. */
  filetype?: string;
  /** @description Provide another message's ts value to upload this file as a reply. Never use a reply's ts value; use its parent instead. */
  thread_ts?: string;
  /** @description The message text introducing the file in specified channels. */
  initial_comment?: string;
  /** @description Title of the file being uploaded */
  title?: string;
  /** @description Name of the file being uploaded. */
  filename?: string;
  /** @description Filetype of the file being uploaded. */
  file: Exclude<BodyInit, FormData | URLSearchParams>;
}

// Channels and filetype is no longer a supported field and filename is required for file.uploadV2.
export type FileUploadV2 =
  & Omit<FileUpload, "channels" | "filetype" | "content">
  & {
    channel_id?: string;
    /** @description Description of image for screen-reader. */
    alt_text?: string;
    /** @description Syntax type of the snippet being uploaded. */
    snippet_type?: string;
    /** @description Size in bytes of the file being uploaded. */
    length: string;
    /** @description Name of the file being uploaded. */
    filename: string;
  };

export type FileUploadV2Args = {
  file_uploads: FileUploadV2[];
};

export type GetUploadURLExternalResponse = BaseResponse & {
  file_id: string;
  upload_url: string;
};

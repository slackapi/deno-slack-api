import { BaseResponse } from "../types.ts";

export type FileUploadV2 = {
  /** @description Description of image for screen-reader. */
  alt_text?: string;
  /** @description Syntax type of the snippet being uploaded. */
  snippet_type?: string;
  /** @description The message text introducing the file in specified channels. */
  channel_id?: string;
  /** @description Provide another message's ts value to upload this file as a reply. Never use a reply's ts value; use its parent instead. */
  thread_ts?: string;
  /** @description The message text introducing the file in specified channels. */
  initial_comment?: string;
  /** @description Title of the file being uploaded */
  title?: string;

  /** @description Size in bytes of the file being uploaded. */
  length: string;
  /** @description Name of the file being uploaded. */
  filename: string;
  /** @description Filetype of the file being uploaded. */
  file: Blob | ReadableStream<Uint8Array> | string | ArrayBuffer;
};

export type FileUploadV2Args = {
  file_uploads: FileUploadV2[];
};

export type GetUploadURLExternalResponse = BaseResponse & {
  file_id: string;
  upload_url: string;
};

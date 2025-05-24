import type {
  BaseResponse,
  BaseSlackClient,
  SlackAPIMethodArgs,
  SlackAPIOptions,
} from "./types.ts";
import { createHttpError, type HttpError } from "@std/http/http-errors";
import { getUserAgent, serializeData } from "./base-client-helpers.ts";
import type {
  FileUploadV2,
  FileUploadV2Args,
} from "./typed-method-types/files.ts";

export class BaseSlackAPIClient implements BaseSlackClient {
  #token?: string;
  #baseURL: string;

  constructor(token?: string, options: SlackAPIOptions = {}) {
    this.#token = token;
    this.#baseURL = options.slackApiUrl || "https://slack.com/api/";
  }

  /**
   * @description Set an override url endpoint for Slack API calls.
   * @param apiURL url endpoint for the Slack API used for api calls. It should include the protocol, the domain and the path.
   * @example: "https://slack.com/api/"
   * @returns BaseSlackClient
   */
  setSlackApiUrl(apiURL: string) {
    this.#baseURL = apiURL;

    return this;
  }

  // TODO: [brk-chg] return the `Promise<Response>` object
  async apiCall(
    method: string,
    data: SlackAPIMethodArgs = {},
  ): Promise<BaseResponse> {
    // ensure there's a slash prior to method
    const url = `${this.#baseURL.replace(/\/$/, "")}/${method}`;
    const body = serializeData(data);

    const token = data.token || this.#token || "";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": getUserAgent(),
      },
      body,
    });
    if (!response.ok) {
      throw await this.createHttpError(response);
    }
    return await this.createBaseResponse(response);
  }

  // TODO: [brk-chg] return a `Promise<Response>` object
  async response(
    url: string,
    data: Record<string, unknown>,
  ): Promise<BaseResponse> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": getUserAgent(),
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw await this.createHttpError(response);
    }
    return await this.createBaseResponse(response);
  }

  async fileUploadV2(
    args: FileUploadV2Args,
  ) {
    const { file_uploads } = args;
    const uploadUrls = await Promise.all(
      file_uploads.map((file) => this.getFileUploadUrl(file)),
    );

    await Promise.all(
      uploadUrls.map((uploadUrl, index) =>
        this.uploadFile(uploadUrl.upload_url, file_uploads[index].file)
      ),
    );

    return await Promise.all(
      uploadUrls.map((uploadUrl, index) =>
        this.completeFileUpload(uploadUrl.file_id, file_uploads[index])
      ),
    );
  }

  private async getFileUploadUrl(file: FileUploadV2) {
    const fileMetaData = {
      filename: file.filename,
      length: file.length,
      alt_text: file.alt_text,
      snippet_type: file.snippet_type,
    };
    const response = await this.apiCall(
      "files.getUploadURLExternal",
      fileMetaData,
    );

    if (!response.ok) {
      throw new Error(JSON.stringify(response.response_metadata));
    }
    return response;
  }

  private async completeFileUpload(fileID: string, file: FileUploadV2) {
    const fileMetaData = {
      files: JSON.stringify([{ id: fileID, title: file.title }]),
      channel_id: file.channel_id,
      initial_comment: file.initial_comment,
      thread_ts: file.thread_ts,
    };
    const response = await this.apiCall(
      "files.completeUploadExternal",
      fileMetaData,
    );
    if (!response.ok) {
      throw new Error(JSON.stringify(response.response_metadata));
    }
    return response;
  }

  private async uploadFile(
    uploadUrl: string,
    file: FileUploadV2["file"],
  ) {
    const response = await fetch(uploadUrl, {
      headers: {
        "Content-Type": typeof file === "string"
          ? "text/plain"
          : "application/octet-stream",
        "User-Agent": getUserAgent(),
      },
      method: "POST",
      body: file,
    });

    if (!response.ok) {
      throw await this.createHttpError(response);
    }
    return;
  }

  private async createHttpError(response: Response): Promise<HttpError> {
    const text = await response.text();
    return createHttpError(
      response.status,
      `${response.status}: ${text}`,
      {
        headers: response.headers,
      },
    );
  }

  private async createBaseResponse(response: Response): Promise<BaseResponse> {
    return {
      toFetchResponse: () => response,
      ...await response.json(),
    };
  }
}

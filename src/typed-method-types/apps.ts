import {
  BaseMethodArgs,
  BaseResponse,
  CursorPaginationArgs,
  CursorPaginationResponse,
} from "../types.ts";

// apps.datastore Types
export type DatastoreSchema = {
  name: string;
  // deno-lint-ignore no-explicit-any
  attributes: Record<string, any>;
  primary_key: string;
};

export type DatastoreItem<Schema extends DatastoreSchema> = {
  // deno-lint-ignore no-explicit-any
  [k in keyof Schema["attributes"]]: any;
};

export type DatastorePutArgs<
  Schema extends DatastoreSchema,
> =
  & BaseMethodArgs
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    /**
     * @description The item to store
     */
    item: DatastoreItem<Schema>;
  };

export type DatastorePutResponse<
  Schema extends DatastoreSchema,
> =
  & BaseResponse
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    /**
     * @description The item that was stored
     */
    item: DatastoreItem<Schema>;
  };

export type DatastoreGetArgs<
  Schema extends DatastoreSchema,
> =
  & {
    /**
     * @description The primary key of the item to retrieve
     */
    // deno-lint-ignore no-explicit-any
    id: any;
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
  }
  & BaseMethodArgs;

export type DatastoreGetResponse<
  Schema extends DatastoreSchema,
> =
  & BaseResponse
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    /**
     * @description The retreived item
     */
    item: DatastoreItem<Schema>;
  };

export type DatastoreQueryArgs<
  Schema extends DatastoreSchema,
> =
  & BaseMethodArgs
  & CursorPaginationArgs
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    expression?: string;
    "expression_attributes"?: Record<string, string>;
    "expression_values"?: Record<string, string | boolean | number>;
  };

export type DatastoreQueryResponse<
  Schema extends DatastoreSchema,
> =
  & BaseResponse
  & CursorPaginationResponse
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    /**
     * @description The items matching your query
     */
    items: DatastoreItem<Schema>[];
  };

export type DatastoreDeleteArgs<
  Schema extends DatastoreSchema,
> =
  & {
    /**
     * @description The primary key of the item to delete
     */
    // deno-lint-ignore no-explicit-any
    id: any;
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
  }
  & BaseMethodArgs;

export type DatastoreDeleteResponse<
  Schema extends DatastoreSchema,
> = BaseResponse & {
  /**
   * @description The name of the datastore
   */
  datastore: Schema["name"];
};

export type AppsDatastoreGet = {
  <Schema extends DatastoreSchema>(
    args: DatastoreGetArgs<Schema>,
  ): Promise<DatastoreGetResponse<Schema>>;
};
export type AppsDatastorePut = {
  <Schema extends DatastoreSchema>(
    args: DatastorePutArgs<Schema>,
  ): Promise<DatastorePutResponse<Schema>>;
};
export type AppsDatastoreQuery = {
  <Schema extends DatastoreSchema>(
    args: DatastoreQueryArgs<Schema>,
  ): Promise<DatastoreQueryResponse<Schema>>;
};
export type AppsDatastoreDelete = {
  <Schema extends DatastoreSchema>(
    args: DatastoreDeleteArgs<Schema>,
  ): Promise<DatastoreDeleteResponse<Schema>>;
};

// apps.auth Types

type AppsAuthExternalGetArgs = {
  /** @description The id of a specified external token */
  external_token_id: string;
};

type AppsAuthExternalGetResponse =
  | AppsAuthExternalGetSuccessfulResponse
  | AppsAuthExternalGetFailedResponse;
type AppsAuthExternalGetSuccessfulResponse = BaseResponse & {
  ok: true;
  /** @description The actual external token */
  external_token: string;
};

type AppsAuthExternalGetFailedResponse = BaseResponse & {
  ok: false;
  external_token?: never;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

type AppsAuthExternalGet = {
  (args: AppsAuthExternalGetArgs): Promise<AppsAuthExternalGetResponse>;
};

export type TypedAppsMethodTypes = {
  apps: {
    datastore: {
      get: AppsDatastoreGet;
      put: AppsDatastorePut;
      query: AppsDatastoreQuery;
      delete: AppsDatastoreDelete;
    };
    auth: {
      external: {
        get: AppsAuthExternalGet;
      };
    };
  };
};

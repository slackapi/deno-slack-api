import type {
  BaseMethodArgs,
  BaseResponse,
  CursorPaginationArgs,
  CursorPaginationResponse,
} from "../types.ts";

// apps.datastore Types
type DynamoQueryArgs = {
  /**
   * @description A query filter expression
   * @see {@link https://api.slack.com/automation/datastores-retrieve#filter-expressions}.
   */
  expression?: string;
  /**
   * @description A map of attributes referenced in `expression`
   */
  "expression_attributes"?: Record<string, string>;
  /**
   * @description A map of values referenced in `expression`
   */
  "expression_values"?: Record<string, string | boolean | number>;
};

export type DatastoreSchema = {
  name: string;
  // deno-lint-ignore no-explicit-any
  attributes: Record<string, any>;
  primary_key: string;
};

export type DatastoreItem<Schema extends DatastoreSchema> =
  // deno-lint-ignore no-explicit-any
  & Record<Schema["primary_key"], any>
  & {
    // deno-lint-ignore no-explicit-any
    [k in keyof Schema["attributes"]]?: any;
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

export type DatastoreBulkPutArgs<
  Schema extends DatastoreSchema,
> =
  & BaseMethodArgs
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    /**
     * @description Array of items to store
     */
    items: DatastoreItem<Schema>[];
  };

export type DatastoreBulkPutResponse<
  Schema extends DatastoreSchema,
> =
  & BaseResponse
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    /**
     * @description Array of items that failed to be inserted
     */
    failed_items: DatastoreItem<Schema>[];
  };

export type DatastoreUpdateArgs<
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

export type DatastoreUpdateResponse<
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

export type DatastoreBulkGetArgs<
  Schema extends DatastoreSchema,
> =
  & {
    /**
     * @description Primary keys of the items to retrieve
     */
    // deno-lint-ignore no-explicit-any
    ids: any[];
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
  }
  & BaseMethodArgs;

export type DatastoreBulkGetResponse<
  Schema extends DatastoreSchema,
> =
  & BaseResponse
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    /**
     * @description The retreived items
     */
    items: DatastoreItem<Schema>[];
    /**
     * @description Array of items that failed to be retreived
     */
    failed_items: DatastoreItem<Schema>[];
  };

export type DatastoreQueryArgs<
  Schema extends DatastoreSchema,
> =
  & BaseMethodArgs
  & CursorPaginationArgs
  & DynamoQueryArgs
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
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

export type DatastoreCountArgs<
  Schema extends DatastoreSchema,
> =
  & BaseMethodArgs
  & DynamoQueryArgs
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
  };

export type DatastoreCountResponse<
  Schema extends DatastoreSchema,
> =
  & BaseResponse
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    /**
     * @description The number of items matching your query
     */
    count: number;
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

export type DatastoreBulkDeleteArgs<
  Schema extends DatastoreSchema,
> =
  & {
    /**
     * @description Primary keys of the items to delete
     */
    // deno-lint-ignore no-explicit-any
    ids: any[];
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
  }
  & BaseMethodArgs;

export type DatastoreBulkDeleteResponse<
  Schema extends DatastoreSchema,
> = BaseResponse & {
  /**
   * @description The name of the datastore
   */
  datastore: Schema["name"];
  /**
   * @description Primary keys of the items that failed to be deleted
   */
  // deno-lint-ignore no-explicit-any
  ids: any[];
};

export type AppsDatastoreGet = {
  <Schema extends DatastoreSchema>(
    args: DatastoreGetArgs<Schema>,
  ): Promise<DatastoreGetResponse<Schema>>;
};
export type AppsDatastoreBulkGet = {
  <Schema extends DatastoreSchema>(
    args: DatastoreBulkGetArgs<Schema>,
  ): Promise<DatastoreBulkGetResponse<Schema>>;
};
export type AppsDatastorePut = {
  <Schema extends DatastoreSchema>(
    args: DatastorePutArgs<Schema>,
  ): Promise<DatastorePutResponse<Schema>>;
};
export type AppsDatastoreBulkPut = {
  <Schema extends DatastoreSchema>(
    args: DatastoreBulkPutArgs<Schema>,
  ): Promise<DatastoreBulkPutResponse<Schema>>;
};
export type AppsDatastoreUpdate = {
  <Schema extends DatastoreSchema>(
    args: DatastoreUpdateArgs<Schema>,
  ): Promise<DatastoreUpdateResponse<Schema>>;
};
export type AppsDatastoreQuery = {
  <Schema extends DatastoreSchema>(
    args: DatastoreQueryArgs<Schema>,
  ): Promise<DatastoreQueryResponse<Schema>>;
};
export type AppsDatastoreCount = {
  <Schema extends DatastoreSchema>(
    args: DatastoreCountArgs<Schema>,
  ): Promise<DatastoreCountResponse<Schema>>;
};
export type AppsDatastoreDelete = {
  <Schema extends DatastoreSchema>(
    args: DatastoreDeleteArgs<Schema>,
  ): Promise<DatastoreDeleteResponse<Schema>>;
};
export type AppsDatastoreBulkDelete = {
  <Schema extends DatastoreSchema>(
    args: DatastoreBulkDeleteArgs<Schema>,
  ): Promise<DatastoreBulkDeleteResponse<Schema>>;
};

// apps.auth Types

type AppsAuthExternalGetArgs = {
  /** @description The id of a specified external token */
  external_token_id: string;

  /** @description always refresh the token before fetching */
  force_refresh?: boolean;
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

// AppsAuthExternalDelete

type AppsAuthExternalDeleteArgs = {
  /** @description The id of a specified external token */
  external_token_id: string;
};

type AppsAuthExternalDeleteSuccessfulResponse = BaseResponse & {
  ok: true;
};

type AppsAuthExternalDeleteFailedResponse = BaseResponse & {
  ok: false;
  // deno-lint-ignore no-explicit-any
  [otherOptions: string]: any;
};

type AppsAuthExternalDeleteResponse =
  | AppsAuthExternalDeleteSuccessfulResponse
  | AppsAuthExternalDeleteFailedResponse;

type AppsAuthExternalDelete = {
  (args: AppsAuthExternalDeleteArgs): Promise<AppsAuthExternalDeleteResponse>;
};

export type TypedAppsMethodTypes = {
  apps: {
    datastore: {
      get: AppsDatastoreGet;
      bulkGet: AppsDatastoreBulkGet;
      put: AppsDatastorePut;
      bulkPut: AppsDatastoreBulkPut;
      update: AppsDatastoreUpdate;
      query: AppsDatastoreQuery;
      count: AppsDatastoreCount;
      delete: AppsDatastoreDelete;
      bulkDelete: AppsDatastoreBulkDelete;
    };
    auth: {
      external: {
        get: AppsAuthExternalGet;
        delete: AppsAuthExternalDelete;
      };
    };
  };
};

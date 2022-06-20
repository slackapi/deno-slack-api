import { BaseMethodArgs, BaseResponse } from "../types.ts";

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
     * @description The primary key of the item to retreive
     */
    // deno-lint-ignore no-explicit-any
    [k in Schema["primary_key"]]: any;
  }
  & {
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
  & {
    /**
     * @description The name of the datastore
     */
    datastore: Schema["name"];
    expression?: string;
    "expression_attributes"?: Record<string, string>;
    "expression_values"?: Record<string, string>;
    limit?: number;
  };

export type DatastoreQueryResponse<
  Schema extends DatastoreSchema,
> =
  & BaseResponse
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
    [k in Schema["primary_key"]]: any;
  }
  & {
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

export type TypedAppsMethodTypes = {
  apps: {
    datastore: {
      get: AppsDatastoreGet;
      put: AppsDatastorePut;
      query: AppsDatastoreQuery;
      delete: AppsDatastoreDelete;
    };
  };
};

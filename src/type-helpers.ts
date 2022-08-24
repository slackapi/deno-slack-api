/**
 * @description Utility type to convert an object of strings to a union type of that objects values
 */
export type ObjectValueUnion<T extends Record<string, string>> = T[keyof T];

/**
 * @description Utility type for the array types which requires minumum one subtype in it.
 * @example "PopulatedArray<string>"
 */
export type PopulatedArray<T> = [T, ...T[]];

export type ObjectValueUnion<T extends Record<string, string>> = T[keyof T];

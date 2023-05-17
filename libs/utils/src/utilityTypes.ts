export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export type Delete<T, U> = Pick<T, Exclude<keyof T, U>>;
export type OverwriteFnReturnType<F extends (...args: any) => void, R> = (
  ...args: Parameters<F>
) => Delete<ReturnType<F>, R>;
export type ConditionallyMergeRecordTypes<C, S extends Record<string, any>> = C extends null ? S : C & S;

export type ThemeProp = {
  type: string;
  name: string;
  value: any;
}


export type DatabaseProp = {
  type: string;
  name: string;
  collectionId: number;
  documentId: number;
  key: string;
  value: any;
}

export type WithThemeAndDatabase<T> = {
  [P in keyof T]: T[P] | ThemeProp | DatabaseProp;
}
export enum ValueTypes {
  NUMBER = "NUMBER",
  TEXT = "TEXT",
  ITEMS = "ITEMS",
}

export type Item = {
  title: string;
  value: number;
};

export type Section<T> = {
  title: string;
  key: string;
  value: T;
};

export type Template = {
  key: string;
  title: string;
  numberSections: Section<number>[];
  textSections: Section<string[]>[];
  itemsSections: Section<Item[]>[];
};

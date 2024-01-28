export interface List {
  id: number;
  name: string;
}

export interface Details {
  id: number;
  modelId: number;
  name: string;
  subs: Sub[];
}

export interface Sub {
  id: number;
  name: string;
  details: Detail[];
}

export interface Detail {
  id: number;
  name: string;
  values: Value[];
}

export interface Value {
  id: number;
  name: string;
  value: string;
}

export type ModelsCharacteristics = {
  list: List[];
  details: Details;
};

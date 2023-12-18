export interface BaseResponse<T> {
  success: boolean;
  data: T;
}

export interface ModelFilter {
  title: string;
  options: string[];
}

export type ModelsResponse = {
  title: string;
  options: string[];
}[];

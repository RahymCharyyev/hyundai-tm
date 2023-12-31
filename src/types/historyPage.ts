export interface BaseResponse<T> {
  success: boolean;
  data: T;
}

export interface NewsHistory {
  id: number;
  title: string;
  type: string;
  createdAt: string;
  imagePath: string;
}

export interface DetailedNewsHistory {
  data: {
    id: number;
    title: string;
    description: string;
    type: string;
    createdAt: string;
    imagePath: string;
  };
}

export type HistoryResponse = BaseResponse<{
  rows: NewsHistory[];
}>;

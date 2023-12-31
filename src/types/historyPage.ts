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

export interface MediaData {
  images: Images;
  videos: Videos;
}

export interface Images {
  count: number;
  rows: ImagesRow[];
}

export interface Videos {
  count: number;
  rows: VideosRow[];
}

export interface ImagesRow {
  id: number;
  image: string;
  type: string;
  title: string;
  link: any;
  imagePath: string;
  posterPath: string;
}

export interface VideosRow {
  id: number;
  image: any;
  type: string;
  title: string;
  link: string;
  imagePath: string;
  posterPath: string;
}

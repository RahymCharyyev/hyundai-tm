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
  rows?: NewsHistory[];
  data?: ApiResponse;
}>;

interface MediaImage {
  id: number;
  image: string;
  type: string;
  title: string;
  link: null | string;
  imagePath: string;
  posterPath: string;
}

interface MediaVideo {
  id: number;
  image: null;
  type: string;
  title: string;
  link: string;
  imagePath: string;
  posterPath: string;
}

interface ImagesData {
  count: number;
  rows: MediaImage[];
}

interface VideosData {
  count: number;
  rows: MediaVideo[];
}

export interface ApiResponse {
  data: {
    id: number;
    images: ImagesData;
    videos: VideosData;
    hyundaiTurkmenistan: string;
    socialResponsibility: string;
  };
}

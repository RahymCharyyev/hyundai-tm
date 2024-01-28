export interface BaseResponse<T> {
  success: boolean;
  data: T;
}

export interface Banner {
  id: number;
  image_tm: string;
  image_ru: string;
  link: string;
  imageTmPath: string;
  imageRuPath: string;
}

export interface Model {
  id: number;
  name: string;
  image: string;
  link: string;
  imagePath: string;
  catalogPath: string;
}

export interface News {
  id: number;
  title: string;
  type: string;
  createdAt: string;
}

export type HomeResponse = BaseResponse<{
  banners: Banner[];
  models: Model[];
  news: News[];
}>;

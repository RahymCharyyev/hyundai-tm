import { Model } from './mainPage';

export interface BaseResponse<T> {
  success: boolean;
  data: T;
}

export interface Banner {
  id: number;
  image_tm: string;
  image_ru: string;
  link: string;
  key: string;
  modelId: number;
  imageRuPath: string;
  imageTmPath: string;
}

export interface Detail {
  id: number;
  key: string;
  modelId: number;
  title: string;
  text: string;
  image?: string;
  imagePath: string;
}

export type ModelsDetailsResponse = BaseResponse<{
  banner: Banner;
  model: Model;
  details: Detail[];
}>;

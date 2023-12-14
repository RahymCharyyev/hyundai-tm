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

export type BannerResponse = BaseResponse<Banner[]>;

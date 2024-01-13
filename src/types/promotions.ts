export interface BaseResponse {
  success: boolean;
  data: PromotionsModel[];
}

export interface PromotionsModel {
  id: number;
  title: string;
  text: string;
  image: string;
  imagePath: string;
}

export interface DetailedPromotionModel {
  data: {
    id: number;
    title: string;
    text: string;
    image: string;
    imagePath: string;
  };
}

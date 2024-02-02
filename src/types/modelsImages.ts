export interface ModelImagesResponse {
  success: boolean;
  data: ModelImage[];
}

export interface ModelImage {
  id: number;
  type: string;
  modelId: number;
  image: string;
  imagePath: string;
}

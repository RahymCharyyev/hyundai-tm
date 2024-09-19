export interface Image360Response {
  success: boolean;
  data: Image360;
}

export interface Image360 {
  prefix: string;
  imageCount: number;
  fileType: string;
}

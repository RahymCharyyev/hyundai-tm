import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { BannerResponse } from '@/types/banner';

export const getBanners = async () => {
  const { data }: AxiosResponse<BannerResponse> = await axiosInstance({
    method: 'GET',
    url: '/banners',
  });

  return data.data;
};

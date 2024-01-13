import { BaseResponse, DetailedPromotionModel } from '@/types/promotions';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export const getPromotionsData = async () => {
  const { data }: AxiosResponse<BaseResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/promotions',
  });

  return data;
};

export const getPromotionsDetailsData = async (id: number) => {
  const { data }: AxiosResponse<DetailedPromotionModel> = await axiosInstance({
    method: 'GET',
    url: `/pages/promotions/${id}`,
  });

  return data.data;
};

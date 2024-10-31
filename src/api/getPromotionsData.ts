import { BaseResponse, DetailedPromotionModel } from '@/types/promotions';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export const getPromotionsData = async (params: { lang?: string }) => {
  const { data }: AxiosResponse<BaseResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/promotions',
    params,
  });

  return data;
};

export const getPromotionsDetailsData = async (params: {
  id: number;
  lang?: string;
}) => {
  const { data }: AxiosResponse<DetailedPromotionModel> = await axiosInstance({
    method: 'GET',
    url: `/pages/promotions/${params.id}`,
    params,
  });

  return data.data;
};

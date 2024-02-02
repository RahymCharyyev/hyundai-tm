import { BaseResponse, DetailedPromotionModel } from '@/types/promotions';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

interface GetPromotionsDataParams {
  lang?: string;
}

interface GetPromotionsDetailsData {
  id: number;
  lang?: string;
}

export const getPromotionsData = async (params: GetPromotionsDataParams) => {
  const { data }: AxiosResponse<BaseResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/promotions',
    params,
  });

  return data;
};

export const getPromotionsDetailsData = async (params: GetPromotionsDetailsData) => {
  const { data }: AxiosResponse<DetailedPromotionModel> = await axiosInstance({
    method: 'GET',
    url: `/pages/promotions/${params.id}`,
    params,
  });

  return data.data;
};

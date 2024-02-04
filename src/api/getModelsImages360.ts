import { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { Image360Response } from '@/types/models360';

interface GetModelsImages360Params {
  type?: string;
  modelId?: number;
  lang?: string;
}

export const getModelsImages360 = async (params?: GetModelsImages360Params) => {
  const { data }: AxiosResponse<Image360Response> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/images/360',
    params,
  });

  return data.data;
};

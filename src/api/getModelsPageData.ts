import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { ModelsResponse } from '@/types/modelsPage';

interface GetModelsPageDataParams {
  boardMin?: number;
  boardMax?: number;
  fuelMin?: number;
  fuelMax?: number;
  priceMin?: number;
  priceMax?: number;
  options?: string;
  search?: string;
  lang?: string;
}

export const getModelsPageData = async (params?: GetModelsPageDataParams) => {
  const { data }: AxiosResponse<ModelsResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/models',
    params,
  });

  return data.data;
};

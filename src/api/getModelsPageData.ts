import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { ModelsResponse } from '@/types/modelsPage';

interface GetModelsPageDataParams {
  options?: string;
  frameId?: number | null;
  availableOptions?: number | null;
}

export const getModelsPageData = async (params?: GetModelsPageDataParams) => {
  const { data }: AxiosResponse<ModelsResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/models',
    params: params || {},
  });

  return data.data;
};

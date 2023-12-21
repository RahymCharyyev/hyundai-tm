import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { ModelsResponse } from '@/types/modelsPage';

export const getModelsPageData = async (params?: {
  options?: string;
  frameId?: number;
}) => {
  const { data }: AxiosResponse<ModelsResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/models',
    params: params || {},
  });

  return data.data;
};

import { ModelsDetailsResponse } from '@/types/modelsDetailsPage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

interface GetModelsDetailsPageDataParams {
  key?: string;
  modelId?: number;
}

export const getModelsDetailsPageData = async (
  params?: GetModelsDetailsPageDataParams,
) => {
  const { data }: AxiosResponse<ModelsDetailsResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details',
    params: params,
  });

  return data.data;
};

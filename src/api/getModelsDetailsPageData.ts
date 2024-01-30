import { ModelsDetailsResponse } from '@/types/modelsDetailsPage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { ModelsCharacteristics } from '@/types/modelsCharacteristics';
import { ModelImagesResponse } from '@/types/modelsImages';

interface GetModelsDetailsPageDataParams {
  key?: string;
  modelId?: number;
}

interface GetModelsCharactericsticsParams {
  configurationId?: string;
  modelId?: number;
}

interface GetModelsImagesParams {
  type?: string;
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

export const getModelsCharactericstics = async (
  params?: GetModelsCharactericsticsParams,
) => {
  const { data }: AxiosResponse<ModelsCharacteristics> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/characteristics',
    params: params,
  });

  return data;
};

export const getModelsImages = async (params?: GetModelsImagesParams) => {
  const { data }: AxiosResponse<ModelImagesResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/images',
    params: params,
  });

  return data.data;
};

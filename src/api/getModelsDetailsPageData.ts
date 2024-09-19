import { ModelsDetailsResponse } from '@/types/modelsDetailsPage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { ModelsCharacteristics } from '@/types/modelsCharacteristics';
import { ModelImagesResponse } from '@/types/modelsImages';

interface GetModelsDetailsPageDataParams {
  key?: string;
  modelId?: number;
  lang?: string;
}

interface GetModelsCharactericsticsParams {
  configurationId?: number;
  modelId?: number;
  lang?: string;
}

interface GetModelsImagesParams {
  type?: string;
  modelId?: number;
  lang?: string;
}

export const getModelsDetailsPageData = async (
  params?: GetModelsDetailsPageDataParams,
) => {
  const { data }: AxiosResponse<ModelsDetailsResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details',
    params,
  });

  return data.data;
};

export const getModelsCharactericstics = async (
  params?: GetModelsCharactericsticsParams,
) => {
  const { data }: AxiosResponse<ModelsCharacteristics> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/characteristics',
    params,
  });

  return data;
};

export const getModelsImages = async (params?: GetModelsImagesParams) => {
  const { data }: AxiosResponse<ModelImagesResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/images',
    params,
  });

  return data.data;
};

export const getModelsDetailsSpecificationsData = async (
  params?: GetModelsDetailsPageDataParams,
) => {
  const { data }: AxiosResponse<ModelsDetailsResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/specification',
    params,
  });

  return data.data;
};

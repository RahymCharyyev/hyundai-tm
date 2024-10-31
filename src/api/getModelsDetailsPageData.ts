import { ModelsDetailsResponse } from '@/types/modelsDetailsPage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { ModelsCharacteristics } from '@/types/modelsCharacteristics';
import { ModelImagesResponse } from '@/types/modelsImages';

export const getModelsDetailsPageData = async (params?: {
  key?: string;
  modelId?: number;
  lang?: string;
}) => {
  const { data }: AxiosResponse<ModelsDetailsResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details',
    params,
  });

  return data.data;
};

export const getModelsCharactericstics = async (params?: {
  configurationId?: number;
  modelId?: number;
  lang?: string;
}) => {
  const { data }: AxiosResponse<ModelsCharacteristics> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/characteristics',
    params,
  });

  return data;
};

export const getModelsImages = async (params?: {
  type?: string;
  modelId?: number;
  lang?: string;
}) => {
  const { data }: AxiosResponse<ModelImagesResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/images',
    params,
  });

  return data.data;
};

export const getModelsDetailsSpecificationsData = async (params?: {
  key?: string;
  modelId?: number;
  lang?: string;
}) => {
  const { data }: AxiosResponse<ModelsDetailsResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/model-details/specification',
    params,
  });

  return data.data;
};

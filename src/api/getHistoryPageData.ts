import { ApiResponse, DetailedNewsHistory, HistoryResponse } from '@/types/historyPage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

interface GetNewsDataParams {
  search?: string;
  lang?: string;
}

interface GetNewsDetailsDataParams {
  id: number;
  lang?: string;
}

interface GetMediaDataParams {
  lang?: string;
}

interface GetHistoryDataParams {
  lang?: string;
}

export const getNewsData = async (params?: GetNewsDataParams) => {
  const { data }: AxiosResponse<HistoryResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/news',
    params,
  });

  return data.data;
};

export const getNewsDetailsData = async (params?: GetNewsDetailsDataParams) => {
  const { data }: AxiosResponse<DetailedNewsHistory> = await axiosInstance({
    method: 'GET',
    url: `/pages/news/${params?.id}`,
    params,
  });

  return data;
};

export const getMediaData = async (params?: GetMediaDataParams) => {
  const { data }: AxiosResponse<ApiResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/media',
    params,
  });

  return data;
};

export const getHistoryData = async (params?: GetHistoryDataParams) => {
  const { data }: AxiosResponse<ApiResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/history',
    params,
  });

  return data;
};

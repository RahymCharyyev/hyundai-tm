import { ApiResponse, DetailedNewsHistory, HistoryResponse } from '@/types/historyPage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

interface GetNewsDataParams {
  search?: string;
}

export const getNewsData = async (params?: GetNewsDataParams) => {
  const { data }: AxiosResponse<HistoryResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/news',
  });

  return data.data;
};

export const getNewsDetailsData = async (id: number) => {
  const { data }: AxiosResponse<DetailedNewsHistory> = await axiosInstance({
    method: 'GET',
    url: `/pages/news/${id}`,
  });

  return data;
};

export const getMediaData = async () => {
  const { data }: AxiosResponse<ApiResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/media',
  });

  return data;
};

export const getHistoryData = async () => {
  const { data }: AxiosResponse<ApiResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/history',
  });

  return data;
};

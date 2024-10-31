import {
  ApiResponse,
  DetailedNewsHistory,
  HistoryResponse,
} from '@/types/historyPage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export const getNewsData = async (params?: {
  search?: string;
  lang?: string;
}) => {
  const { data }: AxiosResponse<HistoryResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/news',
    params,
  });

  return data.data;
};

export const getNewsDetailsData = async (params?: {
  id: number;
  lang?: string;
}) => {
  const { data }: AxiosResponse<DetailedNewsHistory> = await axiosInstance({
    method: 'GET',
    url: `/pages/news/${params?.id}`,
    params,
  });

  return data;
};

export const getMediaData = async (params?: { lang?: string }) => {
  const { data }: AxiosResponse<ApiResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/media',
    params,
  });

  return data;
};

export const getHistoryData = async (params?: { lang?: string }) => {
  const { data }: AxiosResponse<ApiResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/history',
    params,
  });

  return data;
};

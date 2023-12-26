import { DetailedNewsHistory, HistoryResponse } from '@/types/historyPage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export const getNewsData = async () => {
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

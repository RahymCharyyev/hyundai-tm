import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { HomeResponse } from '@/types/mainPage';

export const getMainPageData = async (params?: { lang?: string }) => {
  const { data }: AxiosResponse<HomeResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/home',
    params,
  });

  return data.data;
};

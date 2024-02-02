import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { HomeResponse } from '@/types/mainPage';

interface GetMainPageDataParams {
  lang?: string;
}

export const getMainPageData = async (params?: GetMainPageDataParams) => {
  const { data }: AxiosResponse<HomeResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/home',
    params,
  });

  return data.data;
};

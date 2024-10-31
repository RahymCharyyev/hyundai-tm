import { BaseResponse } from '@/types/contacts';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export const getContacts = async (params?: { lang?: string }) => {
  const { data }: AxiosResponse<BaseResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/contacts',
    params: params,
  });

  return data;
};

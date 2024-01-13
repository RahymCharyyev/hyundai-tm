import { BaseResponse } from '@/types/contacts';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export const getContacts = async () => {
  const { data }: AxiosResponse<BaseResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/contacts',
  });

  return data;
};

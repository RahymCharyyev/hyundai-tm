import { BaseResponse } from '@/types/contacts';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

interface GetContactsParams {
  lang?: string;
}

export const getContacts = async (params?: GetContactsParams) => {
  const { data }: AxiosResponse<BaseResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/contacts',
    params: params,
  });

  return data;
};

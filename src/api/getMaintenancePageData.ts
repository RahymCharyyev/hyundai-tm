import { MaintenanceResponse } from '@/types/servicePage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export const getMaintenanceData = async (params?: { lang?: string }) => {
  const { data }: AxiosResponse<MaintenanceResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/service',
    params: params,
  });

  return data.data;
};

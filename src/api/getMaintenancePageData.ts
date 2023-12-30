import { MaintenanceEvents } from '@/types/servicePage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

interface GetNewsDataParams {
  search?: string;
}

export const getMaintenanceData = async (params?: GetNewsDataParams) => {
  const { data }: AxiosResponse<MaintenanceEvents> = await axiosInstance({
    // method: 'GET',
    // url: '/pages/news',
  });

  return data;
};

import { MaintenanceResponse } from '@/types/servicePage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

interface GetMaintenancePageParams {
  lang?: string;
}

export const getMaintenanceData = async (params?: GetMaintenancePageParams) => {
  const { data }: AxiosResponse<MaintenanceResponse> = await axiosInstance({
    method: 'GET',
    url: '/pages/service',
    params: params,
  });

  return data.data;
};

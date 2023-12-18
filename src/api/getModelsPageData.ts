import { ModelsResponse } from '@/types/modelsPage';
import type { AxiosResponse } from 'axios';
import axios from 'axios';

export const getModelsPageData = async (): Promise<ModelsResponse> => {
  const { data }: AxiosResponse<ModelsResponse> = await axios({
    method: 'GET',
    url: 'filter.json',
  });

  return data;
};

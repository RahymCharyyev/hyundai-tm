import { ApplicationModel } from '@/types/servicePage';
import type { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export const postApplication = async (formData: ApplicationModel, type: string) => {
  try {
    const { data }: AxiosResponse<any> = await axiosInstance({
      method: 'POST',
      url: '/pages/application',
      data: { ...formData, type },
    });
    console.log('Feedback form submitted successfully:', data);
    return data;
  } catch (error) {
    console.error('Error submitting feedback form:', error);
    throw error;
  }
};

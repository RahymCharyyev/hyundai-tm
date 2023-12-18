import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://hyundai-api.vercel.app/api',
});

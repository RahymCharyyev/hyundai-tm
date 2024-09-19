import axios from 'axios';

export const baseUrl = process.env.NEXT_PUBLIC_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

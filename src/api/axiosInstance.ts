import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8444/api',
});

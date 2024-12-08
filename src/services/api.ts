// src/services/api.ts
import axios from 'axios';
import { getToken } from '../utils/tokenUtils';

const api = axios.create({
  baseURL: 'https://your-backend-api.com/api', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in headers
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
// src/services/authService.ts
import api from './api';
import { AuthResponse, User } from '../types';



// Login Function
interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};

// Register Function
interface RegisterData {
  name: string;
  email: string;
  password: string;
  // Add other registration fields as necessary
}

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', data);
  return response.data;
};

// Logout Function
export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};
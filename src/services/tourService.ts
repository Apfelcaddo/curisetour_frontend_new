// src/services/tourService.ts
import api from './api';
import { Tour, TourResponse, ToursResponse } from '../types';

// Get All Tours
export const getTours = async (): Promise<ToursResponse> => {
  const response = await api.get<ToursResponse>('/tours');
  return response.data;
};

// Get Tour by ID
export const getTourById = async (id: string): Promise<TourResponse> => {
  const response = await api.get<TourResponse>(`/tours/${id}`);
  return response.data;
};

// Create a New Tour
interface CreateTourData {
  name: string;
  description: string;
  price: number;
  // Add other tour creation fields
}

export const createTour = async (data: CreateTourData): Promise<TourResponse> => {
  const response = await api.post<TourResponse>('/tours', data);
  return response.data;
};

// Update an Existing Tour
interface UpdateTourData {
  name?: string;
  description?: string;
  price?: number;
  // Add other tour update fields
}

export const updateTour = async (id: string, data: UpdateTourData): Promise<TourResponse> => {
  const response = await api.put<TourResponse>(`/tours/${id}`, data);
  return response.data;
};

// Delete a Tour
export const deleteTour = async (id: string): Promise<void> => {
  await api.delete(`/tours/${id}`);
};
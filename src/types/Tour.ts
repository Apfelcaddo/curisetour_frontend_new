// src/types/Tour.ts

export interface Tour {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface TourResponse {
    tour: Tour;
  }
  
  export interface ToursResponse {
    tours: Tour[];
  }
// src/types/Tour.ts

export interface Tour {
    id: string;
    name: string;
    description: string;
    price: number;
    // Add other relevant fields
  }
  
  export interface TourResponse {
    tour: Tour;
  }
  
  export interface ToursResponse {
    tours: Tour[];
  }
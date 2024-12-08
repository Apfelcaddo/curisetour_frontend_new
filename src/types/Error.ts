// src/types/Error.ts

export interface ApiError {
    response: {
      data: {
        message: string;
      };
      status: number;
    };
  }
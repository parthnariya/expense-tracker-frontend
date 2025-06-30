import { api } from './api';

import type { Space, ApiResponse } from '@/types';

export const spacesApi = {
  create: async (data: {
    name: string;
    description?: string;
  }): Promise<ApiResponse<Space>> => {
    const response = await api.post('/api/spaces', data);
    return response.data;
  },

  getById: async (id: string): Promise<ApiResponse<Space>> => {
    const response = await api.get(`/api/spaces/${id}`);
    return response.data;
  },
};

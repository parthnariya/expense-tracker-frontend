export type ApiResponse<T> = {
  success: boolean;
  data: T;
  meta: {
    timestamp: string;
    path: string;
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
};

export type ApiError = {
  success: false;
  error: {
    message: string;
    code?: string;
    details?: unknown;
  };
  meta: {
    timestamp: string;
    path: string;
  };
};

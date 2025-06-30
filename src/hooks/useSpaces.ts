import { useMutation, useQuery } from '@tanstack/react-query';

import { spacesApi } from '@/services/apiService/spacesApi';

export const useCreateSpace = () =>
  useMutation({
    mutationFn: spacesApi.create,
  });

export const useSpace = (id: string) =>
  useQuery({
    queryKey: ['space', id],
    queryFn: () => spacesApi.getById(id),
    enabled: !!id,
  });

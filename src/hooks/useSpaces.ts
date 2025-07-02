import {
  useMutation,
  useQuery,
  type UndefinedInitialDataOptions,
} from '@tanstack/react-query';

import type { ApiResponse, Space } from '@/types';

import { createQueryKey } from '@/constants/queries';
import { spacesApi } from '@/services/apiService/spacesApi';

export const useCreateSpace = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) =>
  useMutation({
    mutationFn: () => spacesApi.create({ name, description }),
  });

type OptionType = Partial<
  UndefinedInitialDataOptions<
    ApiResponse<Space>,
    Error,
    ApiResponse<Space>,
    string[]
  >
>;

export const useSpace = (id: string, options?: OptionType) =>
  useQuery({
    queryKey: createQueryKey.space(id),
    queryFn: () => spacesApi.getById(id),
    enabled: !!id,
    ...options,
  });

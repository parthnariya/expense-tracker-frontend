import { useEffect, useState, useCallback } from 'react';

import { useCreateSpace, useSpace } from '@/hooks/useSpaces';
import { storageUtils } from '@/services/storageService/spaceStorage';
import { useAppDispatch } from '@/store';
import { setCurrentSpace } from '@/store/slices/spaces/spacesSlice';

const useSpaceInitialization = () => {
  const [spaceId, setSpaceId] = useState<string | null>(
    storageUtils.getSpaceId(),
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReadyForRedirect, setIsReadyForRedirect] = useState(false);

  const dispatch = useAppDispatch();

  const {
    refetch: refetchSpace,
    isFetching,
    error: spaceQueryError,
  } = useSpace(spaceId || '', { enabled: false });

  const {
    mutate: createSpace,
    isPending: isCreating,
    error: createMutationError,
  } = useCreateSpace({
    name: `My Expense Tracker ${new Date().toLocaleDateString()}`,
    description: 'Personal finance management space',
  });

  const initializeSpace = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    let currentSpaceId = storageUtils.getSpaceId();

    if (currentSpaceId) {
      const { error: fetchError, data } = await refetchSpace();
      if (data) {
        dispatch(setCurrentSpace(data.data));
      }
      if (fetchError) {
        storageUtils.removeSpaceId();
        currentSpaceId = null;
      }
    }

    if (!currentSpaceId && !isCreating) {
      createSpace(undefined, {
        onSuccess: (data) => {
          storageUtils.setSpaceId(data.data.id);
          setSpaceId(data.data.id);
          setIsLoading(false);
          setIsReadyForRedirect(true);
          dispatch(setCurrentSpace(data.data));
        },
        onError: () => {
          setError('Failed to initialize space. Please try again.');
          setIsLoading(false);
          setIsReadyForRedirect(false);
        },
      });
    } else {
      setSpaceId(currentSpaceId);
      setIsLoading(false);
      setIsReadyForRedirect(true);
    }
  }, [createSpace, refetchSpace, dispatch]);

  useEffect(() => {
    initializeSpace();
  }, [initializeSpace]);

  const combinedError =
    error || spaceQueryError?.message || createMutationError?.message;
  const loading = isLoading || isFetching || isCreating;

  return {
    loading,
    error: combinedError,
    isReadyForRedirect,
    initializeSpace,
    spaceId,
  };
};

export default useSpaceInitialization;

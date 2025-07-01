import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { RotateCw } from 'lucide-react';
import { useCallback, type MouseEventHandler } from 'react';
import { Navigate } from 'react-router';

import Condition from '@/components/ui/Condition';
import useSpaceInitialization from '@/hooks/useSpaceInitialization';
import { ROUTE_PATHS } from '@/routes/paths';

const SpacePage = () => {
  const { error, isReadyForRedirect, loading, initializeSpace, spaceId } =
    useSpaceInitialization();

  const handleRetry: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (e) => {
      e.preventDefault();
      await initializeSpace();
    },
    [initializeSpace],
  );

  return (
    <Stack
      alignItems="center"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack alignItems="center" gap={2} justifyContent="center">
        <Condition>
          <Condition.If condition={loading}>
            <CircularProgress size={40} />
            <Typography variant="body1">Setting up your space...</Typography>
          </Condition.If>
          <Condition.ElseIf condition={Boolean(error)}>
            <Stack alignItems="center" gap={2} justifyContent="center">
              <Typography color="error" variant="h6">
                {error}
              </Typography>
              <Button
                endIcon={<RotateCw size={16} />}
                variant="contained"
                onClick={handleRetry}
              >
                Retry
              </Button>
            </Stack>
          </Condition.ElseIf>
          <Condition.ElseIf condition={isReadyForRedirect}>
            <Navigate
              to={ROUTE_PATHS.TRANSACTION_PAGE.replace(':spaceId', spaceId!)}
            />
          </Condition.ElseIf>
        </Condition>
      </Stack>
    </Stack>
  );
};

export default SpacePage;

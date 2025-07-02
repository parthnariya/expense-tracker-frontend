import {
  Container,
  CircularProgress,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { RotateCw } from 'lucide-react';
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router';

import CreateTransactionFAB from '@/components/transactionpage/CreateTransaction';
import SummaryCardsSection from '@/components/transactionpage/SummaryCardSection';
import TransactionSection from '@/components/transactionpage/TransactionSection';
import Condition from '@/components/ui/Condition';
import { useSpace } from '@/hooks/useSpaces';
import { ROUTE_PATHS } from '@/routes/paths';
import { useAppDispatch } from '@/store';
import { setCurrentSpace } from '@/store/slices/spaces/spacesSlice';

const TransactionPage = () => {
  const { spaceId } = useParams<{ spaceId: string }>();
  const dispatch = useAppDispatch();

  const {
    data: spaceData,
    isLoading,
    isError,
  } = useSpace(spaceId || '', {
    enabled: !!spaceId,
  });

  useEffect(() => {
    if (spaceData?.data && spaceId) {
      dispatch(setCurrentSpace(spaceData.data));
    }
  }, [spaceData, spaceId, dispatch]);

  const handleRetry = () => {
    <Navigate replace to={ROUTE_PATHS.SPACE_PAGE} />;
  };

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ m: 0, width: '100%', height: '100%', p: { xs: 0 } }}
      >
        <Stack
          alignItems="center"
          height="100%"
          justifyContent="flex-start"
          width="100%"
        >
          <Condition>
            <Condition.If condition={isLoading}>
              <Stack
                alignItems="center"
                height="100%"
                justifyContent="center"
                width="100%"
              >
                <CircularProgress size={40} />
                <Typography sx={{ mt: 2 }} variant="body1">
                  Loading space...
                </Typography>
              </Stack>
            </Condition.If>
            <Condition.ElseIf condition={isError || !spaceId}>
              <Stack alignItems="center" gap={2} justifyContent="center">
                <Typography color="error" variant="h6">
                  {!spaceId ? 'Invalid space ID' : 'Failed to load space'}
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
            <Condition.Else>
              <SummaryCardsSection />
              <TransactionSection />
              <CreateTransactionFAB />
            </Condition.Else>
          </Condition>
        </Stack>
      </Container>
    </>
  );
};

export default TransactionPage;

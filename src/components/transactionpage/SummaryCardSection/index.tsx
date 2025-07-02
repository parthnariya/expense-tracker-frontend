import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Condition from '../../ui/Condition';

import LoadingSummaryCard from './LoadingSummaryCard';
import SummaryCard from './SummaryCard';

import { useTransactionSummary } from '@/hooks/useTransactions';
import { selectCurrentSpace } from '@/store/slices/spaces/spaceSelectors';

const SummaryCardsSection = () => {
  const space = useSelector(selectCurrentSpace);
  const { spaceId } = useParams();

  const { data, isLoading, error } = useTransactionSummary(
    space?.id || spaceId || '',
  );

  const summaryData = useMemo(() => {
    if (data?.data) {
      return {
        totalIncome: data.data.totalIncome,
        totalExpense: data.data.totalExpense,
        netBalance: data.data.totalIncome - data.data.totalExpense,
      };
    }
    return {
      totalIncome: 0,
      totalExpense: 0,
      netBalance: 0,
    };
  }, [data?.data]);

  return (
    <Container
      component="section"
      maxWidth={false}
      sx={{
        py: {
          xs: 1,
          lg: 2,
        },
        px: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }}>
        <Box flexGrow={1}>
          <Grid container p={2} spacing={2}>
            <Condition>
              <Condition.If condition={isLoading}>
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
              </Condition.If>
              <Condition.ElseIf condition={Boolean(error)}>
                <Grid
                  alignItems="center"
                  bgcolor="background.paper"
                  border={1}
                  borderColor="grey.200"
                  borderRadius={1.5}
                >
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <Typography variant="body1">
                      Failed to load transaction summary
                    </Typography>
                  </Alert>
                </Grid>
              </Condition.ElseIf>
              <Condition.Else>
                <SummaryCard amount={summaryData.totalIncome} type="income" />
                <SummaryCard amount={summaryData.totalExpense} type="expense" />
                <SummaryCard amount={summaryData.netBalance} type="balance" />
              </Condition.Else>
            </Condition>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default SummaryCardsSection;

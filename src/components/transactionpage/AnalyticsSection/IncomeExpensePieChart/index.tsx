import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { AlertTriangleIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Chart from './chart';

import Condition from '@/components/ui/Condition';
import { useTransactionSummary } from '@/hooks/useTransactions';
import { selectCurrentSpace } from '@/store/slices/spaces/spaceSelectors';

const IncomeExpensePieChart = () => {
  const space = useSelector(selectCurrentSpace);
  const { spaceId } = useParams();
  const { data, isLoading, error } = useTransactionSummary(
    spaceId || space?.id || '',
  );

  return (
    <Box minHeight={300} width="100%">
      <Condition>
        <Condition.If condition={isLoading}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <CircularProgress />
          </Stack>
        </Condition.If>
        <Condition.ElseIf condition={Boolean(error)}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <Typography alignContent="center" color="error" variant="body2">
              <AlertTriangleIcon size={20} />
            </Typography>
            <Typography color="error" variant="body2">
              Failed to load data
            </Typography>
          </Stack>
        </Condition.ElseIf>
        <Condition.ElseIf condition={!data?.data}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <Typography color="text.secondary" variant="body2">
              No transaction data available
            </Typography>
          </Stack>
        </Condition.ElseIf>
        <Condition.Else>
          <Chart data={data?.data || { totalExpense: 0, totalIncome: 0 }} />
        </Condition.Else>
      </Condition>
    </Box>
  );
};

export default IncomeExpensePieChart;

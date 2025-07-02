import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { InfoIcon, PlusIcon, RefreshCcwIcon } from 'lucide-react';
import { useState, type MouseEventHandler } from 'react';
import { useNavigate } from 'react-router';

import TransactionModal from '../../CreateTransaction/TransactionModal';

import TransactionTable from './TransactionTable';

import type { Transaction } from '@/types';

import Condition from '@/components/ui/Condition';
import { ROUTE_PATHS } from '@/routes/paths';

interface TransactionTableContainerProps {
  transactions: Transaction[];
  isLoading: boolean;
  isError: boolean;
}

const TransactionTableContainer = ({
  transactions,
  isLoading,
  isError,
}: TransactionTableContainerProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleRefresh: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(ROUTE_PATHS.SPACE_PAGE);
  };

  const handleCreateTask: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsCreateModalOpen(true);
  };

  const handleClose = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <>
      <TransactionModal open={isCreateModalOpen} onClose={handleClose} />
      <Condition>
        <Condition.If condition={isLoading}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <CircularProgress />
            <Typography>Loading transactions...</Typography>
          </Stack>
        </Condition.If>
        <Condition.ElseIf condition={isError}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <Typography color="error">Failed to load transactions.</Typography>
            <Button
              color="primary"
              endIcon={<RefreshCcwIcon size={18} />}
              variant="contained"
              onClick={handleRefresh}
            >
              Try Again
            </Button>
          </Stack>
        </Condition.ElseIf>
        <Condition.ElseIf condition={Number(transactions.length) <= 0}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <Typography>
              <InfoIcon />
            </Typography>
            <Typography>Transaction Not Found</Typography>
            <Button
              color="primary"
              endIcon={<PlusIcon size={18} />}
              variant="contained"
              onClick={handleCreateTask}
            >
              Create new
            </Button>
          </Stack>
        </Condition.ElseIf>
        <Condition.Else>
          <TransactionTable transactions={transactions} />
        </Condition.Else>
      </Condition>
    </>
  );
};

export default TransactionTableContainer;

import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { InfoIcon, PlusIcon, RefreshCcwIcon } from 'lucide-react';
import { useState, type MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import TransactionModal from '../../CreateTransaction/TransactionModal';

import DeleteConfirmModal from './DeleteConfirmModal';
import TransactionTable from './TransactionTable';

import type { Transaction } from '@/types';

import Condition from '@/components/ui/Condition';
import { useDeleteTransaction } from '@/hooks/useTransactions';
import { ROUTE_PATHS } from '@/routes/paths';
import { selectCurrentSpace } from '@/store/slices/spaces/spaceSelectors';

interface TransactionTableContainerProps {
  transactions: Transaction[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

const TransactionTableContainer = ({
  transactions,
  isLoading,
  isError,
  refetch,
}: TransactionTableContainerProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const navigate = useNavigate();
  const currentSpace = useSelector(selectCurrentSpace);
  const spaceId = currentSpace?.id;
  const { mutate: deleteTransaction, isPending: isDeleting } =
    useDeleteTransaction();

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

  const handleDeleteRequest = (transactionId: string) => {
    setDeleteId(transactionId);
    setIsConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setIsConfirmOpen(false);
    setDeleteId(null);
  };

  const handleDeleteConfirm = () => {
    if (spaceId && deleteId) {
      deleteTransaction(
        { spaceId, transactionId: deleteId },
        { onSuccess: handleConfirmClose },
      );
      refetch();
    }
  };

  return (
    <>
      <TransactionModal open={isCreateModalOpen} onClose={handleClose} />
      <DeleteConfirmModal
        loading={isDeleting}
        open={isConfirmOpen}
        onClose={handleConfirmClose}
        onConfirm={handleDeleteConfirm}
      />
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
          <TransactionTable
            transactions={transactions}
            onDeleteRequest={handleDeleteRequest}
          />
        </Condition.Else>
      </Condition>
    </>
  );
};

export default TransactionTableContainer;

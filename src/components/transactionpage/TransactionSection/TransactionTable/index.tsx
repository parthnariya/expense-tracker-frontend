import {
  Button,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { InfoIcon, PlusIcon, RefreshCcwIcon } from 'lucide-react';
import { useState, type MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import TransactionModal from '../../CreateTransaction/TransactionModal';

import TransactionTableRow from './TransactionTableRow';

import type { Transaction } from '@/types';

import Condition from '@/components/ui/Condition';
import TableHeadCell from '@/components/ui/Table/TableHeadCell';
import { useTransactions } from '@/hooks/useTransactions';
import { ROUTE_PATHS } from '@/routes/paths';
import { selectCurrentSpace } from '@/store/slices/spaces/spaceSelectors';

const TransactionTable = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const currentSpace = useSelector(selectCurrentSpace);
  const spaceId = currentSpace?.id;
  const { data, isLoading, isError, refetch } = useTransactions(spaceId || '');
  const navigate = useNavigate();

  const handleRefresh: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(ROUTE_PATHS.SPACE_PAGE);
  };

  const handleRefetch: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    refetch();
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
        <Condition.If condition={!spaceId}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <Typography>
              <InfoIcon />
            </Typography>
            <Typography>No space selected.</Typography>
            <Button
              color="primary"
              endIcon={<RefreshCcwIcon size={18} />}
              variant="contained"
              onClick={handleRefresh}
            >
              Try Again
            </Button>
          </Stack>
        </Condition.If>
        <Condition.ElseIf condition={isLoading}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <CircularProgress />
            <Typography>Loading transactions...</Typography>
          </Stack>
        </Condition.ElseIf>
        <Condition.ElseIf condition={isError}>
          <Stack alignItems="center" justifyContent="center" minHeight={300}>
            <Typography color="error">Failed to load transactions.</Typography>
            <Button
              color="primary"
              endIcon={<RefreshCcwIcon size={18} />}
              variant="contained"
              onClick={handleRefetch}
            >
              Try Again
            </Button>
          </Stack>
        </Condition.ElseIf>
        <Condition.ElseIf condition={Number(data?.data.length) <= 0}>
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
          <TableContainer
            sx={{
              bgcolor: 'background.paper',
              border: 1,
              borderColor: 'grey.200',
              borderRadius: 1.5,
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Date</TableHeadCell>
                  <TableHeadCell>Description</TableHeadCell>
                  <TableHeadCell>Category</TableHeadCell>
                  <TableHeadCell>Amount</TableHeadCell>
                  <TableHeadCell>Action</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data.map((transaction: Transaction) => (
                  <TransactionTableRow
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Condition.Else>
      </Condition>
    </>
  );
};

export default TransactionTable;

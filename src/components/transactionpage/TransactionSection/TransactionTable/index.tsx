import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

import TransactionTableRow from './TransactionTableRow';

import type { Transaction } from '@/types';

import Condition from '@/components/ui/Condition';
import TableHeadCell from '@/components/ui/Table/TableHeadCell';
import { useTransactions } from '@/hooks/useTransactions';
import { selectCurrentSpace } from '@/store/slices/spaces/spaceSelectors';

const TransactionTable = () => {
  const currentSpace = useSelector(selectCurrentSpace);
  const spaceId = currentSpace?.id;
  const { data, isLoading, isError } = useTransactions(spaceId || '');

  return (
    <Condition>
      <Condition.If condition={!spaceId}>
        <Typography>No space selected.</Typography>
      </Condition.If>
      <Condition.ElseIf condition={isLoading}>
        <Typography>Loading transactions...</Typography>
      </Condition.ElseIf>
      <Condition.ElseIf condition={isError}>
        <Typography color="error">Failed to load transactions.</Typography>
      </Condition.ElseIf>
      <Condition.ElseIf
        condition={!data || !Array.isArray(data) || data.length === 0}
      >
        <Typography>No transactions found.</Typography>
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
  );
};

export default TransactionTable;

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import TransactionTableRow from './TransactionTableRow';

import type { Transaction } from '@/types';

import TableHeadCell from '@/components/ui/Table/TableHeadCell';

type TransactionTablePropsType = {
  transactions: Transaction[];
};

const TransactionTable = ({ transactions }: TransactionTablePropsType) => {
  return (
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
          {transactions.map((transaction) => (
            <TransactionTableRow
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;

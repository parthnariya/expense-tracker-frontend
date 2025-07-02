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
  onDeleteRequest?: (transactionId: string) => void;
};

const TransactionTable = ({
  transactions,
  onDeleteRequest,
}: TransactionTablePropsType) => {
  const handleTableBodyClick = (
    event: React.MouseEvent<HTMLTableSectionElement>,
  ) => {
    const target = event.target as HTMLElement;
    const button = target.closest(
      'button[data-action="delete"]',
    ) as HTMLButtonElement | null;
    if (button && button.dataset.transactionId && onDeleteRequest) {
      onDeleteRequest(button.dataset.transactionId);
    }
  };

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
        <TableBody onClick={handleTableBodyClick}>
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

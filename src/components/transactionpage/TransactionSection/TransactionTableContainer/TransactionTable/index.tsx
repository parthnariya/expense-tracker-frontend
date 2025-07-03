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
  onEditRequest?: (transactionId: string) => void;
};

const TransactionTable = ({
  transactions,
  onDeleteRequest,
  onEditRequest,
}: TransactionTablePropsType) => {
  const handleTableBodyClick = (
    event: React.MouseEvent<HTMLTableSectionElement>,
  ) => {
    const target = event.target as HTMLElement;
    const editButton = target.closest(
      'button[data-action="edit"]',
    ) as HTMLButtonElement | null;
    if (editButton && editButton.dataset.transactionId && onEditRequest) {
      onEditRequest(editButton.dataset.transactionId);
      return;
    }
    const deleteButton = target.closest(
      'button[data-action="delete"]',
    ) as HTMLButtonElement | null;
    if (deleteButton && deleteButton.dataset.transactionId && onDeleteRequest) {
      onDeleteRequest(deleteButton.dataset.transactionId);
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
            <TableHeadCell>Title</TableHeadCell>
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

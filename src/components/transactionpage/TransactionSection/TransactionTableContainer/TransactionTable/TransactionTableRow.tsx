import { Chip, IconButton, Stack, Typography } from '@mui/material';
import { Edit2, Trash2 } from 'lucide-react';

import { getChipColor } from '../../../utils';

import type { Transaction, TransactionCategoryType } from '@/types';

import TableBodyCell from '@/components/ui/Table/TableBodyCell';
import TableBodyRow from '@/components/ui/Table/TableBodyRow';
import { formatDate } from '@/utils/date';

interface TransactionTableRowProps {
  transaction: Transaction;
}

const TransactionTableRow = ({ transaction }: TransactionTableRowProps) => (
  <TableBodyRow key={transaction.id}>
    <TableBodyCell>{formatDate(transaction.date)}</TableBodyCell>
    <TableBodyCell>{transaction.description}</TableBodyCell>
    <TableBodyCell>
      <Chip
        label={transaction.category}
        sx={{
          backgroundColor: getChipColor(
            transaction.category as TransactionCategoryType,
          ),
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      />
    </TableBodyCell>
    <TableBodyCell>
      <Typography
        color={transaction.type === 'expense' ? 'error' : 'success'}
        component="span"
      >
        {transaction.type === 'expense' ? '-' : '+'}
        {transaction.amount}
      </Typography>
    </TableBodyCell>
    <TableBodyCell>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="flex-start"
        spacing={1}
      >
        <IconButton color="warning">
          <Edit2 size={16} />
        </IconButton>
        <IconButton color="error">
          <Trash2 size={16} />
        </IconButton>
      </Stack>
    </TableBodyCell>
  </TableBodyRow>
);

export default TransactionTableRow;

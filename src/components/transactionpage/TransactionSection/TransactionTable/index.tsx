import {
  Chip,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Edit2, Trash2 } from 'lucide-react';

import { getChipColor } from '../../utils';

import type { TransactionCategoryType } from '@/types';

import TableBodyCell from '@/components/ui/Table/TableBodyCell';
import TableBodyRow from '@/components/ui/Table/TableBodyRow';
import TableHeadCell from '@/components/ui/Table/TableHeadCell';
import { formatDate } from '@/utils/date';

const mockTransactions = [
  {
    id: 1,
    amount: 3500.0,
    category: 'salary',
    type: 'income',
    date: '2024-01-15',
    description: 'Monthly Salary - January',
  },
  {
    id: 2,
    amount: 85.5,
    category: 'food',
    type: 'expense',
    date: '2024-01-14',
    description: 'Grocery Shopping',
  },
  {
    id: 3,
    amount: 45.0,
    category: 'transport',
    type: 'expense',
    date: '2024-01-13',
    description: 'Gas Station Fill-up',
  },
  {
    id: 4,
    amount: 120.0,
    category: 'utilities',
    type: 'expense',
    date: '2024-01-12',
    description: 'Electricity Bill',
  },
  {
    id: 5,
    amount: 500.0,
    category: 'freelance',
    type: 'income',
    date: '2024-01-11',
    description: 'Web Development Project',
  },
  {
    id: 6,
    amount: 75.0,
    category: 'entertainment',
    type: 'expense',
    date: '2024-01-10',
    description: 'Movie Night Out',
  },
  {
    id: 7,
    amount: 200.0,
    category: 'shopping',
    type: 'expense',
    date: '2024-01-09',
    description: 'Clothing Purchase',
  },
  {
    id: 8,
    amount: 150.0,
    category: 'healthcare',
    type: 'expense',
    date: '2024-01-08',
    description: 'Doctor Visit',
  },
  {
    id: 9,
    amount: 2800.0,
    category: 'salary',
    type: 'income',
    date: '2023-12-15',
    description: 'Monthly Salary - December',
  },
  {
    id: 10,
    amount: 95.25,
    category: 'food',
    type: 'expense',
    date: '2023-12-14',
    description: 'Restaurant Dinner',
  },
  {
    id: 11,
    amount: 300.0,
    category: 'investment',
    type: 'income',
    date: '2023-12-13',
    description: 'Stock Dividend',
  },
  {
    id: 12,
    amount: 60.0,
    category: 'transport',
    type: 'expense',
    date: '2023-12-12',
    description: 'Public Transport Monthly Pass',
  },
];

const TransactionTable = () => {
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
          {mockTransactions.map((transaction) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;

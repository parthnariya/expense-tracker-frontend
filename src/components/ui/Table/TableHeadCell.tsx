import { styled, TableCell } from '@mui/material';

const TableHeadCell = styled(TableCell)(({ theme }) => ({
  textAlign: 'left',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.05rem',
  padding: '1rem 1.5rem',
  color: theme.palette.text.secondary,
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
}));

export default TableHeadCell;

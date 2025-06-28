import { styled, TableCell } from '@mui/material';

const TableBodyCell = styled(TableCell)(({ theme }) => ({
  textAlign: 'left',
  padding: '1rem 1.5rem',
  whiteSpace: 'nowrap',
  color: theme.palette.text.primary,
  fontSize: '14px',
  lineHeight: 1.5,
  borderColor: theme.palette.divider,
  backgroundColor: 'transparent',
}));

export default TableBodyCell;

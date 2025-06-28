import { styled, TableRow } from '@mui/material';

const TableBodyRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
}));

export default TableBodyRow;

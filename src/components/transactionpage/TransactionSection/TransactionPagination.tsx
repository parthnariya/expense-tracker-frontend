import { Pagination, Stack } from '@mui/material';

interface TransactionPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
  isError: boolean;
}

const TransactionPagination = ({
  page,
  totalPages,
  onPageChange,
  isLoading,
  isError,
}: TransactionPaginationProps) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="center"
      mt={1}
      p={2}
    >
      <Pagination
        color="primary"
        count={totalPages}
        disabled={isLoading || isError}
        page={page}
        shape="rounded"
        size="medium"
        onChange={(_, p) => onPageChange(p)}
      />
    </Stack>
  );
};

export default TransactionPagination;

import { Box, Container, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import TransactionFilters from './TransactionFilters';
import TransactionPagination from './TransactionPagination';
import TransactionTable from './TransactionTableContainer';

import type { TransactionFilters as FiltersType } from '@/services/apiService/transactionsApi';

import { useTransactions } from '@/hooks/useTransactions';
import { selectCurrentSpace } from '@/store/slices/spaces/spaceSelectors';

const DEFAULT_FILTERS: FiltersType = {
  page: 1,
  type: undefined,
  category: undefined,
  startDate: undefined,
  endDate: undefined,
};

const TransactionSection = () => {
  const [filters, setFilters] = useState<FiltersType>(DEFAULT_FILTERS);
  const currentSpace = useSelector(selectCurrentSpace);
  const spaceId = currentSpace?.id;

  const { data, isLoading, isError, refetch } = useTransactions(
    spaceId || '',
    filters,
  );

  const handleFilterChange = (changed: Partial<FiltersType>) => {
    setFilters((prev) => ({ ...prev, ...changed, page: 1 }));
  };
  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  const totalPages = Number(data?.meta?.pagination?.totalPages) || 1;
  const totalCount = Number(data?.meta?.pagination?.total) || 0;

  const handleRefetch = () => {
    refetch();
  };

  return (
    <Container
      component="section"
      maxWidth={false}
      sx={{
        py: {
          xs: 1,
          lg: 2,
        },
        px: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }}>
        <Box boxShadow={1}>
          <Stack
            alignItems={{ xs: 'flex-start', lg: 'center' }}
            bgcolor="background.paper"
            border={1}
            borderBottom={0}
            borderColor="grey.200"
            direction={{ xs: 'column', lg: 'row' }}
            justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
            p={2}
            spacing={2}
          >
            <Box>
              <Typography
                color="textPrimary"
                component="h2"
                fontWeight={600}
                variant="h6"
              >
                Transactions
              </Typography>

              <Typography
                color="textSecondary"
                component="p"
                variant="subtitle2"
              >
                {totalCount} transactions found
              </Typography>
            </Box>

            <TransactionFilters
              filters={filters}
              onChange={handleFilterChange}
            />
          </Stack>

          <TransactionTable
            isError={isError}
            isLoading={isLoading}
            refetch={handleRefetch}
            transactions={data?.data || []}
          />
          <TransactionPagination
            isError={isError}
            isLoading={isLoading}
            page={filters.page || 1}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Box>
      </Container>
    </Container>
  );
};

export default TransactionSection;

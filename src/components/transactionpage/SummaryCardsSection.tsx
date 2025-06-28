import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { AlertTriangle, TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { useMemo } from 'react';

import type { SummaryDataType } from '@/types';

import { formatCurrency } from '@/utils/currency';

const SummaryCardsSection = () => {
  const { totalExpense, totalIncome }: SummaryDataType = {
    totalExpense: 1000,
    totalIncome: 1200,
  };

  const summaryCards = useMemo(() => {
    const netBalance = totalIncome - totalExpense;

    const cards = [
      {
        title: 'Total Income',
        amount: totalIncome,
        Icon: TrendingUp,
        color: '#66BB6A',
        bgColor: '#66bb6a90',
      },
      {
        title: 'Total Expense',
        amount: totalExpense,
        Icon: TrendingDown,
        color: '#EF5350',
        bgColor: '#EF535090',
      },
      {
        title: 'Net Balance',
        amount: netBalance,
        Icon: netBalance >= 0 ? Wallet : AlertTriangle,
        color: netBalance >= 0 ? 'secondary' : 'error',
        bgColor: netBalance >= 0 ? '#66bb6a90' : '#EF535090',
      },
    ];
    return cards;
  }, [totalExpense, totalIncome]);

  return (
    <Container
      sx={{
        py: {
          xs: 1,
          lg: 2,
        },
        px: 0,
        width: '100%',
      }}
      component="section"
      maxWidth={false}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }} maxWidth="lg">
        <Box flexGrow={1}>
          <Grid container p={2} spacing={2}>
            {summaryCards.map(({ Icon, amount, color, title, bgColor }) => (
              <Grid
                border={1}
                borderRadius={1.5}
                borderColor="grey.200"
                bgcolor={'background.paper'}
                size={{
                  xs: 12,
                  md: 4,
                }}
                boxShadow={1}
                p={3}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box flex={1}>
                    <Typography
                      component="p"
                      variant="subtitle2"
                      fontWeight={500}
                      color="text.secondary"
                    >
                      {title}
                    </Typography>

                    <Typography
                      component="p"
                      variant="h5"
                      color={color}
                      fontWeight={600}
                    >
                      {formatCurrency(amount)}
                    </Typography>
                  </Box>
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={48}
                    color={color}
                    height={48}
                    position="relative"
                    bgcolor={bgColor}
                  >
                    <Icon size={24} />
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default SummaryCardsSection;

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
        <Box flexGrow={1}>
          <Grid container p={2} spacing={2}>
            {summaryCards.map(({ Icon, amount, color, title, bgColor }) => (
              <Grid
                bgcolor="background.paper"
                border={1}
                borderColor="grey.200"
                borderRadius={1.5}
                boxShadow={1}
                p={3}
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Box flex={1}>
                    <Typography
                      color="text.secondary"
                      component="p"
                      fontWeight={500}
                      variant="subtitle2"
                    >
                      {title}
                    </Typography>

                    <Typography
                      color={color}
                      component="p"
                      fontWeight={600}
                      variant="h5"
                    >
                      {formatCurrency(amount)}
                    </Typography>
                  </Box>
                  <Typography
                    alignItems="center"
                    bgcolor={bgColor}
                    color={color}
                    display="flex"
                    height={48}
                    justifyContent="center"
                    position="relative"
                    width={48}
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

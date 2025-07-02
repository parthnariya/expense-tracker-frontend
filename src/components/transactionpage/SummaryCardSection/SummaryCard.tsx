import { Box, Grid, Stack, Typography } from '@mui/material';

import { getSummaryCardProps } from '../utils';

import type { TransactionType } from '@/types';

import { formatCurrency } from '@/utils/currency';

type SummaryCardProps = {
  type: TransactionType | 'balance';
  amount: number;
};
const SummaryCard = ({ type, amount }: SummaryCardProps) => {
  const { title, color, bgColor, Icon } = getSummaryCardProps(type, amount);
  return (
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
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Box flex={1}>
          <Typography
            color="text.secondary"
            component="p"
            fontWeight={500}
            variant="subtitle2"
          >
            {title}
          </Typography>

          <Typography color={color} component="p" fontWeight={600} variant="h5">
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
  );
};

export default SummaryCard;

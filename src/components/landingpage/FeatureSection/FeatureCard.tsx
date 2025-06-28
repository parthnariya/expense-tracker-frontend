import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';

import type { LucideIcon } from 'lucide-react';

type StateCardPropType = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const FeatureCard = ({ Icon, description, title }: StateCardPropType) => {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Card
        sx={{
          backgroundColor: (theme) => theme.palette.grey[50],
          border: 2,
          borderRadius: 2,
          borderColor: (theme) => theme.palette.grey[50],
          transition: `all 300ms ease`,
          ':hover': {
            backgroundColor: (theme) => theme.palette.grey[100],
            boxShadow: 2,
            borderColor: (theme) => theme.palette.blue[200],
          },
          p: 2,
          boxShadow: 'none',
          height: '100%',
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Stack
            width={'4rem'}
            height={'4rem'}
            bgcolor={`blue.100`}
            borderRadius={4}
            mb={3}
            justifyContent="center"
            alignItems="center"
          >
            <Icon strokeWidth={2} size={24} color="#2563eb" />
          </Stack>

          <Typography fontWeight={'600'} variant="h6" color="grey.900" mb={2}>
            {title}
          </Typography>

          <Typography lineHeight={1.625} color="grey.600">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FeatureCard;

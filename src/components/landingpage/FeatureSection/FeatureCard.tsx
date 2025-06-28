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
            alignItems="center"
            bgcolor="blue.100"
            borderRadius={4}
            height="4rem"
            justifyContent="center"
            mb={3}
            width="4rem"
          >
            <Icon color="#2563eb" size={24} strokeWidth={2} />
          </Stack>

          <Typography color="grey.900" fontWeight="600" mb={2} variant="h6">
            {title}
          </Typography>

          <Typography color="grey.600" lineHeight={1.625}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FeatureCard;

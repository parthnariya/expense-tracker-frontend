import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { type LucideIcon } from 'lucide-react';

type StateCardPropType = {
  Icon: LucideIcon;
  value: string;
  label: string;
  description: string;
};

const StateCard = ({ description, Icon, label, value }: StateCardPropType) => {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
      <Card
        sx={{
          p: 2,
          boxShadow: 'none',
          height: '100%',
          backgroundColor: (theme) => theme.palette.blue[600],
          backgroundImage: 'none',
        }}
      >
        <CardContent
          sx={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Stack
            width={'4rem'}
            height={'4rem'}
            bgcolor={`blue.500`}
            borderRadius={4}
            mb={2}
            justifyContent="center"
            alignItems="center"
          >
            <Icon strokeWidth={2} size={24} color="white" />
          </Stack>

          <Typography
            component="div"
            fontWeight="700"
            color="white"
            variant="h4"
          >
            {value}
          </Typography>

          <Typography
            component="div"
            fontWeight="600"
            color="white"
            variant="h6"
          >
            {label}
          </Typography>

          <Typography
            component="p"
            color="white"
            variant="subtitle2"
            textAlign="center"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default StateCard;

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
            alignItems="center"
            bgcolor="blue.500"
            borderRadius={4}
            height="4rem"
            justifyContent="center"
            mb={2}
            width="4rem"
          >
            <Icon color="white" size={24} strokeWidth={2} />
          </Stack>

          <Typography
            color="white"
            component="div"
            fontWeight="700"
            variant="h4"
          >
            {value}
          </Typography>

          <Typography
            color="white"
            component="div"
            fontWeight="600"
            variant="h6"
          >
            {label}
          </Typography>

          <Typography
            color="white"
            component="p"
            textAlign="center"
            variant="subtitle2"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default StateCard;

import { Box, Grid, Stack, Typography } from '@mui/material';
import { Check } from 'lucide-react';

import { BENEFITS } from '@/constants/messages';

const BenefitList = () => {
  return (
    <Box flexGrow={1}>
      <Grid container maxWidth="md" spacing={2} mx="auto" mb={6}>
        {BENEFITS.map((benefit, index) => (
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              spacing={1.5}
              bgcolor="background.paper"
              border={1}
              borderColor={'grey.200'}
              borderRadius={1.5}
              p={2}
              key={index}
            >
              <Box flexShrink={0} color={'secondary'}>
                <Check color="#66BB6A" size={20} strokeWidth={3} />
              </Box>
              <Typography component="span" color="grey.800">
                {benefit}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BenefitList;

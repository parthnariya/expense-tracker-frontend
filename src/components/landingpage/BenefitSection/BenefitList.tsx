import { Box, Grid, Stack, Typography } from '@mui/material';
import { Check } from 'lucide-react';

import { BENEFITS } from '@/constants/messages';

const BenefitList = () => {
  return (
    <Box flexGrow={1}>
      <Grid container maxWidth="md" mb={6} mx="auto" spacing={2}>
        {BENEFITS.map((benefit, index) => (
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack
              key={index}
              alignItems="center"
              bgcolor="background.paper"
              border={1}
              borderColor="grey.200"
              borderRadius={1.5}
              direction="row"
              justifyContent="flex-start"
              p={2}
              spacing={1.5}
            >
              <Box color="secondary" flexShrink={0}>
                <Check color="#66BB6A" size={20} strokeWidth={3} />
              </Box>
              <Typography color="grey.800" component="span">
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

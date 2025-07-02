import { Grid, Skeleton } from '@mui/material';

const LoadingSummaryCard = () => {
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
      <Skeleton variant="rectangular" width="100%" />
    </Grid>
  );
};

export default LoadingSummaryCard;

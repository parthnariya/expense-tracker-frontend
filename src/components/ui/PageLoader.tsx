import { CircularProgress, Stack } from '@mui/material';

const PageLoader = () => (
  <Stack alignItems="center" height="100%" justifyContent="center" width="100%">
    <CircularProgress size={40} />
  </Stack>
);

export default PageLoader;

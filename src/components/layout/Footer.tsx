import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" borderTop={1} borderColor="grey.800" py={3}>
      <Typography variant="body2" color="grey.500" textAlign={'center'}>
        © {new Date().getFullYear()} FinanceTracker. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

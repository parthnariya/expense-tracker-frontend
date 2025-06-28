import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box borderColor="grey.800" borderTop={1} component="footer" py={3}>
      <Typography color="grey.500" textAlign="center" variant="body2">
        © {new Date().getFullYear()} FinanceTracker. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

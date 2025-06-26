import { Box, Button } from '@mui/material';

import { useTheme } from '@/theme/ThemeProvider';

const LandingPage = () => {
  const { toggleTheme } = useTheme();

  return (
    <Box>
      <Button
        variant="text"
        onClick={(e) => {
          e.preventDefault();
          toggleTheme();
        }}
        sx={{ color: (theme) => theme.palette.primary.main }}
      >
        Hello
      </Button>
    </Box>
  );
};

export default LandingPage;

import { AppBar, Toolbar } from '@mui/material';

import AppLogo from '@/components/ui/AppLogo';
import ThemeSwitch from '@/components/ui/ThemeSwitch';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: 'none',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: 4, sm: 6, lg: 8 },
          maxWidth: '80rem',
          mx: 'auto',
          width: '100%',
        }}
      >
        <AppLogo />
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

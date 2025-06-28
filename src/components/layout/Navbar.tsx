import { AppBar, Toolbar } from '@mui/material';

import AppLogo from '@/components/ui/AppLogo';
import ThemeSwitch from '@/components/ui/ThemeSwitch';

const Navbar = () => {
  return (
    <AppBar
      component="nav"
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
          px: { xs: 2, sm: 3, lg: 4 },
          maxWidth: '1200px',
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

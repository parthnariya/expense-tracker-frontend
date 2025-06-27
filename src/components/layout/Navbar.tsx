import { AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}
      ></Toolbar>
    </AppBar>
  );
};

export default Navbar;

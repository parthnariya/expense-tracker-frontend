import { Container, CssBaseline, Stack } from '@mui/material';
import { Outlet } from 'react-router';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const RootLayout = () => {
  return (
    <Stack bgcolor="red" height="100vh" width="100vw">
      <CssBaseline />
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container
        component="main"
        maxWidth={false}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          width: '100vw',
          padding: 0,
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  );
};

export default RootLayout;

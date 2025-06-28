import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const RootLayout = () => {
  return (
    <>
      <CssBaseline />
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          width: '100vw',
          padding: 0,
        }}
        maxWidth={false}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default RootLayout;

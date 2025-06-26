import { RouterProvider } from 'react-router';

import { router } from '@/routes';
import ThemeProvider from '@/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

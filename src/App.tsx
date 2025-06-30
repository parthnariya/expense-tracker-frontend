import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { router } from '@/routes';
import { queryClient } from '@/services/apiService/api';
import { store } from '@/store';
import ThemeProvider from '@/theme/ThemeProvider';

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

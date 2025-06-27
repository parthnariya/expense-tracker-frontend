import { createBrowserRouter, type RouteObject } from 'react-router';

import { ROUTE_PATHS } from './paths';

import RootLayout from '@/layouts/RootLayout';
import LandingPage from '@/pages/LandingPage';
import TransactionPage from '@/pages/TransactionPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: ROUTE_PATHS.LANDING_PAGE,
        element: <LandingPage />,
        index: true,
      },
      {
        path: ROUTE_PATHS.TRANSACTION_PAGE,
        element: <TransactionPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

import { Suspense, lazy } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router';

import { ROUTE_PATHS } from './paths';

import Loader from '@/components/ui/PageLoader';
import RootLayout from '@/layouts/RootLayout';

const LandingPage = lazy(() => import('@/pages/LandingPage'));
const SpacePage = lazy(() => import('@/pages/SpacePage'));
const TransactionPage = lazy(() => import('@/pages/TransactionPage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: ROUTE_PATHS.LANDING_PAGE,
        element: (
          <Suspense fallback={<Loader />}>
            <LandingPage />
          </Suspense>
        ),
        index: true,
      },
      {
        path: ROUTE_PATHS.SPACE_PAGE,
        element: (
          <Suspense fallback={<Loader />}>
            <SpacePage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATHS.TRANSACTION_PAGE,
        element: (
          <Suspense fallback={<Loader />}>
            <TransactionPage />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

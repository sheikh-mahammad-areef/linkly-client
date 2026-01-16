// -------------------------------------
// File: src/routes/index.tsx
// -------------------------------------

import { AppLayout } from '@/layouts/AppLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { LandingLayout } from '@/layouts/LandingLayout'
import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { LandingPage } from '@/pages/LandingPage'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    element: <LandingLayout />,
    children: [{ path: '/', element: <LandingPage /> }],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  {
    path: 'app',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      // later: { path: 'bookmarks', element: <BookmarksPage /> },
    ],
  },
]

export function AppRoutes() {
  return useRoutes(routes)
}

import { EmptyLayout, MainLayout } from '@/common/layouts';
import DashBoard from '@/pages/dashboard';
import Hide from '@/pages/hideparent';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      { element: <DashBoard />, index: true },
      { path: 'hide', element: <Hide /> },
    ],
  },
  {
    path: 'about',
    element: <EmptyLayout />,
    children: [{ path: 'hide', element: <Hide /> }],
  },
]);

export { router };

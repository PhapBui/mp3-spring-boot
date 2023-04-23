import { MainLayout } from '@/common/layouts';
import { HomePage } from '@/pages';
import Hide from '@/pages/hideparent';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />, //layout
    children: [
      { element: <HomePage />, index: true }, //page render khi vao path cua parent
      { path: 'hide', element: <Hide /> }, //xai cung layout :))
    ],
  },
  {
    path: 'kham-pha',
    element: <MainLayout />,
    children: [{ path: 'hide', element: <Hide /> }],
  },
]);

export { router };

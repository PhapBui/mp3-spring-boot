import { MainLayout } from '@/layouts';
import { HomePage, LibraryPage } from '@/pages';
import Hide from '@/pages/hideparent';
import NotFound from '@/pages/notfound';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />, //layout
    errorElement: <NotFound />,
    children: [
      { element: <HomePage />, index: true }, //page render khi vao path cua parent
      { path: 'hide', element: <Hide /> }, //xai cung layout :))
      {
        path: 'mymusic',
        element: <LibraryPage />,
        children: [{ path: 'songs' }, { path: 'albums' }],
      },
    ],
  },
  {
    path: 'kham-pha',
    element: <MainLayout />,
    children: [{ path: 'hide', element: <Hide /> }],
  },
]);

export { router };

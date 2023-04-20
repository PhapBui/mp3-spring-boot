import { Header } from '@/common/components/header';
import { Main } from '@/common/components/main';
import { Sidebar } from '@/common/components/sidebar';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {}

export const MainLayout: React.FunctionComponent<MainLayoutProps> = () => {
  return (
    <>
      <div>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Sidebar />
      </div>
    </>
  );
};

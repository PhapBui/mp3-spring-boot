import { Header } from '@/common/components/header';
import { Main } from '@/common/components/main';
import { PlayerBar } from '@/common/components/player-bar';
import { Sidebar } from '@/common/components/sidebar';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayoutWrapper } from './MainLayoutStyled';

interface MainLayoutProps {}

export const MainLayout: React.FunctionComponent<MainLayoutProps> = () => {
  return (
    <MainLayoutWrapper>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <PlayerBar />
    </MainLayoutWrapper>
  );
};

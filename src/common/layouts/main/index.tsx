import { Header } from '@/common/components/header';
import { Main } from '@/common/components/main';
import { PlayerBar } from '@/common/components/player-bar';
import { Sidebar } from '@/common/components/sidebar';
import React, { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayoutWrapper } from './MainLayoutStyled';
import { log } from 'console';

interface MainLayoutProps {}

export const MainLayout: React.FunctionComponent<MainLayoutProps> = () => {
  const [isSticky, setIsStikcy] = useState<Boolean>(false);

  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    setIsStikcy(e.currentTarget.scrollTop > 0);
  };

  return (
    <MainLayoutWrapper>
      <Header isSticky={isSticky} />
      <Sidebar />
      <Main onScoll={handleScroll}>
        <Outlet />
      </Main>
      <PlayerBar />
    </MainLayoutWrapper>
  );
};

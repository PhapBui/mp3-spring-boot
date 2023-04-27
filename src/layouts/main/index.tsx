import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { PlayerBar } from '@/components/player-bar';
import { Sidebar } from '@/components/sidebar';
import { CreeateScrollProperties } from '@/utilities/scrollbar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayoutWrapper } from './MainLayoutStyled';

interface MainLayoutProps {}

export const MainLayout: React.FunctionComponent<MainLayoutProps> = () => {
  const [isSticky, setIsStikcy] = useState<Boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    const [height, transy] = CreeateScrollProperties(e);
    setHeight(height);
    setTranslateY(transy <= 0 ? 0 : transy);
    setIsStikcy(e.currentTarget.scrollTop > 0);
  };

  return (
    <MainLayoutWrapper>
      <Header isSticky={isSticky} />
      <Sidebar />
      <Main onScoll={handleScroll} height={height} translateY={translateY}>
        <Outlet />
      </Main>
      <PlayerBar />
    </MainLayoutWrapper>
  );
};

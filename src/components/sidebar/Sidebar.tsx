import { cssVariables } from '@/utilities/theme';
import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { Content, PersonasSidebar, SidebarInner, SidebarWrapper } from './SidebarStyled';
import AddToPlaylist from './components/add-to-playlist/AddToPlaylist';
import BrandLogo from './components/brand/BrandLogo';
import CTA from './components/cta/CTA';
import Menu from './components/menu-list/Menu';

import ScollBar from '@/components/scroll-bar';
import { mainMenuData, personasMenuData, subMenuData } from '@/config/MenuSideBar';
import { CreeateScrollProperties } from '@/utilities/scrollbar';
interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  const [height, setHeight] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    const [height, transy] = CreeateScrollProperties(e);
    setHeight(height);
    setTranslateY(transy <= 0 ? 0 : transy);

    if (e.currentTarget.scrollTop > 0) {
      e.currentTarget.classList.add('is-mark');
    } else {
      e.currentTarget.classList.remove('is-mark');
    }
  };
  return (
    <SidebarWrapper>
      <SidebarInner>
        <BrandLogo />
        <Menu data={mainMenuData} />

        <Divider sx={{ mx: 3, my: 1, borderColor: cssVariables.border.color.primary }} />
        <PersonasSidebar>
          <Content onScroll={handleScroll}>
            <Menu data={subMenuData} />
            <CTA />
            <Menu data={personasMenuData} title={'Thư Viện'} />
          </Content>
          <ScollBar height={height} translateY={translateY} />
        </PersonasSidebar>
        <AddToPlaylist />
      </SidebarInner>
    </SidebarWrapper>
  );
};

export default React.memo(Sidebar);
//scroll top =114
//clientHeight =334
//

import { cssVariables } from '@/utilities/theme';
import { Divider } from '@mui/material';
import React from 'react';
import { Content, PersonasSidebar, SidebarInner, SidebarWrapper } from './SidebarStyled';
import AddToPlaylist from './components/add-to-playlist/AddToPlaylist';
import BrandLogo from './components/brand/BrandLogo';
import CTA from './components/cta/CTA';
import Menu from './components/menu-list/Menu';

import { BsPlayCircle } from 'react-icons/bs';
import { GiMusicSpell } from 'react-icons/gi';
import { MdLibraryMusic } from 'react-icons/md';
import { TbChartDots3 } from 'react-icons/tb';
import { VscNotebook, VscTarget } from 'react-icons/vsc';
interface SidebarProps {}

const mainMenuData = [
  {
    id: 1,
    name: 'Thư viện',
    path: 'mymusic',
    icon: <MdLibraryMusic />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 2,
    name: 'Khám phá',
    path: '',
    icon: <VscTarget />,
  },
  {
    id: 3,
    name: '#zingchart',
    path: 'zing-chart',
    icon: <TbChartDots3 />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 4,
    name: 'Radio',
    path: 'radio',
    icon: <GiMusicSpell />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 5,
    name: 'Theo dõi',
    path: 'theo-doi',
    icon: <VscNotebook />,
    actionIcons: <BsPlayCircle />,
  },
];

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
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
            <Menu data={mainMenuData} />
            <CTA />
            <Menu data={mainMenuData} title={'Thư Viện'} />
          </Content>
        </PersonasSidebar>
        <AddToPlaylist />
      </SidebarInner>
    </SidebarWrapper>
  );
};

export default Sidebar;

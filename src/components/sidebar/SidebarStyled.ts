import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const SidebarWrapper = styled('aside')(({ theme }) => ({
  position: 'relative',
  zIndex: '100',
  width: cssVariables.width.sidebar,
  backgroundColor: cssVariables.color.sidebarBg,
  height: '100%',
  paddingTop: cssVariables.height.header,
  paddingBottom: cssVariables.height.addToPlaylist,
}));

export const SidebarInner = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const Content = styled('div')({
  position: 'absolute',
  inset: '0px',
  overflow: 'hidden scroll',
  marginRight: '0px',
  marginBottom: '0px',

  '&.is-mark': {
    WebkitMaskImage:
      'linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.8) 10%,#fff 25%,#fff)',
  },
});

export const PersonasSidebar = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
});

import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const SidebarWrapper = styled('aside')(({ theme }) => ({
  position: 'relative',
  zIndex: '100',
  width: cssVariables.width.sidebar,
  backgroundColor: 'hsla(0,0%,100%,0.05))',
  height: '100%',
  paddingTop: '70px',
  paddingBottom: '54px',
}));

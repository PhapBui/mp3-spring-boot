import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const MainContent = styled('div')({
  minHeight: `calc(100% - ${cssVariables.height.header} + ${cssVariables.height.player})`,
  margin: '0 auto',
  marginTop: cssVariables.height.header,
  position: 'relative',
  width: '100%',
});

export const MainOverlay = styled('div')({
  backgroundColor: cssVariables.color.layoutbg,
  bottom: cssVariables.height.player,
  position: 'fixed',
  left: cssVariables.width.sidebar,
  zIndex: '99',
  width: `calc(100% - ${cssVariables.width.sidebar} - ${cssVariables.width.playlist})`,
  marginTop: '30px !important',
});

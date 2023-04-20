import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const PlayerBarWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  maxHeight: cssVariables.height.player,
  zIndex: '100',
}));

export const HeaderInner = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

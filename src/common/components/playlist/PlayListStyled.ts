import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const PlayListWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  maxHeight: cssVariables.height.player,
  zIndex: '100',
}));

import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const PlayerQueueWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '0',
  right: '0',
  bottom: cssVariables.height.player,
  width: cssVariables.width.playlist,
  borderBottom: 'none',
  borderLeft: cssVariables.border.color.primary,
}));

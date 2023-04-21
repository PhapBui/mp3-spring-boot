import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const AddToPlaylistWrapper = styled('div')(({ theme }) => ({}));

export const AddToPlaylistButton = styled('button')(({ theme }) => ({
  position: 'fixed',
  width: cssVariables.width.sidebar,
  left: '0',
  height: cssVariables.height.addToPlaylist,
  borderTop: `1px solid ${cssVariables.border.color.primary}`,
  padding: '0 28px',
  borderRadius: '0',
  display: 'flex',
  alignItems: 'center',
  color: cssVariables.color.textPrimary,
  fontWeight: '700',
  bottom: cssVariables.height.player,
  fontSize: '14px',
  lineHeight: 'normal',
  textTransform: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  '&>svg': {
    fontSize: '18px',
    marginRight: '10px',
    color: cssVariables.color.textPrimary,
  },
}));

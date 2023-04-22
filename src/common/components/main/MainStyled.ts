import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const MainWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  position: 'relative',
  width: 'calc(100% - 570px)',
  minHeight: '100%',
  transition: 'margin-right .4s',
  marginTop: cssVariables.height.header,
  '&.collapsed': {
    marginRight: cssVariables.width.playlist,
  },
}));

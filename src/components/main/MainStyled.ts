import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const MainWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  position: 'relative',
  width: `calc(100% - ${cssVariables.width.sidebar} - ${cssVariables.width.playlist})`,
  minHeight: '100%',
  transition: 'margin-right .4s',

  '&.collapsed': {
    marginRight: cssVariables.width.playlist,
  },
}));

export const MainContext = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
});

export const MainInner = styled('main')(({ theme }) => ({
  padding: `0 ${cssVariables.padding.paddingSection}`,
  position: 'absolute',
  inset: '0px',
  overflow: 'hidden scroll',
  marginRight: '-6px',
  marginBottom: '0px',
}));

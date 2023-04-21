import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const HeaderWrapper = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  left: cssVariables.width.sidebar,
  top: '0',
  right: '0',
  height: cssVariables.height.header,
  padding: `0 ${cssVariables.padding.paddingSection}`,
  zIndex: '99',
  minWidth: '660px',
  transition: 'right .4s',
  '&.collapsed': {
    right: cssVariables.width.playlist,
  },
}));

export const HeaderInner = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

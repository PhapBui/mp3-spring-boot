import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const MainLayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  minWidth: '768px',
  backgroundColor: 'var(--layout-bg)',
  height: `calc(100vh - ${cssVariables.height.player})`,
}));

export const HeaderInner = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

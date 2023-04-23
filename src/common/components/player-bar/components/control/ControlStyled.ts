import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const ControlWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  position: 'fixed',
  zIndex: '2',
  width: '100%',
  bottom: '0',
  userSelect: 'none',
  backgroundColor: 'var(--layout-bg)',
}));

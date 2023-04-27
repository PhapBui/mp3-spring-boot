import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const MainContent = styled('div')({
  minHeight: `calc(100% - ${cssVariables.height.header} + ${cssVariables.height.player})`,
  margin: '0 auto 30px',
  marginTop: cssVariables.height.header,
  position: 'relative',
  width: '100%',
});

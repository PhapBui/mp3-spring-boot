import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';

export const ScrollBarWrapper = styled('div')({
  position: 'absolute',
  width: '4px',
  transition: 'opacity 200ms ease 0s',
  opacity: '1',
  right: '2px',
  top: '2px',
  bottom: '2px',
  zIndex: '100',
});

export const ScrollBarVertical = styled('div')({
  position: 'absolute',
  display: 'block',
  width: '100%',

  backgroundColor: cssVariables.color.scrollThumbBg,
  borderRadius: '2px',
});

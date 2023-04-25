import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';

export const CardWrapper = styled('figure')({
  backgroundColor: cssVariables.color.loadingBg,
  '& img': {
    transition: 'transform 0.7s',
  },
  '&.is-45': {
    width: 45,
    height: 45,
  },
});

import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';

export const SongRowWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  '&:hover>.item': {
    backgroundColor: cssVariables.color.alphaBg,
    opacity: 1,
  },
  '&>.item.active': {
    backgroundColor: cssVariables.color.selectBg,
    opacity: 1,
    '&>.item .overlay': {
      visibility: 'visible',
      opacity: 1,
    },
  },
  '&:hover>.item .overlay': {
    visibility: 'visible',
    opacity: 1,
  },
  '&:hover': {
    '&>.checkbox-wrapper': {
      visibility: 'visible',
      opacity: 1,
    },
    '& .prefix': {
      visibility: 'hidden',
    },
  },
  '&.selected': {
    '&>.checkbox-wrapper': {
      visibility: 'visible',
      opacity: 1,
    },
    '& .prefix': {
      visibility: 'hidden',
    },
  },
}));
//prefix

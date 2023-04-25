import { cssVariables } from '@/utilities/theme';
import { Stack, styled } from '@mui/material';

export const ListItemWrapper = styled('div')({});

export const ListItemInner = styled('div')({
  borderRadius: 4,
  color: cssVariables.color.textPrimary,
});
export const ListItemContent = styled(Stack)({
  flexDirection: 'row',
  padding: 8,
  alignItems: 'center',
  display: 'flex',
  textAlign: 'left',
  borderRadius: '5px',
  userSelect: 'none',
  opacity: 0.5,

  '&:hover': {
    backgroundColor: cssVariables.color.alphaBg,
    opacity: 1,
  },
  '&.active': {
    backgroundColor: cssVariables.color.purplePrimary,
    opacity: 1,
    '& .overlay': {
      visibility: 'visible',
      opacity: 1,
    },
  },
  '&:hover .overlay': {
    visibility: 'visible',
    opacity: 1,
  },
});
export const ListItemLeft = styled(Stack)({
  columnGap: 8,
  flexDirection: 'row',
  width: '50%',
  marginRight: '10px',
  flexBasis: 'auto',
  flexGrow: '1',
  flexShrink: '1',
});

export const ListItemRight = styled(Stack)({
  flexDirection: 'row',
  marginLeft: '10px',
  flexBasis: 'auto',
  flexGrow: '0',
  flexShrink: '0',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: 8,
});

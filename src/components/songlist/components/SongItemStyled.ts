import { cssVariables } from '@/utilities/theme';
import { Stack, styled } from '@mui/material';

export const SongItemWrapper = styled('div')({
  width: '100%',
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

export const SongItemInner = styled('div')({
  borderRadius: 4,
});
export const SongItemContent = styled(Stack)({
  color: cssVariables.color.textPrimary,
  flexDirection: 'row',
  padding: 8,
  alignItems: 'center',
  display: 'flex',
  textAlign: 'left',
  borderRadius: '5px',
  userSelect: 'none',
});
export const SongItemLeft = styled(Stack)({
  columnGap: 8,
  flexDirection: 'row',
  width: '50%',
  marginRight: '10px',
  flexBasis: 'auto',
  flexGrow: '1',
  flexShrink: '1',
});
export const SongItemCenter = styled(Stack)({
  flexBasis: 'auto',
  flexGrow: '1',
  flexShrink: '1',
  textAlign: 'left',
  alignSelf: 'center',
  width: '0',
});
export const SongItemRight = styled(Stack)({
  flexDirection: 'row',
  marginLeft: '10px',
  flexBasis: 'auto',
  flexGrow: '0',
  flexShrink: '0',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: 8,
});

export const Prefix = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  marginRight: '10px',
  color: cssVariables.color.songItemAction,
  fontWeight: '700',
});

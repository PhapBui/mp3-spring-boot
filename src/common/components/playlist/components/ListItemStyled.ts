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
  flexDirection: 'row',
  width: '50%',
  marginRight: '10px',
  flexBasis: 'auto',
  flexGrow: '1',
  flexShrink: '1',
});

export const SongThumbnail = styled('div')({
  marginRight: '10px',
  flexShrink: '0',
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',
  cursor: 'pointer',

  '& svg, &i': {
    width: 40,
    height: 40,
  },
  '& img': {
    width: '100%',
    height: '100%',
  },
});
export const SongInfo = styled('div')({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});
export const SongTitle = styled('h3')({
  display: 'flex',
  alignItems: 'center',
  color: cssVariables.color.white,
  fontSize: 14,
});
export const Artist = styled('h3')({
  display: 'flex',
  alignItems: 'center',
  color: cssVariables.color.textSecondary,
  fontSize: 12,
});

export const TimeRelease = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: '400',
  color: cssVariables.color.textSecondary,
  marginTop: '3px',
  whiteSpace: 'nowrap',
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

import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const ItemWrapper = styled('div')({
  position: 'relative',
  paddingLeft: '14px',
  paddingRight: '14px',
  float: 'left',
  flexShrink: '0',
});
export const Thumbnail = styled('div')({
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',
  flexShrink: '0',
  cursor: 'pointer',
  '& figure': {
    lineHeight: '0',
    height: '0',
    paddingBottom: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: 'auto',
      transition: 'transform .7s',
    },
  },
  '&:hover img': {
    transform: 'scale(1.1) translateZ(0)',
  },
});
export const Content = styled('div')({
  marginTop: '12px',
  '& a': {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.36',
    color: cssVariables.color.textPrimary,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});
export const Authors = styled('div')({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1.33,
  color: cssVariables.color.textSecondary,
});

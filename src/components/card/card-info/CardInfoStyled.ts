import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';

export const CardInfoWrapper = styled('div')({});

export const CardName = styled('h3')({
  display: 'block',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '1.36',
  color: cssVariables.color.textPrimary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const Author = styled('h4')({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  whiteSpace: 'normal',
  marginTop: '3px',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '1.33',
  color: cssVariables.color.textSecondary,
});
export const Artist = styled('h4')({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  whiteSpace: 'normal',
  marginTop: '3px',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '1.33',
  color: cssVariables.color.textSecondary,
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

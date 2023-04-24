import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const SectionHeaderInner = styled('h3')({
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: cssVariables.color.textPrimary,
});

export const ContentLeft = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const ContentRight = styled('div')({
  fontSize: '12px',
  fontWeight: '500',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  color: cssVariables.color.textSecondary,
});

export const ReadmoreBtn = styled(Link)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '&>span': {
    marginRight: 4,
  },
});

import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const AccountWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  padding: theme.spacing(1.25, 3),
  backgroundColor: cssVariables.color.purplePrimary,
  borderRadius: theme.spacing(2.5),
  cursor: 'pointer',
}));

export const AccountInner = styled('button')(({ theme }) => ({
  fontSize: '14px',
  borderRadius: '999px',
  border: '0',
  display: 'inline-block',
  textTransform: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  position: 'relative',
  color: '#feffff',
  fontWeight: '600',
  lineHeight: theme.spacing(2.5),
}));

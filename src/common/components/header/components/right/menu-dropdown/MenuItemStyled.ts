import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';

export const MenuItemWrapper = styled('li')(({ theme }) => ({
  fontWeight: '700',
  color: cssVariables.color.textNavigation,
  borderLeft: '3px solid transparent',
  borderRadius: theme.spacing(0.5),
  cursor: 'pointer',
  '&:hover ': {
    backgroundColor: cssVariables.color.alphaBg,
    '& a': {
      color: cssVariables.color.textItemHover,
    },
  },
}));

export const Inner = styled('button')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  fontWeight: '400',
  padding: theme.spacing(1, 1.5),
}));

export const LinkNavigate = styled('a')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: cssVariables.color.textSecondary,
  fontSize: '14px',
  fontWeight: '400',
  padding: theme.spacing(1, 1.5),
}));

export const InnerText = styled('span')({
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
  fontSize: '14px',
  fontWeight: 400,
});

export const Icon = styled('span')({
  marginRight: '12px',
});
export const Action = styled('span')({
  marginLeft: 'auto',
});

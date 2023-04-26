import { cssVariables } from '@/utilities/theme';
import { Stack, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: theme.spacing(4),
  margin: theme.spacing(4, 0),
  borderBottom: `1px solid ${cssVariables.border.color.primary}`,
}));

export const Menu = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize: '14px',
  fontWeight: '500',
  columnGap: theme.spacing(5),
}));
export const MenuItem = styled('li')(({ theme }) => ({
  color: cssVariables.color.textItemHover,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
  position: 'relative',
  lineHeight: 'normal',
}));

export const MenuItemLink = styled(NavLink)(({ theme }) => ({
  padding: theme.spacing(2),
  '&.active:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '100%',
    top: '100%',
    left: 0,
    borderBottom: `2px solid ${cssVariables.color.purplePrimary}`,
  },
}));

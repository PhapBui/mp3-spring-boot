import { cssVariables } from '@/utilities/theme';
import { Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MenuItemWrapper = styled('li')(({ theme }) => ({
  fontWeight: '700',
  color: cssVariables.color.textNavigation,
  borderLeft: '3px solid transparent',
}));

export const Inner = styled(NavLink)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '13px',
  fontWeight: '700',
  padding: '8px 25px',

  '&.active': {
    backgroundColor: cssVariables.color.alphaBg,
    color: cssVariables.color.textItemHover,
    borderLeft: ` 3px solid ${cssVariables.color.purplePrimary}`,
  },

  '&>svg': {
    width: '20px',
    height: '20px',
    marginRight: '10px !important',
  },
  '&:hover button': {
    display: 'flex',
  },
});

export const InnerText = styled(Typography)({
  lineHeight: 'normal',
  fontSize: '14px',
  fontWeight: 600,
});

export const InnerAction = styled('button')({
  display: 'none',
  height: '20px',
  width: '20px',
  margin: '0',
  padding: '0!important',
  borderRadius: '999px',
  position: 'absolute',
  right: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  '&>svg': {
    width: '20px',
    height: '20px',
  },
});

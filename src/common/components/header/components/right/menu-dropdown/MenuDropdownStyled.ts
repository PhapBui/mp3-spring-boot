import { cssVariables } from '@/utilities/theme';
import { Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MenuDropDownWrapper = styled('div')(({ theme }) => ({
  backgroundColor: cssVariables.color.primaryBg,
  borderRadius: theme.spacing(1),
  position: 'absolute',
  boxShadow: '0 0 5px 0 rgba(0,0,0,.2)',
  width: cssVariables.width.sidebar,
  zIndex: '101',
  top: '50px',
  right: '0',
  padding: '6px',
  lineHeight: 'normal',
}));

export const MenuDropDownInner = styled('ul')(({ theme }) => ({
  padding: 0,
}));

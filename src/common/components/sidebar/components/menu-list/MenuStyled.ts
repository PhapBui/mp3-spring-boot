import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';

export const MenuWrapper = styled('nav')(({ theme }) => ({
  width: '100%',
  position: 'relative',
}));

export const MenuList = styled('ul')({
  width: '100%',
  position: 'relative',
});

export const MenuTitle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '26px',
  fontWeight: '700',
  color: cssVariables.color.white,
  textTransform: 'uppercase',
  margin: '0 28px 8px',
  whiteSpace: 'nowrap',
});

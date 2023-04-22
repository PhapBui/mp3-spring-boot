import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const HeaderRightWrapper = styled('div')(({ theme }) => ({
  flex: 'auto 0 0',
}));

export const HeaderRightInner = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  columnGap: theme.spacing(1.5),
}));

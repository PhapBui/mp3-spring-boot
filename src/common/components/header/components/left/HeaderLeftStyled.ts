import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const HeaderLeftWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  marginRight: theme.spacing(2.5),
  alignItems: 'center',
}));

export const Navigate = styled('div')(({ theme }) => ({
  display: 'flex',
}));

export const NavigateButton = styled('button')(({ theme }) => ({
  display: 'flex',
  opacity: 0.3,
  '& svg': {
    fontSize: '24px',
    marginRight: '20px',
    color: cssVariables.color.textPrimary,
  },
}));

export const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
}));

import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const SettingWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
}));

export const SettingInner = styled('button')(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: cssVariables.color.alphaBg,
  borderRadius: '999px',
  cursor: 'pointer',
  '& svg': {
    color: 'white',
  },
}));

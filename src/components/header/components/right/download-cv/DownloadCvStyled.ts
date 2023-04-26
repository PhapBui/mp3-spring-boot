import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const DownloadWrapper = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(1.5),
  backgroundColor: cssVariables.color.alphaBg,
  color: cssVariables.color.linkTextHover,
  borderRadius: '999px',
  position: 'relative',
  cursor: 'pointer',
}));

export const LinkDownload = styled('a')(({ theme }) => ({
  display: 'flex',
  padding: '10px 24px',
  alignItems: 'center',
  fontWeight: '600',
  '& svg': {
    marginRight: theme.spacing(0.5),
  },
}));

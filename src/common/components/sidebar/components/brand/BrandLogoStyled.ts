import { logo } from '@/assets';
import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';

export const BrandLogoWrapper = styled('div')(({ theme }) => ({
  width: cssVariables.width.sidebar,
  height: cssVariables.height.header,

  position: 'fixed',
  top: '0',
  padding: '0 25px 0 28px',
  display: 'flex',
  alignItems: 'center',
}));

export const BrandLogoInner = styled('div')(({ theme }) => ({
  background: `url(${logo}) 50%/contain no-repeat`,
  width: cssVariables.width.logo,
  height: cssVariables.height.logo,
}));

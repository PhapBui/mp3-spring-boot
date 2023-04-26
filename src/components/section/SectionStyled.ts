import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const SectionWrapper = styled('div')({
  marginTop: cssVariables.margin.topSection,
  padding: 0,
});

export const SectionInner = styled('div')({
  flexGrow: '1',
  margin: '0 auto',
  position: 'relative',
  width: '100%',
});

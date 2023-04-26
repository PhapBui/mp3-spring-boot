import { cssVariables } from '@/utilities/theme';
import { styled } from '@mui/material';

export const CTAWrapper = styled('div')(({ theme }) => ({
  padding: '15px 8px',
  borderRadius: '8px',
  margin: '10px 20px',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(117deg,#5a4be7,#c86dd7 102%)',
}));

export const TextContent = styled('div')({
  fontSize: '12px',
  marginBottom: '10px',
  fontWeight: '600',
  borderColor: '#ffdb00',
  lineHeight: '1.67',
  color: cssVariables.color.white,
});

export const LinkContent = styled('a')({
  backgroundColor: '#ffdb00',
  borderColor: '#ffdb00',
  color: 'var(--black)',
  display: 'inline-block',
  padding: '6px 35px',
  fontSize: '12px',
  fontWeight: '600',
  borderRadius: '999px',
  lineHeight: 'normal',
  textAlign: 'center',
  cursor: 'pointer',
  position: 'relative',
});

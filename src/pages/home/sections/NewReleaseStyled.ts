import { cssVariables } from '@/utilities/theme';
import { Button, Stack, styled } from '@mui/material';

export const ButtonGroup = styled(Stack)({
  flexDirection: 'row',
  marginBottom: 20,
  color: cssVariables.color.white,
});

export const ButtonInner = styled(Button)({
  padding: '4px 24px',
  border: `1px solid ${cssVariables.border.color.primary}`,
  color: cssVariables.color.white,
  borderRadius: '100px',
  fontWeight: '400',
  fontSize: '12px',
  textTransform: 'uppercase',
  marginRight: '15px',
  '&.active': {
    borderColor: cssVariables.color.purplePrimary,
    backgroundColor: cssVariables.color.purplePrimary,
    color: cssVariables.color.white,
  },
});

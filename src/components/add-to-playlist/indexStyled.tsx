import { cssVariables } from '@/utilities/theme';
import { Stack, styled } from '@mui/material';

export const AddToPlaylistWrapper = styled(Stack)({
  flexDirection: 'row',
  columnGap: 8,
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const AllCheck = styled('div')({
  lineHeight: 0.6,
  color: cssVariables.color.textSecondary,
});
export const Action = styled(Stack)({
  flexDirection: 'row',
  columnGap: 4,
  justifyContent: 'center',
  padding: '0 8px',
  alignItems: 'center',
  color: cssVariables.color.textSecondary,
  border: `1px solid ${cssVariables.border.color.borderBox}`,
  backgroundColor: 'hsla(0,0%,100%,.05)',
  borderRadius: '999px',
});

export const MoreAction = styled('div')({
  lineHeight: 0.6,
  color: cssVariables.color.textSecondary,
  border: `1px solid ${cssVariables.border.color.borderBox}`,
  backgroundColor: 'hsla(0,0%,100%,.05)',
  borderRadius: '999px',
});

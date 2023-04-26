import { Stack, styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';
import { playGift } from '@/assets';

export const ActionOverlayWrapper = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  backgroundColor: cssVariables.color.darkAlpha50,
  transition: 'all linear 0.3s',
  visibility: 'hidden',
  opacity: '0',
});

export const ActionOverlayInner = styled(Stack)({
  color: cssVariables.color.textPrimary,
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-evenly',
  position: 'absolute',
  left: '50%',
  top: '50%',
  bottom: 'auto',
  right: 'auto',
  transform: 'translateX(-50%) translateY(-50%)',
  alignItems: 'center',
  zIndex: '97',
  '& button': {
    cursor: 'pointer',
    lineHeight: 0.6,
  },
});

export const PlayGift = styled('i')({
  backgroundImage: `url(${playGift})`,
  width: '45px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #fff',
  borderRadius: '50%',
  backgroundSize: '18px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
});

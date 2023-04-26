import { styled } from '@mui/material';

export const ListSongWrapper = styled('div')({
  '& .song-left': {
    flexGrow: 0,
  },
});

export const CheckBoxWrapper = styled('div')({
  cursor: 'pointer',
  position: 'absolute',
  width: '34px',
  height: '34px',

  visibility: 'visible',
  opacity: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-50%)',
  top: '50%',
  '& .checkbox': {
    lineHeight: '1.25',
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    justifyContent: 'center',
  },
  '& .checkbox, & .checkbox input': {
    cursor: 'pointer',
    position: 'relative',
  },
});

import { styled } from '@mui/material';
import { cssVariables } from '@/utilities/theme';

export const PlayerQueueWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '0',
  right: '0',
  bottom: cssVariables.height.player,
  width: cssVariables.width.playlist,
  borderBottom: 'none',
  borderLeft: `1px solid ${cssVariables.border.color.primary}`,
}));

export const PlayerQueueContainer = styled('div')({
  height: `calc(100vh - ${cssVariables.height.player})`,
  maxHeight: `calc(100vh - ${cssVariables.height.player})`,
  bottom: '0',
  right: '0',
  position: 'relative',
  borderRadius: 'inherit',
  display: 'flex',
  flexDirection: 'column',
});

export const PlayerQueueHeader = styled('div')({
  padding: '14px 0',
  position: 'relative',
});

export const TabBar = styled('div')({
  padding: '0 8px',
});

export const TabBarLeft = styled('div')({
  display: 'flex',
  flex: '1 1',
  borderRadius: '999px',
  backgroundColor: cssVariables.color.alphaBg,
  padding: '3px',
});

export const TabBarRight = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& button': {
    lineHeight: 0.6,
  },
});

export const TabBarItem = styled('div')({
  flexGrow: 1,
  borderRadius: '999px',
  padding: '5px 0',
  cursor: 'pointer',
  color: cssVariables.color.textNavigation,
  '&.active': {
    boxShadow: '0 1px 3px 0 rgba(0,0,0,.07)',
    backgroundColor: cssVariables.color.tabActiveBg,
    color: cssVariables.color.textItemHover,
  },
  '&> button': {
    color: cssVariables.color.textPrimary,
    backgroundColor: cssVariables.color.alphaBg,
    fontSize: '14px',
    borderRadius: '999px',
    border: '0',
    display: 'inline-block',
    fontWeight: '400',
    textTransform: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    minHeight: 'unset',
    minWidth: 'unset',
    padding: 8,
    marginLeft: 8,
  },
});

export const UserAction = styled('div')({
  color: 'inherit',
});

export const PlayerQueueBody = styled('div')({
  flex: '1 1',
});

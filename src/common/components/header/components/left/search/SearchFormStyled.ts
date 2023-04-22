import { cssVariables } from '@/utilities/theme';
import { InputBase, styled } from '@mui/material';

export const SearchFormWrapper = styled('form')({
  position: 'relative',
  width: '100%',
  maxWidth: '440px',
});

export const Container = styled('div')({
  position: 'relative',
  borderRadius: '20px',
  height: '40px',
  backgroundColor: cssVariables.color.alphaBg,

  '&>.search-icon': {
    position: 'absolute',
    top: '9px',
    left: '10px',
  },

  '&.is-collapse': {
    borderRadius: '20px 20px 0 0',
    boxShadow: '0 1px 5px 0 rgba(0,0,0,.2)',
    backgroundColor: cssVariables.color.primaryBg,
  },
});

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: cssVariables.color.textSearch,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export const ListSuggest = styled('ul')({
  position: 'absolute',
  overflow: 'hidden',
  width: '100%',
  height: 'auto',
  minHeight: '0',
  backgroundColor: cssVariables.color.primaryBg,
  zIndex: '5',
  display: 'block',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  boxShadow: '0 4px 6px 0 rgba(32,33,36,.28)',
  padding: '13px 10px',
  color: cssVariables.color.textPrimary,
});

export const ListSuggestContent = styled('div')({
  maxHeight: 'calc(100vh - 180px)',
  overflowY: 'auto',
});

export const SuggestContentItem = styled('li')({
  display: 'flex',
  alignItems: 'baseline',
  borderRadius: '4px',
  padding: '8px 10px',
  position: 'relative',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  cursor: 'pointer',

  '&>.icon': {
    fontSize: '16px',
    color: cssVariables.color.textSecondary,
    position: 'relative',
    top: '3px',
    marginRight: '10px',
  },
  '&>.text': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    fontSize: '14px',
  },
});

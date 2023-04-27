import { Typography } from '@mui/material';
import { ChangeEvent, useRef, useState, memo } from 'react';

import useOnClickOutside from '@/hooks/onClickOutSide';
import { cssVariables } from '@/utilities/theme';
import { CiSearch } from 'react-icons/ci';
import {
  Container,
  ListSuggest,
  ListSuggestContent,
  SearchFormWrapper,
  StyledInputBase,
} from './SearchFormStyled';
import SuggestItem from './SuggestItem';

interface SearchFormProps {}

const SearchForm: React.FunctionComponent<SearchFormProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const inputRef = useRef();
  const squareBoxRef = useRef<HTMLDivElement>(null);

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    if (!searchValue.startsWith(' ')) setSearchValue(e.target.value);
  };
  const clickOutsidehandler = () => {
    setShowResult(false);
  };
  useOnClickOutside(squareBoxRef, clickOutsidehandler);
  return (
    <SearchFormWrapper>
      <Container ref={squareBoxRef} className={showResult ? 'is-collapse' : ''}>
        <CiSearch size="24px" className="search-icon" color={cssVariables.color.textPlaceholder} />
        <StyledInputBase
          onChange={handleOnchange}
          onFocus={() => setShowResult(true)}
          ref={inputRef}
          placeholder="What are you searching"
          value={searchValue}
          inputProps={{ 'aria-label': 'search' }}
        />
        {showResult && (
          <ListSuggest>
            <ListSuggestContent>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '700',
                  padding: '0 10px 8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                Đề xuất cho bạn
              </Typography>
              {[1, 2, 3, 4, 5].map((a) => (
                <SuggestItem key={a} />
              ))}
            </ListSuggestContent>
          </ListSuggest>
        )}
      </Container>
    </SearchFormWrapper>
  );
};

export default memo(SearchForm);

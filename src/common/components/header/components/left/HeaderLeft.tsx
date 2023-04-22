import * as React from 'react';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { HeaderLeftWrapper, Navigate, NavigateButton, SearchContainer } from './HeaderLeftStyled';
import SearchForm from './search/Search';

interface HeaderLeftProps {}

const HeaderLeft: React.FunctionComponent<HeaderLeftProps> = (props) => {
  const handleNavigate = (type: string) => {
    if (type === 'back') {
      history.back();
    }
    if (type === 'forward') {
      history.forward();
    }
  };
  return (
    <HeaderLeftWrapper>
      <Navigate>
        <NavigateButton onClick={() => handleNavigate('back')}>
          <BsArrowLeft />
        </NavigateButton>
        <NavigateButton onClick={() => handleNavigate('forward')}>
          <BsArrowRight />
        </NavigateButton>
      </Navigate>

      <SearchContainer>
        <SearchForm />
      </SearchContainer>
    </HeaderLeftWrapper>
  );
};

export default HeaderLeft;

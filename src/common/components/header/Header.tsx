import * as React from 'react';
import { HeaderInner, HeaderWrapper } from './HeaderStyle';
import HeaderLeft from './components/left/HeaderLeft';
import HeaderRight from './components/right/HeaderRight';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <HeaderWrapper className="collapsed">
      <HeaderInner>
        <HeaderLeft />
        <HeaderRight />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

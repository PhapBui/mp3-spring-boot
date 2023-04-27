import * as React from 'react';
import { HeaderInner, HeaderWrapper } from './HeaderStyle';
import HeaderLeft from './components/left/HeaderLeft';
import HeaderRight from './components/right/HeaderRight';

interface HeaderProps {
  isSticky: Boolean;
}

const Header: React.FunctionComponent<HeaderProps> = ({ isSticky }: HeaderProps) => {
  return (
    <HeaderWrapper className={`${isSticky ? 'is-sticky' : ''} collapsed`}>
      <HeaderInner>
        <HeaderLeft />
        <HeaderRight />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default React.memo(Header);

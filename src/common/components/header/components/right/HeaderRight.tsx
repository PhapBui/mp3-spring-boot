import * as React from 'react';
import { HeaderRightInner, HeaderRightWrapper } from './HeaderRightStyled';
import DownloadCv from './download-cv/DownloadCv';
import Settings from './settings/Settings';
import Account from './account/Account';

interface HeaderRightProps {}

const HeaderRight: React.FunctionComponent<HeaderRightProps> = (props) => {
  const handleClick = (evt: React.MouseEvent<HTMLImageElement>) => {
    // evt.preventDefault();
    console.log('click');
  };
  return (
    <HeaderRightWrapper onContextMenu={handleClick}>
      <HeaderRightInner>
        <DownloadCv />
        <Settings />
        <Account />
      </HeaderRightInner>
    </HeaderRightWrapper>
  );
};

export default HeaderRight;

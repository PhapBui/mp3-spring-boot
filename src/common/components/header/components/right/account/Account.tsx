import * as React from 'react';
import { AccountInner, AccountWrapper } from './AccountStyled';

interface IAccountProps {}

const Account: React.FunctionComponent<IAccountProps> = (props) => {
  return (
    <AccountWrapper>
      <AccountInner>Đăng nhập</AccountInner>
    </AccountWrapper>
  );
};

export default Account;

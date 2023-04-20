import * as React from 'react';
import { MainWrapper } from './MainStyled';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FunctionComponent<MainProps> = ({ children }) => {
  return (
    <MainWrapper className="collapsed">
      <h2>color red cho bo</h2>
      {children}
    </MainWrapper>
  );
};

export default Main;

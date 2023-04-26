import * as React from 'react';
import { MainContext, MainInner, MainWrapper } from './MainStyled';

interface MainProps {
  children: React.ReactNode;
  onScoll: (e: React.UIEvent<HTMLElement>) => void;
}

const Main: React.FunctionComponent<MainProps> = ({ children, onScoll }) => {
  return (
    <MainWrapper className="collapsed">
      <MainContext>
        <MainInner onScroll={onScoll}>{children}</MainInner>
      </MainContext>
    </MainWrapper>
  );
};

export default Main;

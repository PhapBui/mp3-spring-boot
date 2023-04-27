import * as React from 'react';
import { MainContext, MainInner, MainWrapper } from './MainStyled';
import ScollBar from '@/components/scroll-bar';

interface MainProps {
  children: React.ReactNode;
  onScoll: (e: React.UIEvent<HTMLElement>) => void;
  height: number;
  translateY: number;
}

const Main: React.FunctionComponent<MainProps> = ({ children, onScoll, height, translateY }) => {
  return (
    <MainWrapper className="collapsed">
      <MainContext>
        <MainInner onScroll={onScoll}>{children}</MainInner>
        <ScollBar height={height} translateY={translateY} />
      </MainContext>
    </MainWrapper>
  );
};

export default React.memo(Main);

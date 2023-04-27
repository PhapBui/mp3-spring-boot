import * as React from 'react';
import { ScrollBarVertical, ScrollBarWrapper } from './indexStyled';

interface IScollBarProps {
  height: number;
  translateY: number;
}

const ScollBar: React.FunctionComponent<IScollBarProps> = ({
  height,
  translateY,
}: IScollBarProps) => {
  return (
    <ScrollBarWrapper>
      <ScrollBarVertical
        style={{
          top: `${translateY}px`,
        }}
        sx={{
          height: `${height}px`,
        }}
      ></ScrollBarVertical>
    </ScrollBarWrapper>
  );
};

export default React.memo(ScollBar);

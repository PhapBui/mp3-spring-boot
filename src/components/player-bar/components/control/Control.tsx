import * as React from 'react';
import { ControlWrapper } from './ControlStyled';

interface ControlProps {
  children: React.ReactNode;
}

const Control: React.FunctionComponent<ControlProps> = ({ children }) => {
  return <ControlWrapper>{children}</ControlWrapper>;
};

export default Control;

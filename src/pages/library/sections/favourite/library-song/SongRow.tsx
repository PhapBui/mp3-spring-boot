import * as React from 'react';
import { SongRowWrapper } from './SongRowStyled';

interface ITableRowProps {
  children: React.ReactNode;
  isSelected?: Boolean;
}

const TableRow: React.FunctionComponent<ITableRowProps> = ({ children, isSelected = false }) => {
  return <SongRowWrapper className={isSelected ? 'selected' : ''}>{children}</SongRowWrapper>;
};

export default TableRow;

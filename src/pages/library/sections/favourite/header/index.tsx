import * as React from 'react';
import { Menu, MenuItem, Wrapper, MenuItemLink } from './styled';

interface ITableHeaderProps {}

const TableHeader: React.FunctionComponent<ITableHeaderProps> = (props) => {
  return (
    <Wrapper direction="row">
      <Menu>
        <MenuItem>
          <MenuItemLink to="/mymusic/songs">Bài hát</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink to="/mymusic/albums">Albums</MenuItemLink>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default TableHeader;

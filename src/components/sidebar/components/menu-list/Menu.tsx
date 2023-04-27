import * as React from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';
import { MenuList, MenuTitle, MenuWrapper } from './MenuStyled';

interface MenuProps {
  title?: String;
  data: MenuItemProps[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ data, title }) => {
  return (
    <MenuWrapper>
      {title && <MenuTitle>{title}</MenuTitle>}
      <MenuList>
        {data.map((a) => (
          <MenuItem key={a.id} {...a} />
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

export default React.memo(Menu);

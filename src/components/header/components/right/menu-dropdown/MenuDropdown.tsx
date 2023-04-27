import * as React from 'react';
import { MenuDropDownInner, MenuDropDownWrapper } from './MenuDropdownStyled';
import MenuItem, { MenuItemProps } from './MenuItem';
import { icons } from '@/assets';
import { Divider } from '@mui/material';
import NavigateItem from './NavigateItem';
import { cssVariables } from '@/utilities/theme';

interface IMenuDropDownProps {}
const data: MenuItemProps[] = [
  { id: 1, name: 'string', icon: icons.account, actionIcons: icons.setting },
  { id: 2, name: 'string', icon: icons.account, actionIcons: icons.setting },
];
const data2: MenuItemProps[] = [
  { id: 1, name: 'string', icon: icons.account },
  { id: 2, name: 'string', icon: icons.account, actionIcons: icons.setting },
  { id: 3, name: 'string', icon: icons.account, actionIcons: icons.setting },
  { id: 4, name: 'string', icon: icons.account, actionIcons: icons.setting },
];
const MenuDropDown: React.FunctionComponent<IMenuDropDownProps> = (props) => {
  return (
    <MenuDropDownWrapper>
      <MenuDropDownInner>
        {data.map((item) => (
          <MenuItem {...item} key={item.id} />
        ))}
      </MenuDropDownInner>
      <Divider
        sx={{
          my: 1.25,
          color: cssVariables.border.color.primary,
          borderColor: cssVariables.border.color.primary,
        }}
      />
      <MenuDropDownInner>
        {data2.map((item) => (
          <NavigateItem {...item} key={item.id} />
        ))}
      </MenuDropDownInner>
    </MenuDropDownWrapper>
  );
};

export default React.memo(MenuDropDown);

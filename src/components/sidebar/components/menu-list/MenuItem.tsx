import * as React from 'react';
import { Inner, InnerAction, InnerText, MenuItemWrapper } from './MenuItemStyled';

export interface MenuItemProps {
  id: number;
  name: string;
  path: string;
  icon: React.ReactNode;
  actionIcons?: React.ReactNode;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  name,
  path,
  icon,
  actionIcons,
}: MenuItemProps) => {
  return (
    <MenuItemWrapper>
      <Inner to={`/${path}`} title={name}>
        {icon}
        <InnerText>{name}</InnerText>
        <InnerAction>{actionIcons && actionIcons}</InnerAction>
      </Inner>
    </MenuItemWrapper>
  );
};

export default React.memo(MenuItem);

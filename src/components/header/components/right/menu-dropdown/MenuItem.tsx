import * as React from 'react';
import { Action, Icon, Inner, InnerText, MenuItemWrapper } from './MenuItemStyled';

export interface MenuItemProps {
  id: number;
  name: string;
  icon: React.ReactNode;
  actionIcons?: React.ReactNode;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  name,

  icon,
  actionIcons,
}: MenuItemProps) => {
  return (
    <MenuItemWrapper>
      <Inner title={name}>
        <Icon>{icon}</Icon>
        <InnerText>{name}</InnerText>
        {actionIcons && <Action>{actionIcons}</Action>}
      </Inner>
    </MenuItemWrapper>
  );
};

export default MenuItem;

import * as React from 'react';
import { Action, Icon, InnerText, LinkNavigate, MenuItemWrapper } from './MenuItemStyled';

export interface NavigateItemProps {
  id: number;
  name: string;
  icon: React.ReactNode;
  actionIcons?: React.ReactNode;
}

const NavigateItem: React.FunctionComponent<NavigateItemProps> = ({
  name,

  icon,
  actionIcons,
}: NavigateItemProps) => {
  return (
    <MenuItemWrapper>
      <LinkNavigate>
        <Icon>{icon}</Icon>
        <InnerText>{name}</InnerText>
        {actionIcons && <Action>{actionIcons}</Action>}
      </LinkNavigate>
    </MenuItemWrapper>
  );
};

export default React.memo(NavigateItem);

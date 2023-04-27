import React, { useState } from 'react';
import { SettingInner, SettingWrapper } from './SettingsStyled';
import { icons } from '@/assets';
import MenuDropDown from '../menu-dropdown/MenuDropdown';

interface ISettingsProps {}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  const [toggleDropDown, setToggleDropDown] = useState<Boolean>(false);

  const handleDropDownMenu = () => {
    setToggleDropDown((prev) => !prev);
  };

  return (
    <SettingWrapper onClick={handleDropDownMenu}>
      <SettingInner>{icons.setting}</SettingInner>
      {toggleDropDown && <MenuDropDown />}
    </SettingWrapper>
  );
};

export default React.memo(Settings);

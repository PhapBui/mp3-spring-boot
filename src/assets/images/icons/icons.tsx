import { cssVariables } from '@/utilities/theme';
import { CiSettings } from 'react-icons/ci';
import { IoDiamondOutline } from 'react-icons/io5';
import { VscAccount, VscDesktopDownload } from 'react-icons/vsc';

const icons = {
  desktopDownload: <VscDesktopDownload size={cssVariables.iconSize.normal} />,
  vip: <IoDiamondOutline size={cssVariables.iconSize.normal} />,
  setting: <CiSettings size={cssVariables.iconSize.normal} />,
  account: <VscAccount size={cssVariables.iconSize.normal} />,
};

export default icons;

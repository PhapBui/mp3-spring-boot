import { cssVariables } from '@/utilities/theme';
import { AiOutlineRight } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { GiAlarmClock } from 'react-icons/gi';
import {
  IoDiamondOutline,
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from 'react-icons/io5';
import { RiMoreFill } from 'react-icons/ri';
import { VscAccount, VscDesktopDownload } from 'react-icons/vsc';
import { AiOutlineHeart, AiOutlineMore, AiFillHeart } from 'react-icons/ai';
import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import { SlMusicToneAlt } from 'react-icons/sl';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';

const icons = {
  desktopDownload: <VscDesktopDownload size={cssVariables.iconSize.normal} />,
  vip: <IoDiamondOutline size={cssVariables.iconSize.normal} />,
  setting: <CiSettings size={cssVariables.iconSize.normal} />,
  account: <VscAccount size={cssVariables.iconSize.normal} />,
  right: <AiOutlineRight size={cssVariables.iconSize.normal} />,
  clock: <GiAlarmClock size={cssVariables.iconSize.normal} />,
  moreH: <RiMoreFill size={cssVariables.iconSize.normal} />,
  moreV: <AiOutlineMore size={cssVariables.iconSize.normal} />,
  liked: <AiFillHeart size={cssVariables.iconSize.normal} />,
  like: <AiOutlineHeart size={cssVariables.iconSize.normal} />,

  music: <SlMusicToneAlt size={cssVariables.iconSize.small} />,
  checkBox: <BiCheckbox size={cssVariables.iconSize.small} />,
  checkedBox: <BiCheckboxChecked size={cssVariables.iconSize.small} />,

  play: <BsPlayCircle size={cssVariables.iconSize.player} />,
  pause: <BsPauseCircle size={cssVariables.iconSize.player} />,
  skipBackward: <IoPlayBackSharp size={cssVariables.iconSize.normal} />,
  skipForward: <IoPlayForwardSharp size={cssVariables.iconSize.normal} />,
  next: <IoPlaySkipBackSharp size={cssVariables.iconSize.normal} />,
  previous: <IoPlaySkipForwardSharp size={cssVariables.iconSize.normal} />,
  random: <FaRandom size={cssVariables.iconSize.normal} />,
  repeat: <FiRepeat size={cssVariables.iconSize.normal} />,
};

export default icons;

import { BsPlayCircle } from 'react-icons/bs';
import { MdLibraryMusic } from 'react-icons/md';
import { VscTarget } from 'react-icons/vsc';

export const mainMenuData = [
  {
    id: 1,
    name: 'Thư viện',
    path: 'mymusic',
    icon: <MdLibraryMusic />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 2,
    name: 'Khám phá',
    path: '',
    icon: <VscTarget />,
  },
];
export const subMenuData = [
  {
    id: 1,
    name: 'Nhạc mới',
    path: 'new',
    icon: <MdLibraryMusic />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 2,
    name: 'Chủ đề & Thể loại',
    path: 'topic',
    icon: <VscTarget />,
  },
  {
    id: 3,
    name: 'Top 100',
    path: 'topic',
    icon: <VscTarget />,
  },
];
export const personasMenuData = [
  {
    id: 1,
    name: 'Nghe gần đây',
    path: 'mymusic/history',
    icon: <MdLibraryMusic />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 2,
    name: 'Bài hát yêu thích',
    path: 'mymusic/history',
    icon: <MdLibraryMusic />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 3,
    name: 'Playlist',
    path: 'mymusic/history',
    icon: <MdLibraryMusic />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 4,
    name: 'Album',
    path: 'mymusic/history',
    icon: <MdLibraryMusic />,
    actionIcons: <BsPlayCircle />,
  },
  {
    id: 5,
    name: 'Đã tải lên',
    path: 'mymusic/history',
    icon: <MdLibraryMusic />,
    actionIcons: <BsPlayCircle />,
  },
];

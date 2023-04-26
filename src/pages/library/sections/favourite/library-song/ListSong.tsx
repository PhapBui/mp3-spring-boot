import * as React from 'react';
import SongRow from './SongRow';
import SongItem from '@/components/songlist/components/SongItem';
import {
  SongItemCenter,
  SongItemLeft,
  SongItemRight,
} from '@/components/songlist/components/SongItemStyled';
import { SongItemContent } from '@/components/songlist/components/SongItemStyled';
import { CheckBoxWrapper, ListSongWrapper } from './ListSongStyled';
import { icons } from '@/assets';
interface ITableProps {}

const ListTable: React.FunctionComponent<ITableProps> = (props) => {
  const [activeItem, setActiveItem] = React.useState<number>(1);
  const handleActive = (a: number) => {
    setActiveItem(a);
  };
  return (
    <ListSongWrapper>
      <SongItemContent className="song-list-header">
        <SongItemLeft className="song-left">
          <span
            style={{
              marginRight: 8,
              visibility: 'hidden',
              opacity: 0,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            {icons.account}
          </span>
          <span style={{ fontSize: 16 }} className="column-text">
            {' '}
            Bài hát
          </span>
        </SongItemLeft>
        <SongItemCenter className="song-center">Album</SongItemCenter>
        <SongItemRight className="song-right">Thời gian</SongItemRight>
      </SongItemContent>
      {[1, 2, 3, 4].map((a) => (
        <SongRow isSelected={activeItem === a}>
          <CheckBoxWrapper className="checkbox-wrapper">
            <label className="checkbox">
              <input type="checkbox" />
            </label>
          </CheckBoxWrapper>
          <SongItem
            timeRelease={false}
            key={a}
            isActive={activeItem === a}
            handleChangeSong={() => handleActive(a)}
            prefix={true}
            center={true}
            time={true}
          />
        </SongRow>
      ))}
    </ListSongWrapper>
  );
};

export default ListTable;

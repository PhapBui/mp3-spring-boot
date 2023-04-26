import { icons } from '@/assets';
import * as React from 'react';
import CardInfo from '@/components/card/card-info/CardInfo';
import Card from '@/components/card';
import {
  Prefix,
  SongItemCenter,
  SongItemContent,
  SongItemInner,
  SongItemLeft,
  SongItemRight,
  SongItemWrapper,
} from './SongItemStyled';
import { Box } from '@mui/material';

interface ISongItemProps {
  timeRelease: boolean;
  isActive: boolean;
  handleChangeSong: () => void;
  prefix?: Boolean;
  center?: Boolean;
  time?: Boolean;
}

// delete
const url =
  'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/1/0/10817807dfad29d7b29456ef92740dba_1385554309.jpg';
const SongItem: React.FunctionComponent<ISongItemProps> = ({
  timeRelease,
  isActive,
  handleChangeSong,
  prefix = false,
  center = false,
  time = false,
}: ISongItemProps) => {
  const item = { name: 'Genie', path: '' };
  const author = { name: 'Snsd', path: '' };

  return (
    <SongItemWrapper className={isActive ? 'active item' : 'item'} onClick={handleChangeSong}>
      <SongItemInner>
        <SongItemContent>
          <SongItemLeft className="song-left">
            {prefix && <Prefix className="prefix">{icons.music}</Prefix>}
            <Card classList="is-45" />
            <CardInfo {...{ item, author }} />
          </SongItemLeft>
          {center && (
            <SongItemCenter className="song-center">
              <Box>Inter the new World</Box>
            </SongItemCenter>
          )}
          <SongItemRight className="song-right">
            <button>{icons.like}</button>
            {time ? <span>4:30</span> : <button>{icons.moreH}</button>}
          </SongItemRight>
        </SongItemContent>
      </SongItemInner>
    </SongItemWrapper>
  );
};

export default SongItem;

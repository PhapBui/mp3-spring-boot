import * as React from 'react';
import {
  Artist,
  ListItemContent,
  ListItemInner,
  ListItemLeft,
  ListItemRight,
  ListItemWrapper,
  SongInfo,
  SongThumbnail,
  SongTitle,
  TimeRelease,
} from './ListItemStyled';
import { icons } from '@/assets';
import ActionOverlay from '@/common/components/section/card/ActionOverlay';

interface IListItemProps {
  timeRelease: boolean;
  isActive: boolean;
  handleChangeSong: () => void;
}

const ListItem: React.FunctionComponent<IListItemProps> = ({
  timeRelease,
  isActive,
  handleChangeSong,
}: IListItemProps) => {
  return (
    <ListItemWrapper>
      <ListItemInner>
        <ListItemContent className={isActive ? 'active' : ''} onClick={handleChangeSong}>
          <ListItemLeft>
            <SongThumbnail sx={{ width: 40, height: 40 }}>
              <figure className="image" title="Adult Ceremony">
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/1/0/10817807dfad29d7b29456ef92740dba_1385554309.jpg"
                  alt=""
                />
              </figure>
              <ActionOverlay />
            </SongThumbnail>
            <SongInfo>
              <SongTitle>Adult Ceremony</SongTitle>
              <Artist>Park Ji Yoon</Artist>
              {timeRelease && <TimeRelease>2 ngày trước</TimeRelease>}
            </SongInfo>
          </ListItemLeft>
          <ListItemRight>
            <button>{icons.like}</button>
            <button>{icons.moreH}</button>
          </ListItemRight>
        </ListItemContent>
      </ListItemInner>
    </ListItemWrapper>
  );
};

export default ListItem;

import * as React from 'react';
import {
  PlayerQueueWrapper,
  PlayerQueueContainer,
  PlayerQueueHeader,
  PlayerQueueBody,
  TabBar,
  TabBarLeft,
  TabBarRight,
  TabBarItem,
  UserAction,
} from './PlayerQueueStyled';
import { Typography } from '@mui/material';
import { icons } from '@/assets';
import SongList from '@/common/components/songlist/SongList';

interface PlayerQueueProps {}

const PlayerQueue: React.FunctionComponent<PlayerQueueProps> = (props) => {
  const [isActive, setIsActive] = React.useState<Boolean>(true);

  const handleSwitchPlayList = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <PlayerQueueWrapper className="queue">
      <PlayerQueueContainer>
        <PlayerQueueHeader>
          <TabBar className="flex">
            <TabBarLeft onClick={handleSwitchPlayList}>
              <TabBarItem className={isActive ? 'flex-item active' : 'flex-item'}>
                <Typography component="h6" variant="caption">
                  Danh sách phát
                </Typography>
              </TabBarItem>
              <TabBarItem className={!isActive ? 'flex-item active' : 'flex-item'}>
                <Typography component="h6" variant="caption">
                  Nghe gần đây
                </Typography>
              </TabBarItem>
            </TabBarLeft>
            <TabBarRight>
              <UserAction className="flex">
                <TabBarItem className="flex-item">
                  <button>{icons.clock}</button>
                </TabBarItem>
                <TabBarItem className="flex-item">
                  <button>{icons.moreH}</button>
                </TabBarItem>
              </UserAction>
            </TabBarRight>
          </TabBar>
        </PlayerQueueHeader>
        <PlayerQueueBody>
          <SongList />
        </PlayerQueueBody>
      </PlayerQueueContainer>
    </PlayerQueueWrapper>
  );
};

export default PlayerQueue;

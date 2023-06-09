import * as React from 'react';
import { PlayerBarWrapper } from './PlayerBarStyled';
import Control from './components/control/Control';
import PlayerQueue from './components/queue/PlayerQueue';
import AudioPlayer from '@/components/player/AudioPlayer';

interface PlayerBarProps {}

const PlayerBar: React.FunctionComponent<PlayerBarProps> = (props) => {
  return (
    <PlayerBarWrapper>
      <Control>
        <AudioPlayer />
      </Control>
      <PlayerQueue />
    </PlayerBarWrapper>
  );
};

export default React.memo(PlayerBar);

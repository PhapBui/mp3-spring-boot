import * as React from 'react';
import { PlayerBarWrapper } from './PlayerBarStyled';
import Control from './components/Control';
import PlayerQueue from './components/PlayerQueue';
import AudioPlayer from '@/common/components/player/AudioPlayer';

interface PlayerBarProps {}

const PlayerBar: React.FunctionComponent<PlayerBarProps> = (props) => {
  return (
    <PlayerBarWrapper>
      <Control>
        <AudioPlayer />
      </Control>
      <PlayerQueue></PlayerQueue>
    </PlayerBarWrapper>
  );
};

export default PlayerBar;

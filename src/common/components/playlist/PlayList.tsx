import * as React from 'react';

import { PlaylistThumbnail, PlaylistWrapper } from './PlaylistStyled';
import Card from '../card';
import CardInfo from '../card/card-info/CardInfo';

interface IPlaylistProps {}

const Playlist: React.FunctionComponent<IPlaylistProps> = (props) => {
  const item = {
    name: 'Be Mine',
    path: 'be-mine',
  };
  const artist = {
    name: 'Beast',
    path: 'beast',
  };

  return (
    <PlaylistWrapper>
      <Card />
      <CardInfo {...{ item, artist }} />
    </PlaylistWrapper>
  );
};

export default Playlist;

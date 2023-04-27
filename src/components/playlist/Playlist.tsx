import * as React from 'react';

import Card from '../card';
import CardInfo from '../card/card-info/CardInfo';
import { PlaylistThumbnail, PlaylistWrapper } from './PlaylistStyled';

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
      <PlaylistThumbnail>
        <Card />
      </PlaylistThumbnail>
      <CardInfo {...{ item, artist }} />
    </PlaylistWrapper>
  );
};

export default Playlist;

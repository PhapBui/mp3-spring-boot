import * as React from 'react';
import { PlayListWrapper } from './PlayListStyled';

interface PlayListProps {}

const PlayList: React.FunctionComponent<PlayListProps> = (props) => {
  return <PlayListWrapper className="playlist"></PlayListWrapper>;
};

export default PlayList;

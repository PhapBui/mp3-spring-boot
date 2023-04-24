import * as React from 'react';
import { PlayListWrapper } from './PlayListStyled';
import ListItem from './components/ListItem';

interface PlayListProps {}

const PlayList: React.FunctionComponent<PlayListProps> = (props) => {
  const [activeItem, setActiveItem] = React.useState<number>(1);
  const handleActive = (a: number) => {
    setActiveItem(a);
  };

  return (
    <PlayListWrapper className="playlist">
      {[1, 2, 3, 4].map((a) => (
        <ListItem
          timeRelease={false}
          key={a}
          isActive={activeItem === a}
          handleChangeSong={() => handleActive(a)}
        />
      ))}
    </PlayListWrapper>
  );
};

export default PlayList;

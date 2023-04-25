import * as React from 'react';
import { SongListWrapper } from './SongListStyled';
import ListItem from './components/SongItem';

interface SongListProps {}

const SongList: React.FunctionComponent<SongListProps> = (props) => {
  const [activeItem, setActiveItem] = React.useState<number>(1);
  const handleActive = (a: number) => {
    setActiveItem(a);
  };

  return (
    <SongListWrapper className="playlist">
      {[1, 2, 3, 4].map((a) => (
        <ListItem
          timeRelease={false}
          key={a}
          isActive={activeItem === a}
          handleChangeSong={() => handleActive(a)}
        />
      ))}
    </SongListWrapper>
  );
};

export default SongList;

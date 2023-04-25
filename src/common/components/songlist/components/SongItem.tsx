import { icons } from '@/assets';
import * as React from 'react';
import CardInfo from '@/common/components/card/card-info/CardInfo';
import Card from '@/common/components/card';
import {
  ListItemContent,
  ListItemInner,
  ListItemLeft,
  ListItemRight,
  ListItemWrapper,
} from './SongItemStyled';

interface IListItemProps {
  timeRelease: boolean;
  isActive: boolean;
  handleChangeSong: () => void;
}

// delete
const url =
  'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/1/0/10817807dfad29d7b29456ef92740dba_1385554309.jpg';
const ListItem: React.FunctionComponent<IListItemProps> = ({
  timeRelease,
  isActive,
  handleChangeSong,
}: IListItemProps) => {
  const item = { name: 'Genie', path: '' };

  return (
    <ListItemWrapper>
      <ListItemInner>
        <ListItemContent className={isActive ? 'active' : ''} onClick={handleChangeSong}>
          <ListItemLeft>
            <Card classList="is-45" />
            <CardInfo {...{ item }} />
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

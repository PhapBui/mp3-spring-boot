import Section from '@/common/components/section/Section';
import { Stack } from '@mui/material';
import * as React from 'react';
import { ButtonGroup, ButtonInner } from './NewReleaseStyled';
import Column from '@/common/components/section/column/Column';
import ListItem from '@/common/components/songlist/components/SongItem';

interface INewReleaseProps {}

const list = [
  { id: 1, name: 'Tất cả' },
  { id: 2, name: 'Việt Nam' },
  { id: 3, name: 'Quốc tế' },
];

const NewRelease: React.FunctionComponent<INewReleaseProps> = (props) => {
  const [activeItem, setActiveItem] = React.useState<number>(1);
  const handleActive = (a: number) => {
    setActiveItem(a);
  };
  const [activeList, setActiveList] = React.useState<number>(1);

  const handleActiveList = (a: number) => {
    setActiveList(a);
  };

  return (
    <Section title="Mới Phát Hành">
      <Stack direction="row">
        <ButtonGroup>
          {list.map((a) => (
            <ButtonInner
              key={a.id}
              className={activeList === a.id ? 'active' : ''}
              onClick={() => handleActiveList(a.id)}
            >
              {a.name}
            </ButtonInner>
          ))}
        </ButtonGroup>
      </Stack>
      <Stack
        direction="row"
        sx={{
          overflow: 'hidden',
          margin: '0 -14px',
          flexWrap: 'wrap',
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((a) => {
          return (
            <Column key={a} numberColumn={3}>
              <ListItem
                timeRelease={false}
                key={a}
                isActive={activeItem === a}
                handleChangeSong={() => handleActive(a)}
              />
            </Column>
          );
        })}
      </Stack>
    </Section>
  );
};

export default NewRelease;

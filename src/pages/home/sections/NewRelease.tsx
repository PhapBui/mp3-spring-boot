import Section from '@/common/components/section/Section';
import { Stack } from '@mui/material';
import * as React from 'react';
import { ItemWrapper } from '@/common/components/section/item/SectionItemStyled';
import PlayList from '@/common/components/playlist/PlayList';
import { ButtonGroup, ButtonInner } from './NewReleaseStyled';

interface INewReleaseProps {}

const list = [
  { id: 1, name: 'Tất cả' },
  { id: 2, name: 'Việt Nam' },
  { id: 3, name: 'Quốc tế' },
];

const NewRelease: React.FunctionComponent<INewReleaseProps> = (props) => {
  const [activeList, setActiveList] = React.useState<number>(1);

  const handleActive = (a: number) => {
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
              onClick={() => handleActive(a.id)}
            >
              {a.name}
            </ButtonInner>
          ))}
        </ButtonGroup>
      </Stack>
      <Stack direction="row" sx={{ overflow: 'hidden', margin: '0 -14px' }}>
        <ItemWrapper
          sx={{
            flexBasis: `${100 / 3}%`,
            width: `${100 / 3}%`,
            maxWidth: `${100 / 3}%`,
          }}
        >
          <PlayList />
        </ItemWrapper>
        <ItemWrapper
          sx={{
            flexBasis: `${100 / 3}%`,
            width: `${100 / 3}%`,
            maxWidth: `${100 / 3}%`,
          }}
        >
          <PlayList />
        </ItemWrapper>
        <ItemWrapper
          sx={{
            flexBasis: `${100 / 3}%`,
            width: `${100 / 3}%`,
            maxWidth: `${100 / 3}%`,
          }}
        >
          <PlayList />
        </ItemWrapper>
      </Stack>
    </Section>
  );
};

export default NewRelease;

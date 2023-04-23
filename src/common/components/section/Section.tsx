import SectionHeader from '@/pages/components/section-header/SectionHeader';
import { Stack } from '@mui/material';
import * as React from 'react';
import { SectionInner, SectionWrapper } from './SectionStyled';
import SectionItem from './item/SectionItem';

interface ISectionProps {
  numberChildDisplay?: number;
}

//delete
const data = [
  {
    id: 1,
    thumbnailUrl:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/b/c/bfbc87e815d9ffee436c8a20d22f923e.jpg',
    name: 'K-Pop',
    author: ['Twice', 'Snsd'],
  },
  {
    id: 2,
    thumbnailUrl:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/b/c/bfbc87e815d9ffee436c8a20d22f923e.jpg',
    name: 'US-UK',
    author: ['Taylor', 'Diana'],
  },
  {
    id: 3,
    thumbnailUrl:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/b/c/bfbc87e815d9ffee436c8a20d22f923e.jpg',
    name: 'V-Pop',
    author: ['Thuy Chi', 'MTV'],
  },
  {
    id: 4,
    thumbnailUrl:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/b/c/bfbc87e815d9ffee436c8a20d22f923e.jpg',
    name: 'Rock',
    author: ['Avril Lavigne '],
  },
  {
    id: 5,
    thumbnailUrl:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/b/c/bfbc87e815d9ffee436c8a20d22f923e.jpg',
    name: 'Chill',
  },
  {
    id: 6,
    thumbnailUrl:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/b/c/bfbc87e815d9ffee436c8a20d22f923e.jpg',
    name: 'Bolero',
    author: ['Chiu', 'Kho'],
  },
  {
    id: 7,
    thumbnailUrl:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/b/c/bfbc87e815d9ffee436c8a20d22f923e.jpg',
    name: 'Bolero',
    author: ['Khong', ' Kho'],
  },
];
/*
interface section{
  data:{
    title:string,
    sub-title,
    icon:string,
    link:string,
    itemRender:number,
    items: item[],

  }
}

*/
const Section: React.FunctionComponent<ISectionProps> = ({
  numberChildDisplay = 6,
}: ISectionProps) => {
  const newData = data.slice(0, numberChildDisplay);
  return (
    <SectionWrapper>
      <SectionHeader data={{ title: 'K-Pop', readmore: 'kham-pha' }} />
      <SectionInner>
        <Stack direction="row" sx={{ overflow: 'hidden', margin: '0 -14px' }}>
          {newData.map((item, i) => {
            return <SectionItem key={item.id} data={item} numberColumn={numberChildDisplay} />;
          })}
        </Stack>
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;

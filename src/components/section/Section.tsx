import * as React from 'react';
import { SectionInner, SectionWrapper } from './SectionStyled';
import SectionHeader from './section-header/SectionHeader';

interface ISectionProps {
  title: string;
  readmore?: string;
  children: React.ReactNode;
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
  title,
  readmore,
  children,
}: ISectionProps) => {
  return (
    <SectionWrapper>
      <SectionHeader data={{ title, readmore }} />
      <SectionInner>{children}</SectionInner>
    </SectionWrapper>
  );
};

export default React.memo(Section);

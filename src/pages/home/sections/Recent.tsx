import * as React from 'react';
import Section from '@/common/components/section/Section';
import { Stack } from '@mui/material';
import Column from '@/common/components/section/column/Column';
import Playlist from '@/common/components/playlist/Playlist';
interface IRecentProps {}
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
const Recent: React.FunctionComponent<IRecentProps> = (props) => {
  const newData = data.slice(0, 6);
  return (
    <Section title={'Gần đây'}>
      <Stack direction="row" sx={{ overflow: 'hidden', margin: '0 -14px' }}>
        {newData.map((item, i) => {
          return (
            <Column key={item.id} numberColumn={6}>
              <Playlist />
            </Column>
          );
        })}
      </Stack>
    </Section>
  );
};

export default Recent;

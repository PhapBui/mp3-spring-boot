import * as React from 'react';
import Section from '@/components/section/Section';
import { Stack } from '@mui/material';
import Column from '@/components/section/column/Column';
import Playlist from '@/components/playlist/Playlist';
interface IPlaylistSectionProps {}
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
const PlaylistSection: React.FunctionComponent<IPlaylistSectionProps> = (props) => {
  const newData = data.slice(0, 5);
  return (
    <Section title={'Playlist'}>
      <Stack direction="row" sx={{ overflow: 'hidden', margin: '0 -14px' }}>
        {newData.map((item, i) => {
          return (
            <Column key={item.id} numberColumn={5}>
              <Playlist />
            </Column>
          );
        })}
      </Stack>
    </Section>
  );
};

export default React.memo(PlaylistSection);

import * as React from 'react';
import { MainContent } from './LibraryPageStyled';
import Playlist from '@/common/components/playlist/Playlist';
import PlaylistSection from './sections/Playlist';

interface ILibraryPageProps {}

const LibraryPage: React.FunctionComponent<ILibraryPageProps> = (props) => {
  return (
    <MainContent>
      <PlaylistSection />
    </MainContent>
  );
};

export default LibraryPage;

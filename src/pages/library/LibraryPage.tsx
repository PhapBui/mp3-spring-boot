import * as React from 'react';
import { MainContent } from './LibraryPageStyled';
import PlaylistSection from './sections/PlaylistSection';
import Favourite from './sections/favourite';

interface ILibraryPageProps {}

const LibraryPage: React.FunctionComponent<ILibraryPageProps> = (props) => {
  return (
    <MainContent>
      <PlaylistSection />
      <Favourite />
    </MainContent>
  );
};

export default LibraryPage;

import * as React from 'react';
import { MainContent } from '@/common/style/elementStyled';
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

export default React.memo(LibraryPage);

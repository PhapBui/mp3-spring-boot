import * as React from 'react';
import { MainContent } from '@/common/style/elementStyled';
interface INewMusicPageProps {}

const NewMusicPage: React.FunctionComponent<INewMusicPageProps> = (props) => {
  return <MainContent>New music</MainContent>;
};

export default React.memo(NewMusicPage);

import * as React from 'react';
import { ContentLeft, ContentRight, SectionHeaderInner } from './SectionHeaderStyled';

interface ISectionHeaderProps {}

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = (props) => {
  return (
    <SectionHeaderInner>
      <ContentLeft>Left</ContentLeft>
      <ContentRight>Right</ContentRight>
    </SectionHeaderInner>
  );
};

export default SectionHeader;

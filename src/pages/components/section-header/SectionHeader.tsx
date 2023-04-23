import { icons } from '@/assets';
import * as React from 'react';
import { ContentLeft, ContentRight, ReadmoreBtn, SectionHeaderInner } from './SectionHeaderStyled';

interface ISectionHeaderProps {
  data?: {
    title: string;
    readmore?: string;
  };
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
}

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = ({
  headerLeft,
  headerRight,
  data,
}: ISectionHeaderProps) => {
  return (
    <SectionHeaderInner>
      <ContentLeft>{headerLeft ? headerLeft : <h3>{data?.title}</h3>}</ContentLeft>
      <ContentRight>
        {headerRight ? (
          headerRight
        ) : data?.readmore ? (
          <ReadmoreBtn to={`/${data?.readmore}`}>
            <span>Tất cả</span>
            {icons.right}
          </ReadmoreBtn>
        ) : null}
      </ContentRight>
    </SectionHeaderInner>
  );
};

export default SectionHeader;

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Authors, Content, ItemWrapper, Thumbnail } from './ColumnStyled';
import ActionOverlay from '../../card/overlay/ActionOverlay';
import Card from '../../card';
import CardInfo from '../../card/card-info/CardInfo';

interface ISectionItemProps {
  numberColumn?: number;
  children?: React.ReactNode;
}

const SectionItem: React.FunctionComponent<ISectionItemProps> = ({
  numberColumn = 6,
  children,
}: ISectionItemProps) => {
  return (
    <ItemWrapper
      sx={{
        flexBasis: `${100 / numberColumn}%`,
        width: `${100 / numberColumn}%`,
        maxWidth: `${100 / numberColumn}%`,
      }}
    >
      {children}
    </ItemWrapper>
  );
};

export default SectionItem;

import * as React from 'react';
import { ItemWrapper } from './ColumnStyled';

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

export default React.memo(SectionItem);

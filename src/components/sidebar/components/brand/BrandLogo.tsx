import * as React from 'react';
import { BrandLogoInner, BrandLogoWrapper } from './BrandLogoStyled';

interface BrandLogoProps {}

const BrandLogo: React.FunctionComponent<BrandLogoProps> = (props) => {
  return (
    <BrandLogoWrapper>
      <BrandLogoInner></BrandLogoInner>
    </BrandLogoWrapper>
  );
};

export default React.memo(BrandLogo);

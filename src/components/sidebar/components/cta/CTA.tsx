import * as React from 'react';
import { CTAWrapper, LinkContent, TextContent } from './CTAStyled';

interface CTAProps {}

const CTA: React.FunctionComponent<CTAProps> = (props) => {
  return (
    <CTAWrapper>
      <TextContent>Nghe nhạc không quảng cáo cùng kho nhạc Vip</TextContent>
      <LinkContent
        href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=sidebar"
        target="_blank"
        rel="noopener noreferer"
      >
        Nâng cấp VIP
      </LinkContent>
    </CTAWrapper>
  );
};

export default React.memo(CTA);

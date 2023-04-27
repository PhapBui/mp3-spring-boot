import { icons } from '@/assets';
import * as React from 'react';
import { DownloadWrapper, LinkDownload } from './DownloadCvStyled';

interface IDownloadCvProps {}

const DownloadCv: React.FunctionComponent<IDownloadCvProps> = (props) => {
  return (
    <DownloadWrapper>
      <LinkDownload>
        {icons.desktopDownload}
        <span>Tải CV về máy</span>
      </LinkDownload>
    </DownloadWrapper>
  );
};

export default React.memo(DownloadCv);

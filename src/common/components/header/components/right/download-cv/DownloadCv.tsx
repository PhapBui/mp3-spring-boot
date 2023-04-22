import * as React from 'react';
import { DownloadWrapper, LinkDownload } from './DownloadCvStyled';
import { icons } from '@/assets';
import { Typography } from '@mui/material';

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

export default DownloadCv;

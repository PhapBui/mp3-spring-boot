import { Box } from '@mui/material';
import * as React from 'react';

interface IUIMenuProps {
  isShow: Boolean;
  top: number;
  left: number;
}

const UIMenu: React.FunctionComponent<IUIMenuProps> = ({ isShow, top, left }) => {
  return (
    <Box
      className={isShow ? 'active' : ''}
      sx={{
        backgroundColor: 'white',
        height: '300px',
        width: '200px',
        position: 'fixed',
        zIndex: 99999,
        visibility: 'hidden',
        opacity: 0,
        top: top,
        left: left,
        '&.active': {
          visibility: 'visible',
          opacity: 1,
        },
      }}
    >
      <h1>Menu</h1>
      <ul>
        <li>Chon1</li>
        <li>Chon1</li>
        <li>Chon1</li>
        <li>Chon1</li>
      </ul>
    </Box>
  );
};

export default UIMenu;

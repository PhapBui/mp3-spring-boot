import React, { memo } from 'react';

import './ControlButton.css';

const ControlButton = ({ handleOnClick, children, classes, title }: any) => {
  const handleClick = () => {
    if (handleOnClick) handleOnClick();
  };

  return (
    <button onClick={handleClick} className={`control-btn ${classes}`} title={title}>
      {children}
    </button>
  );
};

export default memo(ControlButton);

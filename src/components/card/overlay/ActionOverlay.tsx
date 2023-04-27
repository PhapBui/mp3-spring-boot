import * as React from 'react';
import { ActionOverlayWrapper, ActionOverlayInner, PlayGift } from './ActionOverlayStyled';
import { icons } from '@/assets';

interface IActionOverlayProps {}

const ActionOverlay: React.FunctionComponent<IActionOverlayProps> = (props) => {
  const [isPlay, setIsPlay] = React.useState<Boolean>(false);

  const togglePlay = () => {
    setIsPlay((prev) => !prev);
  };

  return (
    <ActionOverlayWrapper className="overlay">
      <ActionOverlayInner>
        <button title="Thêm vào thư viện">{icons.like}</button>
        <button title="Play" onClick={togglePlay}>
          {isPlay ? <PlayGift /> : icons.play}
        </button>
        <button title="Khác">{icons.moreH}</button>
      </ActionOverlayInner>
    </ActionOverlayWrapper>
  );
};

export default React.memo(ActionOverlay);

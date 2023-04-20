import React, { useEffect, useState } from 'react';
import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from 'react-icons/io';
import { RiPlayListFill } from 'react-icons/ri';
import ControlButton from '../common/ControlButton.jsx';

import './UiControl.css';

const UiControl = ({ audioRef }: any) => {
  const [volume, setVolume] = useState<number>(60);
  const [muteVolume, setMuteVolume] = useState(false);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  const handleBtnOnClick = () => {
    setMuteVolume((prev) => !prev);
  };

  return (
    <div className="ui-control-container">
      <div className="volume">
        <ControlButton handleOnClick={handleBtnOnClick}>
          {muteVolume || volume < 5 ? (
            <IoMdVolumeOff />
          ) : volume < 40 ? (
            <IoMdVolumeLow />
          ) : (
            <IoMdVolumeHigh />
          )}
        </ControlButton>
        <input
          className="volume-range"
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(+e.target.value)}
          style={{
            background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
          }}
        />
      </div>
      <div className="ui-divider"></div>
      <div className="playlist">
        <ControlButton>
          <RiPlayListFill />
        </ControlButton>
      </div>
    </div>
  );
};

export default UiControl;

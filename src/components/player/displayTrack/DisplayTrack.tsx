import { memo, useState } from 'react';
import ControlButton from '../common/ControlButton.js';
import './DisplayTrack.css';
import { icons } from '@/assets';

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, handleNext }: any) => {
  const [isLiked, setIsLiked] = useState(false);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const handleLikeSong = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="track-info">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info">
        <div className="cover">
          <div
            style={{
              background: `url(${
                currentTrack.cover ? currentTrack.cover : ''
              }) center center no-repeat`,
              padding: '50%',
            }}
          ></div>
        </div>

        <div className="text">
          <p className="title">{currentTrack.name}</p>
          <p className="author"> {currentTrack.author}</p>
        </div>

        <div className="user-reaction">
          <div className="like">
            <ControlButton handleOnClick={handleLikeSong}>
              {isLiked ? icons.liked : icons.like}
            </ControlButton>
          </div>
          <div className="more-action">
            <ControlButton>{icons.moreV}</ControlButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(DisplayTrack);

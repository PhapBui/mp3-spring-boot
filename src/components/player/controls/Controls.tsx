import { memo, useCallback, useEffect, useRef, useState } from 'react';

import ControlButton from '../common/ControlButton.js';

import { icons } from '@/assets/index.js';
import ProgressBar from '../common/ProgressBar';
import './Controls.css';

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  timeProgress,
  setTimeProgress,
  handleNext,
  handlePrevious,
  repeatPlay,
  random,
  handleRepeat,
  handleRandom,
}: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef<any>();

  const repeat = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePreviousSong = () => {
    handlePrevious();
    setIsPlaying(true);
  };

  const handleNextSong = () => {
    handleNext();
    setIsPlaying(true);
  };

  const handleRandomBtn = () => {
    handleRandom();
  };

  const handleRepeatBtn = () => {
    handleRepeat();
  };

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <ControlButton
          handleOnClick={handleRandomBtn}
          classes={random ? 'random active' : 'random'}
        >
          {icons.random}
        </ControlButton>

        <ControlButton handleOnClick={handlePreviousSong} classes={'previous'}>
          {icons.previous}
        </ControlButton>

        <ControlButton handleOnClick={skipBackward} classes={'backward'}>
          {icons.skipBackward}
        </ControlButton>

        <ControlButton handleOnClick={togglePlayPause} classes={'toggle-play'}>
          {isPlaying ? icons.pause : icons.play}
        </ControlButton>

        <ControlButton handleOnClick={skipForward} classes={'forward'}>
          {icons.skipForward}
        </ControlButton>

        <ControlButton handleOnClick={handleNextSong} classes={'next'}>
          {icons.next}
        </ControlButton>

        <ControlButton
          handleOnClick={handleRepeatBtn}
          classes={repeatPlay ? 'repeat active' : 'repeat'}
        >
          {icons.repeat}
        </ControlButton>
      </div>
      <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
    </div>
  );
};

export default memo(Controls);

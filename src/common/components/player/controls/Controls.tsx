import { useState, useEffect, useRef, useCallback, memo } from 'react';

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from 'react-icons/io5';
import { FaRandom } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs';

import ControlButton from '../common/ControlButton.js';

import './Controls.css';
import ProgressBar from '../common/ProgressBar';

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
          <FaRandom />
        </ControlButton>

        <ControlButton handleOnClick={handlePreviousSong} classes={'previous'}>
          <IoPlaySkipBackSharp />
        </ControlButton>

        <ControlButton handleOnClick={skipBackward} classes={'backward'}>
          <IoPlayBackSharp />
        </ControlButton>

        <ControlButton handleOnClick={togglePlayPause} classes={'toggle-play'}>
          {isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
        </ControlButton>

        <ControlButton handleOnClick={skipForward} classes={'forward'}>
          <IoPlayForwardSharp />
        </ControlButton>

        <ControlButton handleOnClick={handleNextSong} classes={'next'}>
          <IoPlaySkipForwardSharp />
        </ControlButton>

        <ControlButton
          handleOnClick={handleRepeatBtn}
          classes={repeatPlay ? 'repeat active' : 'repeat'}
        >
          <FiRepeat />
        </ControlButton>
      </div>
      <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
    </div>
  );
};

export default memo(Controls);

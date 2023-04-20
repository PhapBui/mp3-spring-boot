import { memo, useRef, useState } from 'react';

// import components

import './AudioPlayer.css';
import { mp3List } from '@/db/store';
import Controls from './controls/Controls';
import DisplayTrack from './displayTrack/DisplayTrack';
import UiControl from './UiControl/UiControl';

const AudioPlayer = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(mp3List[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [repeatPlay, setRepeatPlay] = useState(false);
  const [random, setRandom] = useState(false);
  // reference
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef();

  //handle Control buttons
  const handleNext = async () => {
    if (repeatPlay) {
      setTrackIndex((prev) => prev);
      setCurrentTrack(mp3List[trackIndex]);
      await audioRef?.current?.play();
      return;
    }
    if (random) {
      let a;
      do {
        a = Math.floor(Math.random() * mp3List.length);
      } while (a === trackIndex);
      setTrackIndex(a);
      setCurrentTrack(mp3List[a]);
      return;
    }

    if (trackIndex >= mp3List.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(mp3List[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(mp3List[trackIndex + 1]);
    }
  };

  const handlePrevious = async () => {
    if (repeatPlay) {
      setTrackIndex((prev) => prev);
      setCurrentTrack(mp3List[trackIndex]);
      await audioRef?.current?.play();
      return;
    }

    if (random) {
      let a;
      do {
        a = Math.floor(Math.random() * mp3List.length);
      } while (a === trackIndex);
      setTrackIndex(a);
      setCurrentTrack(mp3List[a]);
      return;
    }

    if (trackIndex === 0) {
      let lastTrackIndex = mp3List.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(mp3List[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(mp3List[trackIndex - 1]);
    }
  };

  const handleRandom = () => {
    setRandom((prev) => !prev);
    setRepeatPlay((prev) => (prev ? false : prev));
  };

  const handleRepeat = () => {
    setRepeatPlay((prev) => !prev);
    setRandom((prev) => (prev ? false : prev));
  };

  return (
    <>
      <div className="audio-player">
        <div className="inner">
          <div className="left">
            <DisplayTrack
              {...{
                currentTrack,
                audioRef,
                setDuration,
                progressBarRef,
                handleNext,
              }}
            />
          </div>
          <div className="center">
            <Controls
              {...{
                audioRef,
                progressBarRef,
                duration,
                timeProgress,
                setTimeProgress,
                mp3List,
                trackIndex,
                setTrackIndex,
                setCurrentTrack,
                handleNext,
                handlePrevious,

                repeatPlay,
                random,
                handleRepeat,
                handleRandom,
              }}
            />
          </div>
          <div className="right">
            <UiControl {...{ audioRef }} />
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(AudioPlayer);

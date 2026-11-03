'use client';

import { useEffect, useRef, useState } from 'react';
import { PauseIcon, PlayIcon } from './icons';
import styles from './SpotlightPlayer.module.css';

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// Custom <audio> player for the Home spotlight.
export default function SpotlightPlayer({ title, src, duration: initialDuration = 0 }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(initialDuration);
  const [unavailable, setUnavailable] = useState(!src);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setCurrent(0);
    };
    const onError = () => setUnavailable(true);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);
    // The error may have fired before hydration attached the listener.
    if (audio.error) setUnavailable(true);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || unavailable) return;
    if (audio.paused) audio.play().catch(() => setUnavailable(true));
    else audio.pause();
  };

  const progress = duration ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <div className={styles.player}>
      {src && <audio ref={audioRef} src={src} preload="metadata" />}
      <button
        type="button"
        className={styles.play}
        onClick={toggle}
        disabled={unavailable}
        aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        title={unavailable ? 'Preview unavailable' : undefined}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div className={styles.meta}>
        <div className={styles.labels}>
          <span>Play {title}</span>
          <span className={styles.time}>
            {formatTime(current)} / {formatTime(duration)}
          </span>
        </div>
        <div
          className={styles.track}
          role="progressbar"
          aria-label="Playback progress"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(current)}
        >
          <div className={styles.fill} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

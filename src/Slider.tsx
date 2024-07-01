import { useEffect, useRef } from 'react';
import { baseColors } from '../tailwind.config';

export const Slider = ({
  className,
  setPasswordLength,
}: {
  className?: string;
  setPasswordLength: (value: number) => void;
}) => {
  const min = 0;
  const max = 20;

  const getInputProgress = (min: number, max: number, value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const playersSliderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!playersSliderRef?.current) {
      return;
    }

    const progress = getInputProgress(
      min,
      max,
      parseInt(playersSliderRef.current.value)
    );

    playersSliderRef.current.style.background = `linear-gradient(to right, ${baseColors.password_strength.strong} ${progress}%, ${baseColors.background.primary} ${progress}%)`;
  });

  return (
    <input
      ref={playersSliderRef}
      className={`w-full ${className}`}
      type="range"
      min={min}
      max={max}
      defaultValue={10}
      onChange={(e) => {
        const progress = getInputProgress(min, max, parseInt(e.target.value));

        setPasswordLength(parseInt(e.target.value));

        e.target.style.background = `linear-gradient(to right, ${baseColors.password_strength.strong} ${progress}%, ${baseColors.background.primary} ${progress}%)`;
      }}
    />
  );
};

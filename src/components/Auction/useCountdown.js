import { useEffect, useState } from 'react';

export const useCountDown = ms => {
  const [timeLeft, setTimeLeft] = useState(ms);
  const [completed, setCompleted] = useState(false);

  const countdownInterval = 1000; // every second

  useEffect(
    () => {
      let intervalId;

      if (timeLeft <= 0) {
        setCompleted(true);
        return;
      }

      intervalId = setInterval(() => {
        setTimeLeft(timeLeft - countdownInterval);

        if (timeLeft <= 0) {
          setCompleted(true);
          clearInterval(intervalId);
        }
      }, countdownInterval);

      return () => clearInterval(intervalId);
    },
    [timeLeft],
  );

  return { completed, timeLeft };
};

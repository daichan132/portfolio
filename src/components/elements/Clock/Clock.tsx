import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

export const Clock = () => {
  const [date, setDate] = useState(
    new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000)
  );

  function refreshClock() {
    setDate(new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000));
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span
      suppressHydrationWarning
      css={css`
        font-variant-numeric: proportional-nums;
      `}
    >
      Japan {date.toLocaleString()}
    </span>
  );
};

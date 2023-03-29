import { css } from '@emotion/react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import { useEffect, useRef, useState, type FC } from 'react';

const style = (color: string) => css`
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  color: ${color};
  .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  span {
    display: block;
    margin-right: 0.2rem;
  }
`;
export type MarqueeProps = {
  text: string;
  baseVelocity?: number;
  reverse?: number;
  color?: string;
};

export const Marquee: FC<MarqueeProps> = ({
  text,
  baseVelocity = 30,
  reverse = 1,
  color = '#333333',
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repeatCount, setRepeatCount] = useState(1);
  const [wrapperWidth, setWrapperWidth] = useState(1);
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const updateRepeatCountAndWrapperWidth = () => {
      if (textRef.current) {
        const textWidth = textRef.current.offsetWidth;
        const viewportWidth = window.innerWidth;
        const newRepeatCount = Math.ceil(viewportWidth / textWidth) + 2;
        setRepeatCount(newRepeatCount);
        setWrapperWidth((textWidth * newRepeatCount * 100) / viewportWidth);
      }
    };

    updateRepeatCountAndWrapperWidth();
    window.addEventListener('resize', updateRepeatCountAndWrapperWidth);

    return () => {
      window.removeEventListener('resize', updateRepeatCountAndWrapperWidth);
    };
  }, [text]);

  const x = useTransform(
    baseX,
    (v) => `${wrap(-10, -10 + 100 / repeatCount, (v / (wrapperWidth / 100)) * reverse)}%`
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div css={style(color)}>
      <motion.div className="scroller" style={{ x }}>
        {Array.from({ length: repeatCount }, (_, i) => (
          <span key={i.toString() + text} ref={i === 0 ? textRef : null}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

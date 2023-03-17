import { cursorAtom } from '@/stores/cursorAtom';
import { YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import React from 'react';

const buttonStyle = css`
  display: inline-block;
  border: 1px solid;
  position: relative;
  background: #fff;
  font-weight: bold;
  color: black;
  border: 3px solid ${YellowColor};
  padding: 1rem 5rem 1rem 2rem;
  text-decoration: none;
  border-radius: 20px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    transition: all 0.3s;
    right: 1.5rem;
    top: 50%;
  }
  &:before {
    width: 2rem;
    height: 2px;
    background: black;
    transform: translateY(-50%);
  }
  &:after {
    opacity: 0;
    width: 0;
    height: 0;
    border-top: solid 2px black;
    border-right: solid 2px black;
    transform: translateY(-50%) rotate(45deg);
  }

  &:hover {
    &:before {
      width: 1.5rem;
    }
    &:after {
      opacity: 1;
      width: 8px;
      height: 8px;
    }
  }
`;
export const WorkButton = () => {
  const [, setCursorData] = useAtom(cursorAtom);

  return (
    <Link
      href="/works"
      className="btn"
      onMouseEnter={() => {
        setCursorData({ cursorVariant: 'hover' });
      }}
      onMouseLeave={() => {
        setCursorData({ cursorVariant: 'default' });
      }}
      css={buttonStyle}
    >
      作品を見に行く
    </Link>
  );
};

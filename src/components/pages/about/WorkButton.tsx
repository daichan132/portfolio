import { cursorAtom } from '@/stores/cursorAtom';
import { css } from '@emotion/react';
import { Center } from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';

const style = css`
  position: relative;
  .center {
    height: 100%;
    width: 100%;
  }
  .btn {
    display: inline-block;
    position: relative;
    color: black;
    padding: 1rem 5rem 1rem 2rem;
    text-decoration: none;
    border: 1px solid;
    z-index: 1;
    background-color: white;
    border-radius: 5px;
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
      height: 1px;
      background: black;
      transform: translateY(-50%);
    }
    &:after {
      opacity: 0;
      width: 0;
      height: 0;
      border-top: solid 1px black;
      border-right: solid 1px black;
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
  }
`;
export const WorkButton = () => {
  const [, setCursorData] = useAtom(cursorAtom);
  return (
    <div css={style}>
      <Center className="center">
        <Link
          href="/works"
          className="btn"
          onMouseEnter={() => {
            setCursorData({ cursorVariant: 'hover' });
          }}
          onMouseLeave={() => {
            setCursorData({ cursorVariant: 'default' });
          }}
        >
          作品を見に行く
        </Link>
      </Center>
    </div>
  );
};

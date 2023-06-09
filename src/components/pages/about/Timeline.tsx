import { ExternalLinkCursor } from '@/components/elements';
import { BlueColor, RedColor, YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Mark, rem, Stack, Text } from '@mantine/core';
import React, { Fragment, useRef } from 'react';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

const timelineItemData: TimelineItemProps[] = [
  {
    title: '東北大学 大学院情報科学研究科',
    period: '2023-Present',
    link: 'https://www.is.tohoku.ac.jp/',
    color: YellowColor,
    children: (
      <Text>
        周・鈴木研究室に所属して<Mark>アルゴリズム</Mark>
        の研究をしています。アルゴリズムは問題を解決する手順や方法を与えるもので、ソートや探索などの基本的な処理から機械学習や人工知能などの高度な処理まで、あらゆる分野で利用されています。私は特に
        <Mark>グラフ理論</Mark>と呼ばれる分野について研究しています。
      </Text>
    ),
  },
  {
    title: 'Langsmith株式会社',
    period: '2021-Present',
    color: RedColor,
    link: 'https://corp.langsmith.co.jp/',
    children: (
      <Text>
        Pythonを用いたバックエンドの開発から、Reactを用いたフロントエンドの開発まで行っています。
      </Text>
    ),
  },
  {
    title: '東北大学 工学部',
    period: '2019-2023',
    color: BlueColor,
    link: 'https://www.eng.tohoku.ac.jp/',
    children: (
      <Text>
        大学在学中に<Mark>競技プログラミング</Mark>
        にハマり、そこからプログラミングを学習するようになりました (
        <ExternalLinkCursor href="https://atcoder.jp/users/daichan132">
          Atcoderのアカウント
        </ExternalLinkCursor>
        ) 。 その後プログラミングで何か形に残るようなものを作成することが好きになり、
        <Mark>Python</Mark>や<Mark>React</Mark>
        を用いた開発も行うようになりました。
      </Text>
    ),
  },
];

export const Timeline = () => {
  const ref = useRef(null);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Stack spacing={rem(0)} ref={ref}>
        {timelineItemData.map((props: TimelineItemProps) => (
          <Fragment key={props.title}>
            <TimelineItem {...props} />
          </Fragment>
        ))}
      </Stack>
    </div>
  );
};

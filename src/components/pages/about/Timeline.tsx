import { ExternalLinkCursor } from '@/components/elements';
import { BlueColor, RedColor, YellowColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { Mark, rem, Stack, Text } from '@mantine/core';
import React, { Fragment, useRef } from 'react';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

const timelineItemData: TimelineItemProps[] = [
  {
    title: '東北大学 大学院情報科学研究科',
    period: '04/2023-Present',
    link: 'https://www.is.tohoku.ac.jp/',
    color: BlueColor,
    children: (
      <Text>
        周・鈴木研究室に所属しており、特に<Mark>グラフ理論</Mark>
        と呼ばれる分野について研究しています。
      </Text>
    ),
  },
  {
    title: 'Langsmith株式会社',
    period: '08/2021-Present',
    color: YellowColor,
    link: 'https://corp.langsmith.co.jp/',
    children: (
      <Text>
        Langsmith株式会社は自然言語処理を用いたプロダクトを開発しています。私はPythonを用いたバックエンドの開発から、Reactを用いたフロントエンドの開発まで行っています。
      </Text>
    ),
  },
  {
    title: 'リクルートプログラミングコンテスト: PIGICON 2023',
    period: '21~22/10/2023',
    link: 'https://www.recruit.co.jp/employment/students/engineers/event/contest2023/',
    color: BlueColor,
    children: (
      <Text>Web開発×機械学習がテーマのプログラミングコンテストに参加し、3位に入賞しました。</Text>
    ),
  },
  {
    title: '楽天グループ株式会社の長期インターン',
    period: '01/08/2023 ~ 22/09/2023',
    color: RedColor,
    children: (
      <Text>
        楽天グループ株式会社で約2ヶ月間の間、長期インターンとしてLLMを用いたプロダクト開発のプロジェクトに参加させていただきました。
      </Text>
    ),
  },
  {
    title: '東北大学 工学部 電気情報物理工学科',
    period: '04/2019-03/2023',
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
      <Stack spacing={rem(30)} ref={ref}>
        {timelineItemData.map((props: TimelineItemProps) => (
          <Fragment key={props.title}>
            <TimelineItem {...props} />
          </Fragment>
        ))}
      </Stack>
    </div>
  );
};

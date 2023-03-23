import { BlueColor } from '@/utils/Colors';
import { css } from '@emotion/react';
import { rem, SimpleGrid } from '@mantine/core';

const style = () => css`
  .timeline-001__section {
    position: relative;
    padding: 0 1.5rem 1.5rem 3rem;
    &:not(:last-child)::before,
    &::after {
      position: absolute;
      content: '';
    }
    &:not(:last-child)::before {
      bottom: 0;
      left: 15px;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
      background-color: ${BlueColor};
    }
    &::after {
      top: 0;
      left: 0px;
      width: 30px;
      height: 30px;
      border: 4px solid #fff;
      border-radius: 50%;
      background-color: ${BlueColor};
    }
  }

  .timeline-001__content {
    border-bottom: dashed 2px #333333;
    padding-bottom: 0.7rem;
  }

  .timeline-001__label {
    margin-bottom: 0.1rem;
    font-size: ${rem(18)};
    color: #333333;
  }

  .timeline-001__title {
    color: #333333;
    font-size: ${rem(20)};
    font-weight: 600;
    margin: 0 auto 0.5rem;
  }
`;
export const Profile = () => {
  return (
    <SimpleGrid
      breakpoints={[
        { minWidth: 'sm', cols: 1 },
        { minWidth: 'md', cols: 2 },
      ]}
    >
      <div css={style}>
        <div className="timeline-001">
          <section className="timeline-001__section">
            <div className="timeline-001__label">2023-presense</div>
            <p className="timeline-001__title">東北大学 大学院 システム情報科学研究科</p>
            <div className="timeline-001__content">
              <p>グラフ問題に対するアルゴリズムの研究をしています。</p>
            </div>
          </section>
          <section className="timeline-001__section">
            <div className="timeline-001__label">2019-2023</div>
            <p className="timeline-001__title">東北大学 工学部 電気情報物理工学科</p>
          </section>
        </div>
      </div>
    </SimpleGrid>
  );
};

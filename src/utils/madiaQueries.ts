// こちらの記事を参考にさせていただきました。https://hirakublog.com/emotion-mediaqueries-function/
/**
 *
 * メディアクエリを返す関数集です
 *
 */

/* ブレイクポイントの変数や型などを設定
 * ========================================================================== */

/**
 *
 * ブレイクポイントはtailwind cssを参考にしている
 * @see {@link https://tailwindcss.com/docs/screens | tailwindcss}
 *
 */
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

type Breakpoints = typeof breakpoints; // breakpoints変数から型を作成
type Breakpointkeys = keyof Breakpoints; // オブジェクト型のkeyからユニオン型を作成("sm" | "md" | "lg" | "xl")

type ArgumentBreakpoint = Breakpointkeys | number; // 引数の型

/**
 *
 * ユーザ定義型ガード
 * "sm" | "md" | "lg" | "xl"のようなユニオン型かを判定する
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isBreakpointkeys = (value: any): value is Breakpointkeys => {
  return value in breakpoints; // breakpointsに対象のプロパティがあるかチェック
};

/* これ以降は実際にimportして使用する関数
 * ========================================================================== */

/**
 *
 * min-widthのメディアクエリ
 * ブラウザのサイズが横幅>=breakpointの場合
 *
 */
export const minScreen = (breakpoint: ArgumentBreakpoint) => {
  const mediaQuery = isBreakpointkeys(breakpoint)
    ? `@media (min-width: ${breakpoints[breakpoint]})`
    : `@media (min-width: ${breakpoint}px)`;
  return mediaQuery;
};

/**
 *
 * min-widthにnot演算子を使用したメディアクエリ
 * ブラウザのサイズが横幅<breakpointの場合
 * max-widthと同じような効果になります
 *
 * モバイルファーストで指定している場合はmax-widthではなmin-widthにnot演算子を組み合わせた方が良い
 *
 */
export const notMinScreen = (breakpoint: ArgumentBreakpoint) => {
  const mediaQuery = isBreakpointkeys(breakpoint)
    ? `@media not all and (min-width: ${breakpoints[breakpoint]})`
    : `@media not all and (min-width: ${breakpoint}px)`;
  return mediaQuery;
};

/**
 *
 * min-heightのメディアクエリ
 * ブラウザのサイズが縦幅>=breakpointの場合
 *
 */
export const minScreenHeight = (breakpoint: ArgumentBreakpoint) => {
  const mediaQuery = isBreakpointkeys(breakpoint)
    ? `@media (min-height: ${breakpoints[breakpoint]})`
    : `@media (min-height: ${breakpoint}px)`;
  return mediaQuery;
};

/**
 *
 * max-widthのメディアクエリ
 * ブラウザのサイズが横幅<=breakpointの場合
 *
 */
export const maxScreen = (breakpoint: ArgumentBreakpoint) => {
  const mediaQuery = isBreakpointkeys(breakpoint)
    ? `@media (max-width: ${breakpoints[breakpoint]})`
    : `@media (max-width: ${breakpoint}px)`;
  return mediaQuery;
};

/**
 *
 * max-widthにnot演算子を使用したメディアクエリ
 * ブラウザのサイズが横幅>breakpointの場合
 *
 */
export const notMaxScreen = (breakpoint: ArgumentBreakpoint) => {
  const mediaQuery = isBreakpointkeys(breakpoint)
    ? `@media not all and (max-width: ${breakpoints[breakpoint]})`
    : `@media not all and (max-width: ${breakpoint}px)`;
  return mediaQuery;
};

/**
 *
 * max-heightのメディアクエリ
 * ブラウザのサイズが縦幅<=breakpointの場合
 *
 */
export const maxScreenHeight = (breakpoint: ArgumentBreakpoint) => {
  const mediaQuery = isBreakpointkeys(breakpoint)
    ? `@media (max-height: ${breakpoints[breakpoint]})`
    : `@media (max-height: ${breakpoint}px)`;
  return mediaQuery;
};

/**
 *
 * orientation landscape
 * ブラウザのサイズが横幅>=縦幅の場合
 * つまりスマホなどの横向きの状態
 *
 */
export const landscape = () => {
  const mediaQuery = `@media screen and (orientation: landscape)`;
  return mediaQuery;
};

/**
 *
 * orientation portrait
 * ブラウザのサイズが縦幅>横幅の場合
 *
 */
export const portrait = () => {
  const mediaQuery = `@media screen and (orientation: portrait)`;
  return mediaQuery;
};

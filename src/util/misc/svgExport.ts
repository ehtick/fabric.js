import type { TMat2D } from '../../typedefs';
import { toFixed } from './toFixed';
import { config } from '../../config';

const unsafeSvgStyleValueRegex = new RegExp(
  String.raw`[\0-\x1F\x7F;<>\\]|\/\*|\*\/|url\s*\(|expression\s*\(|(?:java|vb)script\s*:|data\s*:|@import\b`,
  'iu',
);

/**
 * given an array of 6 number returns something like `"matrix(...numbers)"`
 * @param {TMat2D} transform an array with 6 numbers
 * @return {String} transform matrix for svg
 */
export const matrixToSVG = (transform: TMat2D) =>
  'matrix(' +
  transform
    .map((value) => toFixed(value, config.NUM_FRACTION_DIGITS))
    .join(' ') +
  ')';

export const isSafeSvgStyleValue = (value: unknown): value is string =>
  typeof value === 'string' &&
  value.trim().length > 0 &&
  !unsafeSvgStyleValueRegex.test(value);

export const getSafeSvgStyleNumber = (
  value: unknown,
  fallback = '',
): string => {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? `${numeric}` : fallback;
};

export const getSafeSvgStyleToken = (value: unknown, fallback = ''): string =>
  typeof value === 'string' && isSafeSvgStyleValue(value) ? value : fallback;

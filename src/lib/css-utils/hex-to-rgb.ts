/**
 * Hex to RGB.
 *
 * @param {string} s - String.
 * @returns {string} RGB.
 */
export function hexToRgb(s: string): string {
  if (s.length === 4) {
    return s.replace(/^#([a-f0-9]{1})([a-f0-9]{1})([a-f0-9]{1})$/,
      (_, a, b, c) => `${parseInt(`${a}${a}`, 16)}, ${parseInt(`${b}${b}`, 16)}, ${parseInt(`${c}${c}`, 16)}`)
  }
  if (s.length === 7) {
    return s.replace(/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/,
      (_, a, b, c) => `${parseInt(a, 16)}, ${parseInt(b, 16)}, ${parseInt(c, 16)}`)
  }
  return s
}

import { hexToRgb } from './hex-to-rgb'

test('length 7', () => {
  expect(hexToRgb('#6610f2')).toBe('102, 16, 242')
  expect(hexToRgb('#ffffff')).toBe('255, 255, 255')
  expect(hexToRgb('#000000')).toBe('0, 0, 0')
})

test('length 4', () => {
  expect(hexToRgb('#fff')).toBe('255, 255, 255')
  expect(hexToRgb('#000')).toBe('0, 0, 0')
})

// test('length 7', () => {
//   expect(hexToRgb('#6610f2')).toBe('102, 16, 242')
//   expect(hexToRgb('#ffffff')).toBe('255, 255, 255')
//   expect(hexToRgb('#000000')).toBe('0, 0, 0')
// })

type Coordinate = string | number
type Coordinates = {
  readonly x?: Coordinate
  readonly y?: Coordinate
  readonly z?: Coordinate
}

export default {
  dark: '#2b2d42',
  grey: '#8d99ae',
  light: '#edf2f4',
  white: '#fff',
  black: '#000',
  blue: '#007bff',
  green: '#28a745',
  red: '#c82333',
  yellow: '#ffc107',
  cyan: '#17a2b8',
  orange: '#fd7e14',
  teal: '#20c997',
  pink: '#e83e8c',
  purple: '#6f42c1',
  indigo: '#6610f2',
  lightShadow: (c: Coordinates): string => `${c.x || 0} ${c.y || 0} 2px 0 rgba(0, 0, 0, .10)`,
  darkShadow: (c: Coordinates): string => `${c.x || 0} ${c.y || 0} 2px 0 rgba(255, 255, 255, .10)`,
  tintLight: '#ef233c',
  tintDark: '#d80032'
}

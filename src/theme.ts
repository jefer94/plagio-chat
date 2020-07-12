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
  lightShadow: (c: Coordinates): string => `${c.x || 0} ${c.y || 0} 2px 0 rgba(0, 0, 0, .10)`,
  darkShadow: (c: Coordinates): string => `${c.x || 0} ${c.y || 0} 2px 0 rgba(255, 255, 255, .10)`,
  tintLight: '#ef233c',
  tintDark: '#d80032'
}

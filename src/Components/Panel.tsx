import styled from 'styled-components'
import { color, space } from 'styled-system'

export default styled.div`
  height: 100vh;
  overflow: hidden;
  display: inline-block;
  width: ${({ w }) => w || '100vw'};
  height: ${({ h }) => h || '100vh'};
  ${color}
  ${space}
`

import styled from 'styled-components'
import { color, space, border } from 'styled-system'

export default styled.div`
  width: ${({ w }) => w || 'inherit'};
  height: ${({ h }) => h || '30px'};
  padding: 10px;
  border-left: 2px solid;
  ${border}
  ${color}
  ${space}
`

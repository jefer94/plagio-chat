import styled from 'styled-components'
import { color, space, border } from 'styled-system'

export default styled.div`
  width: ${({ w }) => w || 'inherit'};
  height: ${({ h }) => h || '30px'};
  padding: 10px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  margin-top: -1px;
  ${border}
  ${color}
  ${space}
`

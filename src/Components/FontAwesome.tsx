import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color, space, shadow, layout, typography } from 'styled-system'

export default styled(FontAwesomeIcon)`
  ${typography}
  ${layout}
  ${shadow}
  ${color}
  ${space}
`

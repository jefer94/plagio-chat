import styled from 'styled-components'
import { color, space, layout } from 'styled-system'
// import { ReactElement } from 'react'

// type InputProps = {
//   readonly className: string
// }

// function Input({ className }: InputProps): ReactElement {
//   return (
//     <input className={className} />
//   )
// }

// export default styled(Input)`
export default styled.input`
  outline: 0;
  margin: 0;
  padding: 0;
  border: 0;
  ${layout}
  ${color}
  ${space}
`

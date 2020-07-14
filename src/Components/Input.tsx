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
  width: calc(100vw - 72px);
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  ${layout}
  ${color}
  ${space}
`

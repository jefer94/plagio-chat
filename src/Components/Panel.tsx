import styled from 'styled-components'
import { color, space, shadow, layout } from 'styled-system'
import { ReactElement } from 'react'

const Base = styled.div`
  height: 100vh;
  overflow: hidden;
  display: inline-block;
  ${layout}
  ${shadow}
  ${color}
  ${space}
`

export default function Panel(props: Record<string, unknown>): ReactElement {
  const { width, w, height, h, ...rest } = props
  const w2 = w || width || '100vw'
  const h2 = h || height || '100vh'
  return <Base {...rest} width={w2} height={h2} />
}

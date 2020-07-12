import { ReactElement } from 'react'
import Panel from '../Components/Panel'
import theme from '../theme'
import Brand from '../Components/Brand'

export default function BrandBar(): ReactElement {
  return (
    <Panel h="50px" boxShadow={theme.lightShadow({ y: '1px' })}>
      <div>
        <Brand fontSize={30}>Plagio Chat</Brand>
      </div>
    </Panel>
  )
}

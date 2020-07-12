import { ReactElement } from 'react'
import Panel from '../Components/Panel'
import theme from '../theme'
import Input from '../Components/Input'
import VerticalFlex from '../Components/VerticalFlex'
import Chat from './Chat'
import Nav from './Nav'

export default function Peoples(): ReactElement {
  return (
    <Panel>
      <VerticalFlex>
        <Nav />
        <Chat />

        <Panel h="50px" boxShadow={theme.lightShadow({ y: '-1px' })}>
          asd
          <Input bg={theme.white} color={theme.dark} />
        </Panel>
      </VerticalFlex>
    </Panel>
  )
}

import { ReactElement } from 'react'
import FontAwesome from '../Components/FontAwesome'
import { faSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
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
          <Input bg={theme.white} color={theme.dark} h={50} w="calc(100vw - 72px)" />
          <FontAwesome px={10} icon={faSmile} />
          <FontAwesome px={10} icon={faPaperPlane} />
        </Panel>
      </VerticalFlex>
    </Panel>
  )
}

import Head from 'next/head'
import { ReactElement } from 'react'
import Panel from '../Components/Panel'
import HorizontalFlex from '../Components/HorizontalFlex'
import VerticalFlex from '../Components/VerticalFlex'
import theme from '../theme'
import MenuItem from '../Components/MenuItem'
import ChatItem from '../Components/ChatItem'
import Input from '../Components/Input'

/**
 * Index page.
 *
 * @returns {object} Index page.
 */
export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <HorizontalFlex width="100vw" height="100vh">
        <Panel color={theme.light} bg={theme.dark} w="600px">
          Hola
          <MenuItem bg={theme.light} color={theme.dark} borderColor={theme.tintLight}>asdasd</MenuItem>
          <MenuItem borderColor={theme.tintLight}>asdasd</MenuItem>
        </Panel>

        <Panel>
          <VerticalFlex>
            <Panel h="50px">
              top
            </Panel>

            <Panel h="calc(100vh - 100px)">
              Medio
              <ChatItem bg={theme.light} color={theme.dark} borderColor={theme.dark}>yyyy</ChatItem>
              <ChatItem borderColor={theme.dark}>yyyy</ChatItem>
            </Panel>

            <Panel h="50px">
              asd
              <Input bg={theme.light} color={theme.dark} />
            </Panel>
          </VerticalFlex>
        </Panel>

        {/* <Panel color={theme.light} bg={theme.grey} w="600px">Chao</Panel> */}
      </HorizontalFlex>
    </>
  )
}

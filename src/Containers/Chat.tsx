import { ReactElement } from 'react'
import Panel from '../Components/Panel'
import theme from '../theme'
import ChatItem from '../Components/ChatItem'
import HorizontalFlex from '../Components/HorizontalFlex'
import Div from '../Components/Div'
import Title from '../Components/Title'
import Contacts from './Contacts'

type Message = {
  readonly username: string
  readonly message: string
}

export default function Peoples(): ReactElement {
  const whoami = 'jefer94'
  const messages: readonly Message[] = [{
    username: 'cat',
    message: 'Hey baby'
  }, {
    username: 'cat',
    message: 'what\'s up'
  }, {
    username: 'jefer94',
    message: 'Hey cat'
  }, {
    username: 'jefer94',
    message: 'Hey dog'
  }, {
    username: 'dog',
    message: 'I\'m hate cat'
  }]

  /**
   * Is me.
   *
   * @param {string} username - Username.
   * @returns {string} Is me.
   */
  function isMe(username: string): boolean {
    return username === whoami
  }

  return (
    <Panel h="calc(100vh - 100px)">
      <HorizontalFlex>
        <Panel h="calc(100vh - 100px)" w="calc(100vw - 250px)" boxShadow={theme.lightShadow({ y: '-2px' })}>
          {messages.map(({ username, message }, key) => (
            <Div
              w="calc(100vw - 250px)"
              display="block"
              textAlign={isMe(username) ? 'right' : 'left'}
              key={key}
            >
              {!isMe(username) && (key === 0 || username !== messages[key - 1].username) ?
                <Title mx={22} my={2} fontSize={12}>{username}</Title> :
                <></>}
              <ChatItem
                display="inline-block"
                bg={isMe(username) ? theme.light : theme.dark}
                color={isMe(username) ? theme.dark : theme.light}
              >
                <span>{message}</span>
              </ChatItem>
            </Div>
          ))}
        </Panel>

        <Contacts />
      </HorizontalFlex>

      <ChatItem bg={theme.dark} color={theme.white}>
        <span>yyyy</span>
      </ChatItem>
    </Panel>
  )
}

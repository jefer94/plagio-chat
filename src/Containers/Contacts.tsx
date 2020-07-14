import { ReactElement } from 'react'
import Panel from '../Components/Panel'
import ContactItem from '../Components/ContactItem'
import Icon from '../Components/Icon'
import theme from '../theme'

type Contact = {
  readonly perfil?: string
  readonly username: string
  // readonly date: string
}

export default function Contacts(): ReactElement {
  const contacts: readonly Contact[] = [{
    username: 'Paula'
  }, {
    username: 'Andreina'
  }]
  return (
    <Panel h="calc(100vh - 100px)" w="250px">
      {contacts.map(({ username }, key) => (
        <ContactItem key={key}>
          <Icon bg={theme.light} color={theme.dark}>{username.match(/^[a-z]/i)[0].toUpperCase()}</Icon>
          <span>{username}</span>
        </ContactItem>
      ))}
    </Panel>
  )
}

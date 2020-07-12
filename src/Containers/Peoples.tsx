import { ReactElement } from 'react'
import MenuItem from '../Components/MenuItem'
import Panel from '../Components/Panel'
import theme from '../theme'

export default function Peoples(): ReactElement {
  return (
    <Panel color={theme.light} bg={theme.dark} w="600px">
      Hola
      <MenuItem
        bg={theme.light}
        color={theme.dark}
        borderColor={theme.tintLight}
      >
        asdasd
      </MenuItem>
      <MenuItem borderColor={theme.tintLight}>asdasd</MenuItem>
    </Panel>
  )
}

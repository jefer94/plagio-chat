import { ReactElement } from 'react'
import { faAdjust, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from '../Components/FontAwesome'
// import { faSun } from '@fortawesome/free-regular-svg-icons'
import Panel from '../Components/Panel'
import theme from '../theme'
import Brand from '../Components/Brand'
import Div from '../Components/Div'
import Link from '../Components/Link'

export default function BrandBar(): ReactElement {
  return (
    <Panel h="50px" boxShadow={theme.lightShadow({ y: '1px' })}>
      <Div display="inline-block">
        <Brand fontSize={30}>Plagio Chat</Brand>
      </Div>

      <Div display="inline-block" width="calc(100vw - 134px)" textAlign="right">

        <Div display="inline-block" mx={30}>
          <Link mr={3} color={theme.dark} href="#" role="button" onClick={() => {}}>Directs</Link>
          <Link ml={3} color={theme.dark} href="#" role="button" onClick={() => {}}>Groups</Link>
        </Div>

        <Div display="inline-block">
          {/* <FontAwesome px={10} icon={faPaperPlane} /> */}
          <FontAwesome px={10} icon={faAdjust} />
          {/* <FontAwesome px={10} icon={faCog} /> */}
          <FontAwesome px={10} icon={faEllipsisV} />
        </Div>
      </Div>
    </Panel>
  )
}

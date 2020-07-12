import Head from 'next/head'
import { ReactElement } from 'react'
import HorizontalFlex from '../Components/HorizontalFlex'
import App from '../Containers/App'

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
        <App />
      </HorizontalFlex>
    </>
  )
}

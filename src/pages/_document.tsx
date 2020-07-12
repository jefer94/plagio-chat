/* eslint-disable functional/no-class */
import Document, { Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
  }
`
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <body style={{
          margin: 0,
          padding: 0,
          color: theme.dark,
          // fontSize: 30,
          backgroundColor: theme.white,
          fontFamily: "'Comfortaa', cursive"
          // fontFamily: "'Poiret One', cursive"
        }}
        >
          {/* <link
            // rel="preload"
            href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
            // as="font"
            rel="stylesheet"
          /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
          <Main />
          <NextScript />
          <GlobalStyle />
        </body>
      </html>
    )
  }
}

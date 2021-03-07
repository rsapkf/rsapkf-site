import React from "react"
import { Link } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import Head from "./Head"
import LastUpdatedPages from "./LastUpdatedPages"

import "../styles/index.scss"
import layoutStyles from "./Layout.module.scss"

import ThemeContext from "../context/ThemeContext"
import { MDXProvider } from "@mdx-js/react"

const shortcodes = { Link, Head, LastUpdatedPages }

const Layout = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? layoutStyles.dark : layoutStyles.light}>
            <div className={layoutStyles.container}>
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    </MDXProvider>
  )
}

export default Layout

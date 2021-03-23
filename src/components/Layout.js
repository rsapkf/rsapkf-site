import React from "react"
import { Link } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import Head from "./Head"
import LastUpdatedPages from "./LastUpdatedPages"

import "../styles/global.scss"
import styles from "./Layout.module.scss"

import ThemeContext from "../context/ThemeContext"
import { MDXProvider } from "@mdx-js/react"
import "./FontAwesome"

const shortcodes = { Link, Head, LastUpdatedPages }

const Layout = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? styles.dark : styles.light}>
            <div className={styles.container}>
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

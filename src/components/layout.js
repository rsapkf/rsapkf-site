import React from "react"
import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import LastUpdatedPages from "./last-updated-pages"

import "../styles/global.scss"
import "../styles/typography.scss"
import styles from "./layout.module.scss"

import ThemeContext from "../context/theme-context"
import { MDXProvider } from "@mdx-js/react"
import "./font-awesome"

const shortcodes = { Link, SEO, LastUpdatedPages }

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

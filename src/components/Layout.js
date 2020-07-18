import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

import ThemeContext from "../context/ThemeContext"

const Layout = ({ children }) => {
  return (
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
  )
}

export default Layout

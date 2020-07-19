import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

import ThemeContext from "../context/ThemeContext"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeContext.Consumer>
      {theme => (
        <header className={headerStyles.header}>
          <h1>
            <Link className={headerStyles.title} to="/">
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <span
            className={headerStyles.darkSwitcher}
            onClick={theme.toggleDark}
          >
            {theme.dark ? (
              <img src={sun} alt="Sun" />
            ) : (
              <img src={moon} alt="Moon" />
            )}
          </span>
          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/"
                >
                  ~
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/technologies"
                >
                  Technologies
                </Link>
              </li> */}
              <li className={headerStyles.dropdown}>
                <Link
                  className={`${headerStyles.navItem} ${headerStyles.dropdownButton}`}
                  activeClassName={headerStyles.activeNavItem}
                  to="#"
                >
                  other pages
                </Link>
                <div
                  className={headerStyles.dropdownContent}
                  style={theme.dark ? {} : { backgroundColor: "#faf4fa" }}
                >
                  <Link to="/technologies">Technologies</Link>
                  <Link to="/books">Books</Link>
                  <Link to="/recommendations">Recommendations</Link>
                  <Link to="/puzzles">Puzzle List</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <Link to="/linklog">Linklog</Link>
                  <Link to="/microblog">Microblog</Link>
                  <Link to="/now">/now</Link>
                  <Link to="/uses">/uses</Link>
                </div>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header

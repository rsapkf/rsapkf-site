import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

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
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
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
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/technologies"
            >
              Technologies
            </Link>
          </li>
          <li className={headerStyles.dropdown}>
            <Link
              className={`${headerStyles.navItem} ${headerStyles.dropdownButton}`}
              activeClassName={headerStyles.activeNavItem}
              to="#"
            >
              other pages/
            </Link>
            <div className={headerStyles.dropdownContent}>
              <Link to="/now">Now</Link>
              <Link to="/books">Books</Link>
              <Link to="/recommendations">Recommendations</Link>
              <Link to="/wishlist">Wishlist</Link>
              <Link to="/linklog">Linklog</Link>
              <Link to="/microblog">Microblog</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header >
  )
}

export default Header

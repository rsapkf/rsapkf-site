import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"
// import sun from "../assets/sun.png"
// import moon from "../assets/moon.png"

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
              // <img src={sun} alt="Sun" />
              <i
                className="fas fa-sun"
                style={{ color: "#e1daeccc", fontSize: "1.1rem" }}
              ></i>
            ) : (
              // <img src={moon} alt="Moon" />
              <i
                className="fas fa-moon"
                style={{ color: "#403742", fontSize: "1.1rem" }}
              ></i>
            )}
          </span>
          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <Link className={headerStyles.navItem} to="/">
                  ~
                </Link>
              </li>
              <li className={headerStyles.dropdown}>
                <Link
                  className={`${headerStyles.navItem} ${headerStyles.dropdownButton}`}
                  activeClassName={headerStyles.activeNavItem}
                  to="#"
                >
                  Writing
                </Link>
                <div
                  className={headerStyles.dropdownContent}
                  style={theme.dark ? {} : { backgroundColor: "#faf4fa" }}
                >
                  <Link to="/blog">
                    <i className="fas fa-code-branch"></i> Blog
                  </Link>
                  <Link to="/thoughts">
                    <i className="far fa-lightbulb"></i> Thoughts
                  </Link>
                </div>
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
              <li className={headerStyles.dropdown}>
                <Link
                  className={`${headerStyles.navItem} ${headerStyles.dropdownButton}`}
                  activeClassName={headerStyles.activeNavItem}
                  to="#"
                >
                  pages
                </Link>
                <div
                  className={headerStyles.dropdownContent}
                  style={theme.dark ? {} : { backgroundColor: "#faf4fa" }}
                >
                  <Link to="/technologies">Technologies</Link>
                  <Link
                    to="/puzzles"
                    style={{ borderBottom: "1px solid gray" }}
                  >
                    Puzzle List
                  </Link>
                  <Link to="/recommendations">Recommendations</Link>
                  <Link to="/books">
                    <i className="fas fa-book"></i> Books
                  </Link>
                  <Link
                    to="/movies-tv"
                    style={{ borderBottom: "1px solid gray" }}
                  >
                    Movies and Shows
                  </Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <Link to="/donate" style={{ borderBottom: "1px solid gray" }}>
                    <i className="fas fa-donate"></i> Donate
                  </Link>
                  <Link to="/now">Now</Link>
                  <Link to="/uses" style={{ borderBottom: "1px solid gray" }}>
                    Uses
                  </Link>
                  <Link to="/linklog">Linklog *</Link>
                  <Link to="/microblog">Microblog *</Link>
                </div>
              </li>
              <li className={headerStyles.dropdown}>
                <Link
                  className={`${headerStyles.navItem} ${headerStyles.dropdownButton}`}
                  activeClassName={headerStyles.activeNavItem}
                  to="#"
                >
                  links
                </Link>
                <div
                  className={headerStyles.dropdownContent}
                  style={theme.dark ? {} : { backgroundColor: "#faf4fa" }}
                >
                  <a href="https://links.rsapkf.xyz/">Linkroll</a>
                  <a href="https://notes.rsapkf.xyz/">Notes</a>
                  <a
                    href="https://github.com/rsapkf/dotfiles/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linux"></i> Dotfiles
                  </a>
                  <a
                    href="https://github.com/rsapkf/wallpapers/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wallpapers
                  </a>
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

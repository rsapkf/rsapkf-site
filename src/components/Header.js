import React from "react"
import { Link } from "gatsby"

import headerStyles from "./Header.module.scss"
// import sun from "../assets/sun.png"
// import moon from "../assets/moon.png"

import ThemeContext from "../context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <header className={headerStyles.header}>
          <h1>
            <Link className={headerStyles.title} to="/">
              ~rsapkf
            </Link>
          </h1>
          <button
            className={headerStyles.darkSwitcher}
            onClick={theme.toggleDark}
          >
            {theme.dark ? (
              // <img src={sun} alt="Sun" />
              <FontAwesomeIcon
                icon={["fas", "sun"]}
                style={{ color: "#e1daeccc", fontSize: "1.1rem" }}
              />
            ) : (
              // <img src={moon} alt="Moon" />
              <FontAwesomeIcon
                icon={["fas", "moon"]}
                style={{ color: "#403742", fontSize: "1.1rem" }}
              />
            )}
          </button>
          <nav>
            <ul className={headerStyles.navList}>
              <li className={headerStyles.dropdown}>
                <Link
                  className={`${headerStyles.navItem} ${headerStyles.dropdownButton}`}
                  to="#"
                >
                  Writing
                </Link>
                <div
                  className={headerStyles.dropdownContent}
                  style={theme.dark ? {} : { backgroundColor: "#faf4fa" }}
                >
                  <Link to="/blog">
                    <FontAwesomeIcon icon={["fas", "code-branch"]} /> Blog
                  </Link>
                  <Link to="/thoughts">
                    <FontAwesomeIcon icon={["far", "lightbulb"]} /> Thoughts
                  </Link>
                  <Link to="/hobbies">
                    <FontAwesomeIcon icon={["fas", "puzzle-piece"]} /> Hobbies
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
              <li className={headerStyles.dropdown}>
                <Link
                  className={`${headerStyles.navItem} ${headerStyles.dropdownButton}`}
                  to="#"
                >
                  pages
                </Link>
                <div
                  className={headerStyles.dropdownContent}
                  style={theme.dark ? {} : { backgroundColor: "#faf4fa" }}
                >
                  <Link to="/about">About</Link>
                  <Link
                    to="/contact"
                    style={{ borderBottom: "1px solid gray" }}
                  >
                    Contact
                  </Link>
                  <Link to="/technologies">Technologies</Link>
                  <Link
                    to="/puzzles"
                    style={{ borderBottom: "1px solid gray" }}
                  >
                    Puzzle List
                  </Link>
                  <Link to="/recommendations">Recommendations</Link>
                  <Link to="/books">
                    <FontAwesomeIcon icon={["fas", "book"]} /> Books
                  </Link>
                  <Link
                    to="/movies-tv"
                    style={{ borderBottom: "1px solid gray" }}
                  >
                    Movies and Shows
                  </Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <Link to="/donate" style={{ borderBottom: "1px solid gray" }}>
                    <FontAwesomeIcon icon={["fas", "donate"]} /> Donate
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
                    <FontAwesomeIcon icon={["fab", "linux"]} /> Dotfiles
                  </a>
                  <a
                    href="https://github.com/rsapkf/rupiks/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fas", "cube"]} /> CFOP Algs
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

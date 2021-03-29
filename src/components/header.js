import React from "react"
import { Link } from "gatsby"

import styles from "./header.module.scss"
// import sun from "../assets/sun.png"
// import moon from "../assets/moon.png"

import ThemeContext from "../context/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <header className={styles.header}>
          <Link className={styles.title} to="/">
            ~rsapkf
          </Link>
          <button
            aria-label="Toggle Theme"
            className={styles.darkSwitcher}
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
            <ul
              className={styles.navList}
              style={{
                color: theme.dark ? "rgb(142, 143, 142)" : "rgb(159, 43, 165)",
              }}
            >
              <li className={styles.dropdown}>
                <button
                  className={`${styles.navItem} ${styles.dropdownButton}`}
                >
                  Writing
                </button>
                <div
                  className={styles.dropdownContent}
                  style={{
                    backgroundColor: theme.dark ? "#01000e" : "#faf4fa",
                  }}
                >
                  <ul>
                    <li>
                      <Link to="/blog">
                        <FontAwesomeIcon icon={["fas", "code-branch"]} /> Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/thoughts">
                        <FontAwesomeIcon icon={["far", "lightbulb"]} /> Thoughts
                      </Link>
                    </li>
                    <li>
                      <Link to="/hobbies">
                        <FontAwesomeIcon icon={["fas", "puzzle-piece"]} />{" "}
                        Hobbies
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                >
                  Projects
                </Link>
              </li>
              <li className={styles.dropdown}>
                <button
                  className={`${styles.navItem} ${styles.dropdownButton}`}
                >
                  pages
                </button>
                <div
                  className={styles.dropdownContent}
                  style={{
                    backgroundColor: theme.dark ? "#01000e" : "#faf4fa",
                  }}
                >
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        style={{ borderBottom: "1px solid gray" }}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/technologies">Technologies</Link>
                    </li>
                    <li>
                      <Link
                        to="/puzzles"
                        style={{ borderBottom: "1px solid gray" }}
                      >
                        Puzzle List
                      </Link>
                    </li>
                    <li>
                      <Link to="/recommendations">Recommendations</Link>
                    </li>
                    <li>
                      <Link to="/books">
                        <FontAwesomeIcon icon={["fas", "book"]} /> Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/movies-tv"
                        style={{ borderBottom: "1px solid gray" }}
                      >
                        Movies and Shows
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link
                        to="/donate"
                        style={{ borderBottom: "1px solid gray" }}
                      >
                        <FontAwesomeIcon icon={["fas", "donate"]} /> Donate
                      </Link>
                    </li>
                    <li>
                      <Link to="/now">Now</Link>
                    </li>
                    <li>
                      <Link
                        to="/uses"
                        style={{ borderBottom: "1px solid gray" }}
                      >
                        Uses
                      </Link>
                    </li>
                    <li>
                      <Link to="/linklog">Linklog *</Link>
                    </li>
                    <li>
                      <Link to="/microblog">Microblog *</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.dropdown}>
                <button
                  className={`${styles.navItem} ${styles.dropdownButton}`}
                >
                  links
                </button>
                <div
                  className={styles.dropdownContent}
                  style={{
                    backgroundColor: theme.dark ? "#01000e" : "#faf4fa",
                  }}
                >
                  <ul>
                    <li>
                      <a href="https://links.rsapkf.xyz/">Linkroll</a>
                    </li>
                    <li>
                      <a href="https://notes.rsapkf.xyz/">Notes</a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/rsapkf/dotfiles/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={["fab", "linux"]} /> Dotfiles
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/rsapkf/rupiks/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={["fas", "cube"]} /> CFOP Algs
                      </a>
                    </li>
                  </ul>
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

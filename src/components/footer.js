import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div style={{ float: "right" }}>
        <Link to="/feeds" style={{ textDecoration: "none" }}>
          rss
        </Link>{" "}
        &bull;{" "}
        <a
          href="https://github.com/rsapkf/rsapkf.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          // style={{ pointerEvents: 'none' }}
        >
          source
        </a>
      </div>
      <p>
        © 2018 - {new Date().getFullYear()} <Link to="/">rsapkf.xyz</Link>
      </p>
    </footer>
  )
}

export default Footer

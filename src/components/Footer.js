import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div style={{ float: "right", fontFamily: "Open Sans" }}>
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
      <p style={{ fontFamily: "Open Sans" }}>
        © 2018 - {new Date().getFullYear()} <Link to="/">rsapkf.xyz</Link>
      </p>
    </footer>
  )
}

export default Footer

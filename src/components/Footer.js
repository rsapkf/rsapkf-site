import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div style={{ float: "right", fontFamily: "Open Sans" }}>
        <a href="https://github.com/rsapkf" style={{ textDecoration: "none" }}>
          github
        </a>{" "}
        &bull;{" "}
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
        © 2018 - {new Date().getFullYear()}{" "}
        <Link to="/">{data.site.siteMetadata.author}</Link>
      </p>
    </footer>
  )
}

export default Footer

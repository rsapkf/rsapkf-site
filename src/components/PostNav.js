import React from "react"
import { Link } from "gatsby"
import styles from "./PostNav.module.scss"

export default function PostNav({ prev, next, postType }) {
  return (
    <div className={styles.container}>
      {prev && (
        <div>
          <Link to={`/${postType}/${prev.node.fields.slug}`}>
            <span className={styles.prev}>← Previous</span>
            <br />
          </Link>
          <span className={styles.title}>{prev.node.frontmatter.title}</span>
        </div>
      )}
      {next && (
        <div style={{ float: "right" }}>
          <Link to={`/${postType}/${next.node.fields.slug}`}>
            <span className={styles.next}>Next →</span>
            <br />
          </Link>
          <span className={styles.title}>{next.node.frontmatter.title}</span>
        </div>
      )}
    </div>
  )
}
